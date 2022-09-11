import Link from 'next/link';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { SlideshowContext } from '../context/SlideshowContext';
import { useRouter } from 'next/router';

const slugs = [
  'starry-night',
  'girl-with-a-pearl-earring',
  'guernica',
  'penitent-magdalene',
  'the-storm-on-the-sea-of-galilee',
  'the-great-wave-off-kanagawa',
  'van-gogh-self-portrait',
  'the-sleeping-gypsy',
  'lady-with-an-ermine',
  'the-night-cafe',
  'the-basket-of-apples',
  'the-boy-in-the-red-vest',
  'arnolfini-portrait',
  'mona-lisa',
  'the-swing',
];

const Nav = () => {
  const [showing, setShowing, paintingIndex] = useContext(SlideshowContext);

  const router = useRouter();

  const handleShow = () => {
    setShowing((prevState) => !prevState);
    showing ? router.push('/') : router.push(slugs[paintingIndex]);
  };

  useEffect(() => {
    router.pathname === '/'
      ? setShowing(false)
      : slugs.find((slug) => `/${slug}` === router.asPath)
      ? setShowing(true)
      : setShowing(false);
  }, [router.pathname]);

  useEffect(() => {
    if (showing && paintingIndex !== slugs.length - 1) {
      const timer = setTimeout(
        () => router.push(slugs[paintingIndex + 1]),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [showing, paintingIndex]);

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
        <button
          className='font-link-1 md:font-link-1 text-[0.563rem] leading-[0.688rem] tracking-[1.93px] text-boulder'
          onClick={() => handleShow()}
        >
          {showing ? 'Stop' : 'Start'} slideshow
        </button>
      </div>
    </nav>
  );
};

export default Nav;
