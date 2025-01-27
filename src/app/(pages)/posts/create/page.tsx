'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { POST_TOPICS } from '@/constants';
import InnerGardenAboutUsImg from '@/../public/InnerGarden-AboutUs-1.jpg';
import Image from 'next/image';
import SideNavPageContainer from '@/components/bases/SideNavPageContainer';
import PostEditor from '@/components/PostEditor/PostEditor';

import getCurrentUser from '@/app/actions/getCurrentUser';
import { User } from '@/types/User';

const CreatePost = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <SideNavPageContainer title={'New Post'} sideTopics={POST_TOPICS}>
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

      <div style={{ padding: '1rem' }}>
        <PostEditor currentUser={currentUser} />
      </div>
    </SideNavPageContainer>
  );
};

export default CreatePost;
