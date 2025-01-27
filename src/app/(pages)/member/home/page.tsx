import React from 'react';
import { CONTACT_TOPICS } from '@/constants';
import InnerGardenAboutUsImg from '@/../public/InnerGarden-AboutUs-3.jpg';
import Image from 'next/image';
import SideNavPageContainer from '@/components/bases/SideNavPageContainer';
import ButtonLink from '@/components/buttons/ButtonLink';
import { MEMBER_TOPICS } from '@/constants';
import getCurrentUser from '@/app/actions/getCurrentUser';
import transformToRole from '@/app/util/transformToRole';

const MemberHome = () => {
  const currentUser = getCurrentUser();

  const getSideTopics = () => {
    if (!currentUser) {
      return MEMBER_TOPICS[0];
    } else {
      return MEMBER_TOPICS[3];
    }
  };

  return (
    <SideNavPageContainer title={'Members'} sideTopics={getSideTopics()}>
      <div
        className={`relative w-[100%] h-[11rem] overflow-hidden filter saturate-75`}
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
      <div className='p-[2rem] flex flex-col h-[100%]'>
        <div className='flex flex-col h-[100%] justify-between'>
          <div className='flex flex-col'>
            <div className='flex flex-col pb-[2rem]'>
              <div className='flex text-xl font-bold pb-[2rem] capitalize'>
                <div className='pr-[0.5rem]'>
                  <span>{'Hello!'}</span>
                </div>
                <div className='pr-[0.5rem]'>
                  <span>
                    {' '}
                    {`${currentUser ? currentUser.userFirstName : ''}`}
                  </span>
                </div>
                <div>
                  <span>
                    {' '}
                    {`${currentUser ? currentUser.userLastName : ''}`}
                  </span>
                </div>
              </div>
              <div className='text-base font-normal pb-[1rem]'>
                <span className='pl-[1rem]'>
                  {`- Permission: `}
                  <span className='text-orange-400 underline'>
                    {`${
                      currentUser ? transformToRole(currentUser.userRole) : ''
                    }`}
                  </span>
                </span>
              </div>
              <div className='text-base font-normal pb-[2rem]'>
                <span className='pl-[1rem]'>
                  {`- My E-mail: `}
                  <a
                    href='mailto:reception@innergardenedu.com'
                    className='text-orange-400 underline'
                  >
                    {`${currentUser ? currentUser.userEmail : ''}`}
                  </a>
                </span>
              </div>
            </div>
            <div className='text-base flex flex-col pb-[2rem]'>
              <span className='pb-[1rem]'>{`"Welcome to Inner Garden Education!"`}</span>
              <span className='pb-[0.5rem]'>
                {`To our dedicated InnerGarden educators, your passion for teaching and nurturing minds is truly inspiring. Your commitment to fostering a love for learning creates a positive impact every day.`}
              </span>
              <span className='pb-[0.5rem]'>
                {`As you navigate this platform, may you find tools to enhance your teaching journey and a community that celebrates your dedication.`}{' '}
              </span>
              <span className=''>
                {` If you have any questions or need support, we're here for you. Let's cultivate knowledge and inspire growth together. Happy teaching!`}{' '}
              </span>
            </div>
          </div>
          <div className='flex w-[100%] items-center justify-center'>
            <div className='w-[24rem] flex justify-center'>
              <ButtonLink
                href={'/join/enroll-your-child'}
                label='SIGN OUT'
                color='orange'
              />
            </div>
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default MemberHome;
