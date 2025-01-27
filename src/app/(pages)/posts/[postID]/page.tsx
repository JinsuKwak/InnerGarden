// // app/posts/[postID]/page.tsx
// import React from 'react';

// interface PostPageProps {
//   params: { postID: string };
// }

// const INNERGARDEN_API = process.env.NEXT_PUBLIC_INNERGARDEN_API;

// const PostPage = async ({ params }: PostPageProps) => {
//   const { postID } = params;

//   // API 호출
//   let post;
//   try {
//     const res = await fetch(INNERGARDEN_API + '/post/' + postID, {
//       method: 'GET',
//       cache: 'no-store', // Always fetch fresh data
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch post. Status: ${res.status}`);
//     }

//     post = await res.json();
//   } catch (error) {
//     return (
//       <div style={{ padding: '1rem', color: 'red' }}>
//         <h1>Error</h1>
//         <p>{(error as Error).message}</p>
//       </div>
//     );
//   }

//   // Post 데이터 렌더링
//   return (
//     <div style={{ padding: '1rem' }}>
//       <h1>{post.title}</h1>
//       <p>
//         <strong>Type:</strong> {post.section}
//       </p>
//       <p>
//         <strong>Author:</strong> {post.userFirstName} {post.userLastName}
//       </p>
//       <p>
//         <strong>Content:</strong>
//       </p>
//       <div dangerouslySetInnerHTML={{ __html: post.content }} />
//     </div>
//   );
// };

// export default PostPage;

'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { POST_TOPICS } from '@/constants';
import InnerGardenAboutUsImg from '@/../public/InnerGarden-AboutUs-1.jpg';
import Image from 'next/image';
import SideNavPageContainer from '@/components/bases/SideNavPageContainer';
import PostEditor from '@/components/PostEditor/PostEditor';
import PostViewer from '@/components/postViewer/postViewer';

import getCurrentUser from '@/app/actions/getCurrentUser';
import { User } from '@/types/User';

interface PostPageProps {
  params: { postID: string };
}

const postID = async ({ params }: PostPageProps) => {
  const { postID } = params;

  return (
    <SideNavPageContainer title={'Post'} sideTopics={POST_TOPICS}>
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
        <PostViewer postID={postID} />
      </div>
    </SideNavPageContainer>
  );
};

export default postID;
