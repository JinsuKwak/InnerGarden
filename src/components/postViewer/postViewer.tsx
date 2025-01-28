'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const INNERGARDEN_API = process.env.NEXT_PUBLIC_INNERGARDEN_API;

interface PostViewerProps {
  postID: string;
}

const formatSection = (section: string): string => {
  switch (section) {
    case 'announcement':
      return 'Announcement';
    case 'news':
      return 'News';
    case 'faq':
      return 'FAQ';
    default:
      return 'Unknown Section';
  }
};

const PostViewer = ({ postID }: PostViewerProps) => {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${INNERGARDEN_API}/post/${postID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch post. Status: ${response.status}`);
        }

        const postData = await response.json();
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
        toast.error('Failed to load the post. Please try again later.');
        router.push('/posts/all');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postID, router]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-[400px]'>
        <CircularProgress />
      </div>
    );
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        maxWidth: '100%',
        minHeight: '100%',
        margin: '0 auto',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          fontSize: '1.4rem',
          color: '#555',
          marginBottom: '1rem',
          textAlign: 'left',
        }}
      >
        <strong>{formatSection(post.section)}</strong>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.9rem',
          color: '#555',
          marginBottom: '1.5rem',
        }}
      >
        <div></div>
        <div style={{ textAlign: 'right' }}>
          <p>
            <strong>Created:</strong>{' '}
            {new Date(post.createdTime).toLocaleDateString()}{' '}
            {new Date(post.createdTime).toLocaleTimeString([], {
              hour: 'numeric',
              minute: 'numeric',
              hourCycle: 'h12',
            })}
          </p>
          {post.editedTime && (
            <p>
              <strong>Edited:</strong>{' '}
              {new Date(post.editedTime).toLocaleDateString()}{' '}
              {new Date(post.editedTime).toLocaleTimeString([], {
                hour: 'numeric',
                minute: 'numeric',
                hourCycle: 'h12',
              })}
            </p>
          )}
          <p>
            <strong>By:</strong> {post.userFirstName} {post.userLastName}
          </p>
        </div>
      </div>

      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          borderBottom: '2px solid #ddd',
          paddingBottom: '0.5rem',
        }}
      >
        {post.title}
      </h1>

      <div
        style={{
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: '#ffffff',
          minHeight: '300px',
          borderRadius: '8px',
          border: '1px solid #ddd',
        }}
      >
        <ReactQuill
          value={post.content}
          readOnly={true}
          theme='bubble'
          style={{
            lineHeight: '1.5',
            color: '#333',
          }}
        />
      </div>
    </div>
  );
};

export default PostViewer;
