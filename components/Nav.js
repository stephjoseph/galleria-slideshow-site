import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='flex w-full flex-col items-center border-b border-solid border-mercury py-6 md:py-[1.75rem] xl:w-[94.44%] xl:py-10'>
      <div className='flex w-[87.2%] items-center justify-between md:w-[89.71%] xl:w-full'>
        <Link href='/'>
          <a className='relative h-8 w-[7.065rem] xl:h-12 xl:w-[10.625rem]'>
            <Image
              layout='fill'
              objectFit='cover'
              src='/assets/shared/logo.svg'
              alt='logo'
            />
          </a>
        </Link>
        <Link href='/starry-night'>
          <a className='font-link-1 md:font-link-1 text-[0.563rem] leading-[0.688rem] tracking-[1.93px] text-boulder'>
            Start slideshow
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
