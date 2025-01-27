'use client';
import React, { useState, useEffect } from 'react';
import { POST_TOPICS } from '@/constants';
import InnerGardenAboutUsImg from '@/../public/InnerGarden-AboutUs-1.jpg';
import Image from 'next/image';
import SideNavPageContainer from '@/components/bases/SideNavPageContainer';
import PostPreviewContainer from '@/components/posts/PostPreviewContainer';
import Link from 'next/link';
import { PREVEIW_NUM_PAGE } from '@/constants';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { User } from '@/types/User';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AllPosts = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };

    fetchUser();
  }, []);
  return (
    <SideNavPageContainer title={'Posts'} sideTopics={POST_TOPICS}>
      <div
        className={`relative w-[100%] h-[9rem] overflow-hidden filter saturate-75`}
      >
        <Image
          fill
          style={{ objectFit: 'cover' }}
          src={InnerGardenAboutUsImg}
          alt=''
          sizes='auto'
          priority={true}
        />
      </div>
      <div className='flex flex-col'>
        <div className='p-[2rem] flex flex-col'>
          <div className='flex justify-between items-center pb-[0.6rem]'>
            <div className='font-semibold text-[1em] hover:underline'>
              <Link href='/posts/all'>
                <span>{`All Posts`}</span>
              </Link>
            </div>

            {user && (
              <Button
                variant='contained'
                color='primary'
                startIcon={<AddIcon />}
                onClick={() => {
                  window.location.href = '/posts/create';
                }}
                sx={{
                  backgroundColor: '#FB923C',
                  color: '#fdba74',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    backgroundColor: '#FB923C',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
                    color: '#ffffff',
                  },
                }}
              >
                New Post
              </Button>
            )}
          </div>{' '}
          <div className='pb-[4rem]'>
            <PostPreviewContainer
              isMainPage={false}
              sections={['announcement', 'news', 'faq']}
              postsPerPage={PREVEIW_NUM_PAGE}
              isVeiwOnlyPage={true}
              showBlank={true}
              displaySections={true}
            />
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default AllPosts;
