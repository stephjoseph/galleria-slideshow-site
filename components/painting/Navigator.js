import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navigator = ({ gallery, painting }) => {
  const [paintingIndex, setPaintingIndex] = useState(0);

  const handlePaintingIndex = (painting) => {
    gallery.forEach((item, index) => {
      item.name === painting.name && setPaintingIndex(index);
    });
  };

  useEffect(() => {
    handlePaintingIndex(painting);
  }, [painting]);

  return (
    <div className='relative flex w-full flex-col items-center py-4 md:py-6'>
      <div className='absolute top-0 h-px w-full bg-mercury'>
        <div
          style={{
            width: `${(paintingIndex + 1) * (100 * 0.0667)}%`,
          }}
          className='h-px bg-black'
        ></div>
      </div>
      <div className='flex w-[87.2%] items-center justify-between md:w-[89.71%] xl:w-[94.44%]'>
        <div className='flex flex-col gap-[0.563rem]'>
          <div className='font-body leading-[1.063rem] md:text-[1.125rem] md:leading-[1.375rem]'>
            {gallery[paintingIndex].name}
          </div>
          <div className='font-body text-[0.625rem] font-normal leading-[0.75rem] md:text-[0.813rem] md:leading-4'>
            {gallery[paintingIndex].artist.name}
          </div>
        </div>
        <div className='flex items-center gap-6 md:gap-10'>
          <Link
            href={paintingIndex !== 0 ? gallery[paintingIndex - 1].slug : ''}
          >
            <a
              className={`relative h-4 w-4 md:h-6 md:w-6 ${
                paintingIndex === 0 && 'pointer-events-none opacity-[0.15]'
              }`}
            >
              <Image
                layout='fill'
                objectFit='contain'
                src={'/assets/shared/icon-back-button.svg'}
                alt='back button'
              />
            </a>
          </Link>
          <Link
            href={
              paintingIndex !== gallery.length - 1
                ? gallery[paintingIndex + 1].slug
                : ''
            }
          >
            <a
              className={`relative h-4 w-4 md:h-6 md:w-6 ${
                paintingIndex === gallery.length - 1 &&
                'pointer-events-none opacity-[0.15]'
              }`}
            >
              <Image
                layout='fill'
                objectFit='contain'
                src={'/assets/shared/icon-next-button.svg'}
                alt='next button'
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
