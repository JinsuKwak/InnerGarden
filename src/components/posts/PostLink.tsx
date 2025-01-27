'use client';
import React, { useState, useEffect } from 'react';
import { PostPreview } from '@/types/PostPreview';
import { IconButton } from '@mui/material';
import transformToRole from '@/app/util/transformToRole';
import Link from 'next/link';
import useIsSmall from '@/app/hooks/useIsSmall';
import { styled } from '@mui/material/styles';
import { FaTrashCan, FaRegFileLines } from 'react-icons/fa6';
import useIsMedium from '@/app/hooks/useIsMedium';
import { formatTime } from '@//helpers/dayJS';
import { User } from '@/types/User';
import getCurrentUser from '@/app/actions/getCurrentUser';

interface PostLinkProps {
  postPreview: PostPreview | null;
  isVeiwOnlyPage?: boolean;
  isMainPage: boolean;
  displaySections: boolean;
  currentUser: User | null;
}

const PostLinkProps = ({
  postPreview,
  isVeiwOnlyPage,
  isMainPage,
  displaySections,
  currentUser,
}: PostLinkProps) => {
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();

  const displaySection = (section: string): string => {
    switch (section) {
      case 'announcement':
        return 'annc';

      case 'faq':
        return 'FAQ';

      default:
        return section;
    }
  };

  const isEditable = (): boolean => {
    if (currentUser && postPreview) {
      if (postPreview.userEmail === currentUser.userEmail) {
        return true;
      }
      if (currentUser.userRole > postPreview.userRole) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      {postPreview ? (
        <>
          <div className='first:w-full first:border-t-[1px] first:border-black'></div>
          <div className='flex text-base h-8 py-1 px-1 items-center justify-between'>
            {/* {############################ PART 1 ##########################} */}
            <div
              className={`flex ${
                isSmall && isMainPage ? 'w-[70%] mr-[1rem]' : 'w-[60%]'
              }`}
            >
              {/* {##################### IMPORTANT ###################} */}
              <div
                className={`flex justify-center min-w-[1.4rem] w-[1.4rem] text-red-600 `}
              >
                {postPreview.isImportant ? '!' : ''}
              </div>
              {/* {##################### IMPORTANT ###################} */}
              {/* {###################### SECTION ####################} */}
              {displaySections && (
                <div className='flex justify-start w-[3.6rem] pr-2  '>
                  <Link href={'/posts/' + postPreview.section}>
                    <span className='flex'>
                      {`[`}
                      <span className='hover:underline'>
                        {displaySection(postPreview.section)}
                      </span>
                      {`]`}
                    </span>
                  </Link>
                </div>
              )}
              {/* {###################### SECTION ####################} */}
              {/* {####################### TITLE #####################} */}
              <div className='flex justify-start w-[70%] pr-2 capitalize'>
                <Link
                  href={'/posts/' + '/' + postPreview.postID}
                  className='truncate'
                >
                  <span className={`hover:underline`}>{postPreview.title}</span>
                </Link>
              </div>
              {/* {####################### TITLE #####################} */}
            </div>
            {/* {############################ PART 1 ##########################} */}
            {/* {############################ PART 2 ##########################} */}
            <div className='flex items-center w-[40%] justify-end'>
              {!isSmall && (
                <div className={`flex w-full items-center justify-end`}>
                  {/* {################ S+ ROLE ###############} */}
                  <div className='flex w-[6.4rem] pr-2 justify-center'>
                    <span>
                      {transformToRole(postPreview.userRole) === 'Root Admin'
                        ? 'Admin'
                        : transformToRole(postPreview.userRole)}
                    </span>{' '}
                  </div>
                  {/* {################ S+ ROLE ###############} */}
                  {/* {########### M+ User.FirstName ##########} */}
                  {!isMainPage && !isMedium && (
                    <div className='flex items-center justify-start w-[5rem] truncate'>
                      <span className='capitalize'>
                        {postPreview.userFirstName}
                      </span>
                    </div>
                  )}
                  {/* {########### M+ User.FirstName ##########} */}
                  {/* {############ S+ Updated Time ###########} */}
                  <div className={`flex px-2 w-[4rem] justify-center`}>
                    <span>
                      {/* {formatTime(postPreview.editedTime.toString())} */}
                      {formatTime(postPreview.createdTime.toString())}
                    </span>
                  </div>
                  {/* {############ S+ Updated Time ###########} */}
                </div>
              )}
              {/* {############ S- Updated Time ###########} */}
              {isSmall && (
                <div className={`flex px-2 w-[4rem] justify-center`}>
                  <span>
                    {/* {formatTime(postPreview.editedTime.toString())} */}
                    {formatTime(postPreview.createdTime.toString())}
                  </span>
                </div>
              )}
              {/* {############ S- Updated Time ###########} */}

              {/* {####################### EDIT ####################} */}
              {!isVeiwOnlyPage && (
                <>
                  <StyledIconButton
                    disabled={!isEditable()}
                    className={`text-lg transition-all ${
                      isEditable()
                        ? 'text-orange-300 hover:text-orange-500'
                        : 'text-white'
                    }`}
                  >
                    <FaRegFileLines />
                  </StyledIconButton>
                  <StyledIconButton
                    disabled={!isEditable()}
                    className={`text-lg transition-all ${
                      isEditable()
                        ? 'text-red-300 hover:text-red-500'
                        : 'text-white'
                    }`}
                  >
                    <FaTrashCan />
                  </StyledIconButton>
                </>
              )}
              {/* {####################### EDIT ####################} */}
            </div>
            {/* {############################ PART 2 ##########################} */}
          </div>
          <div className='w-full border-b-[1px] border-gray-300 last:border-b-[1px] last:border-black '></div>
        </>
      ) : (
        <>
          <div className='first:w-full first:border-t-[1px] first:border-black'></div>
          <div className='flex text-base h-8 py-1 px-1 items-center justify-between'>
            {!isSmall && (
              <div className='flex items-center w-[50%] justify-center'>
                <span>{`-`}</span>
              </div>
            )}
            <div
              className={`flex items-center ${
                isSmall ? 'w-[100%]' : 'w-[50%]'
              } justify-center`}
            >
              <span>{`-`}</span>
            </div>
          </div>
          <div className='w-full border-b-[1px] border-gray-300 last:border-b-[1px] last:border-black '></div>
        </>
      )}
    </>
  );
};

export default PostLinkProps;

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '&.MuiButtonBase-root:hover': {
    backgroundColor: 'transparent',
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&:disabled': {
    color: '#fff',
  },
}));
