'use client';
import React, { useEffect, useState } from 'react';
import getPosts from '@/app/actions/getPostPreviews';
import PostLink from './PostLink';
import { PREVEIW_NUM_MAIN } from '@/constants';
import performSortPosts from '@/app/util/performSortPosts';
import { PostPreview } from '@/types/PostPreview';
import { toast } from 'react-toastify';
import transformToPostPreview from '@/app/util/transformToPostPreview';
import { User } from '@/types/User';
import getCurrentUser from '@/app/actions/getCurrentUser';
import PostTopbar from './PostTopbar';
import PostPagination from './PostPagination';

interface PostPreviewContainerProps {
  isMainPage: boolean;
  sections: string[];
  postsPerPage: number;
  isVeiwOnlyPage: boolean;
  showBlank: boolean;
  displaySections: boolean;
  sort?: string;
}

const PostPreviewContainer = ({
  isMainPage,
  sections,
  postsPerPage,
  isVeiwOnlyPage,
  showBlank,
  displaySections,
  sort = 'createdTime_dec',
}: PostPreviewContainerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allPostPreviews, setAllPostPreviews] = useState<PostPreview[]>([]);
  const [visiblePostPreviews, setVisiblePostPreviews] = useState<PostPreview[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const totalPages = Math.ceil(allPostPreviews.length / postsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts
        const postsResult = await getPosts(sections);
        const transformedPreviews = transformToPostPreview(postsResult);

        // Fetch current user
        const user = await getCurrentUser();
        setCurrentUser(user);

        // Sort posts
        const sortedPreviews = performSortPosts(transformedPreviews, sort);
        setAllPostPreviews(sortedPreviews);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts or user:', error);
        toast.warning('Failed to load posts or user data.');
        setIsLoading(false);
      }
    };
    fetchData();
  }, [sections, sort]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const newVisiblePostPreviews = allPostPreviews.slice(
      startIndex,
      startIndex + postsPerPage
    );
    setVisiblePostPreviews(newVisiblePostPreviews);
  }, [allPostPreviews, currentPage, postsPerPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Calculate the number of blank posts needed on the last page
  const numBlankPosts =
    showBlank && visiblePostPreviews.length < postsPerPage
      ? postsPerPage - visiblePostPreviews.length
      : 0;

  // Create an array of blank posts
  const blankPosts = Array.from({ length: numBlankPosts }, (_, i) => (
    <PostLink
      key={`blank_${i}`}
      postPreview={null}
      isMainPage={isMainPage}
      displaySections={displaySections}
      currentUser={null}
    />
  ));

  return (
    <div className='flex flex-col'>
      {!isMainPage && (
        <PostTopbar
          isVeiwOnlyPage={isVeiwOnlyPage}
          isMainPage={isMainPage}
          displaySections={displaySections}
        />
      )}

      <div className='w-full h-fit'>
        {visiblePostPreviews.map((postPreview, i) => (
          <PostLink
            key={i}
            postPreview={postPreview}
            isVeiwOnlyPage={isVeiwOnlyPage}
            isMainPage={isMainPage}
            displaySections={displaySections}
            currentUser={currentUser}
          />
        ))}
        {blankPosts}
      </div>
      {!isMainPage && (
        <>
          <PostPagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
          <div className='flex w-full border-b-[1px] border-black text-base justify-between items-center uppercase'></div>
        </>
      )}
    </div>
  );
};

export default PostPreviewContainer;
