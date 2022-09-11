import { useContext, useEffect, useRef, useState } from 'react';
import { SlideshowContext } from '../../context/SlideshowContext';
import Image from 'next/image';
import Modal from './Modal';
import gsap from 'gsap';

const Header = ({ painting }) => {
  const [showing, setShowing, paintingIndex, setPaintingIndex] =
    useContext(SlideshowContext);
  const [modalActive, setModalActive] = useState(false);

  const imgRef = useRef(null);
  const authorImgRef = useRef(null);
  const titleRef = useRef(null);

  const toggleModal = () => {
    setModalActive((prevState) => !prevState);
  };

  useEffect(() => {
    if (modalActive) {
      setShowing(false);
      document.body.style.overflow = 'hidden';
    } else {
      setShowing(true);
      document.body.style.overflow = 'visible';
    }
  }, [modalActive]);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.8, ease: 'power1.out' }
    );

    gsap.fromTo(
      authorImgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.8, ease: 'power1.out' }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -50 },
      { x: 0, opacity: 1, duration: 1, ease: 'power1.out' }
    );

    // gsap.to(titleRef.current, {
    //   duration: 0.6,
    //   x: -50,
    //   opacity: 0,
    //   repeat: 1,
    //   yoyo: true,
    //   ease: 'sine.inOut',
    //   autoRound: false,
    // });
  }, [paintingIndex]);

  return (
    <>
      <Modal
        painting={painting}
        modalActive={modalActive}
        toggleModal={toggleModal}
      />
      <header className='flex w-full flex-col items-center pt-6 md:mb-16 md:pt-10 xl:mb-0 xl:w-[59.38%] xl:pt-0'>
        <div className='flex w-[87.2%] flex-col md:w-[89.71%] md:flex-row xl:w-full'>
          <div
            ref={imgRef}
            className='relative h-[17.5rem] w-full md:h-[35rem] md:w-[68.94%] xl:w-[55.56%]'
          >
            <div className='relative h-full w-full md:hidden'>
              <Image
                layout='fill'
                objectFit='cover'
                src={painting.images.hero.small}
                alt={painting.name}
              />
            </div>
            <div className='relative hidden h-full w-full md:block'>
              <Image
                layout='fill'
                objectFit='cover'
                src={painting.images.hero.large}
                alt={painting.name}
              />
            </div>
            <button
              className='btn absolute top-4 left-4 z-10 md:bottom-4 md:top-auto'
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
          <div className='z-10 -mt-[3.125rem] flex w-[85.63%] flex-col md:-mt-0 md:-ml-[14.5rem] md:w-[64.59%] xl:-ml-[4.063rem] xl:w-[52.05%] xl:justify-between'>
            <div
              ref={titleRef}
              className='w-full bg-white p-6 md:pl-[4.063rem] md:pb-[4.188rem] md:pr-0 md:pt-0'
            >
              <div className='flex w-full flex-col gap-2 md:gap-6'>
                <h1 className='font-h1 md:font-h1 text-[1.5rem] leading-[1.813rem]'>
                  {painting.name}
                </h1>
                <div className='font-subhead-1 text-boulder'>
                  {painting.artist.name}
                </div>
              </div>
            </div>
            <div
              ref={authorImgRef}
              className='relative ml-4 h-16 w-16 md:ml-0 md:mr-[3.438rem] md:h-32 md:w-32 md:self-end xl:ml-24 xl:mr-0 xl:-mb-16 xl:self-start'
            >
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
