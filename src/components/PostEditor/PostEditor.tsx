'use client';

import React, { useState, useEffect } from 'react';
import { User } from '@/types/User';
import {
  Button,
  TextField,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const INNERGARDEN_API = process.env.NEXT_PUBLIC_INNERGARDEN_API;

const PostEditor = ({ currentUser }: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postType, setPostType] = useState('announcement'); // Default post type
  const [isImportant, setIsImportant] = useState(false); // PIN option
  const router = useRouter();

  const handlePostSubmit = async () => {
    if (!title || !content) {
      toast.warning('Please fill in both the title and content fields.');
      return;
    }

    const postData = {
      title,
      content,
      section: postType,
      isImportant,
      userRole: currentUser?.userRole,
      userEmail: currentUser?.userEmail,
      userFirstName: currentUser?.userFirstName,
      userLastName: currentUser?.userLastName,
    };

    try {
      const response = await fetch(INNERGARDEN_API + `/posts/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        toast.success('Post created successfully!');
        setTitle('');
        setContent('');
        setPostType('announcement');
        setIsImportant(false);
        router.push('/posts/all');
      } else {
        const errorData = await response.json();
        toast.error(
          `Failed to create post: ${errorData.message || 'Unknown error'}`
        );
      }
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Failed to create post. Please try again later.');
    }
  };

  return (
    <div>
      {/* PIN Option (for Admins or higher roles) */}
      {currentUser && currentUser.userRole >= 2 && (
        <FormControlLabel
          control={
            <Checkbox
              checked={isImportant}
              onChange={(e) => setIsImportant(e.target.checked)}
              color='primary'
            />
          }
          label='Pin this post'
          sx={{ marginBottom: '1rem' }}
        />
      )}

      {/* Post Type Selection */}
      <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
        <InputLabel id='post-type-label'>Post Type</InputLabel>
        <Select
          labelId='post-type-label'
          value={postType}
          onChange={(e) => setPostType(e.target.value)}
        >
          <MenuItem value='announcement'>Announcement</MenuItem>
          <MenuItem value='news'>News</MenuItem>
          <MenuItem value='faq'>FAQ</MenuItem>
        </Select>
      </FormControl>

      {/* Title Input */}
      <div className='flex items-center mb-4'>
        <TextField
          label='Post Title'
          variant='outlined'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ flexGrow: 1, marginRight: '0.5rem' }}
        />
        <IconButton
          onClick={handlePostSubmit}
          sx={{
            backgroundColor: '#F97316',
            color: '#fdba74',
            borderRadius: '8px',
            borderColor: '#F97316',
            border: '2px solid',
            '&:hover': {
              backgroundColor: '#F97316',
              color: '#ffffff',
            },
            width: '56px',
            height: '56px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <AddIcon />
        </IconButton>
      </div>

      {/* Quill Editor */}
      <div style={{ height: '400px', marginBottom: '1rem' }}>
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              ['link', 'image'],
            ],
          }}
          formats={[
            'header',
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'code-block',
            'list',
            'bullet',
            'script',
            'link',
            'image',
          ]}
          theme='snow'
          style={{
            height: '80%',
          }}
        />
      </div>
    </div>
  );
};

export default PostEditor;
