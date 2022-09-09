import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';

const Header = ({ painting }) => {
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = () => {
    setModalActive((prevState) => !prevState);
  };

  return (
    <>
      {modalActive && <Modal painting={painting} toggleModal={toggleModal} />}
      <header className='flex w-full flex-col items-center pt-6'>
        <div className='flex w-[87.2%] flex-col'>
          <div className='relative h-[17.5rem] w-full'>
            <Image
              layout='fill'
              objectFit='cover'
              src={painting.images.hero.small}
              alt={painting.name}
            />
            <button
              className='btn absolute top-4 left-4 z-10'
              type='button'
              onClick={() => toggleModal()}
            >
              <Image
                width={12}
                height={12}
                src='/assets/shared/icon-view-image.svg'
                alt=''
              />
              <div>View Image</div>
            </button>
          </div>
          <div className='z-10 -mt-[3.125rem] flex w-[85.63%] flex-col'>
            <div className='w-full bg-white p-6'>
              <div className='flex w-full flex-col gap-2'>
                <h1 className='font-h1 text-[1.5rem] leading-[1.813rem]'>
                  {painting.name}
                </h1>
                <div className='font-subhead-1 text-boulder'>
                  {painting.artist.name}
                </div>
              </div>
            </div>
            <div className='relative ml-4 h-16 w-16'>
              <Image
                layout='fill'
                objectFit='cover'
                src={painting.artist.image}
                alt={painting.artist.name}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
