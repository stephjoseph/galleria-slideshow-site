import Link from 'next/link';
import Navigator from './Navigator';

const Main = ({ gallery, painting }) => {
  return (
    <main className='-mt-[1.25rem] flex h-[41rem] w-full flex-col items-center justify-between md:-mt-0 md:h-[32.938rem]'>
      <div className='relative flex w-[87.2%] flex-col items-center pt-[4.625rem] md:w-[89.71%] md:pt-[4.688rem]'>
        <div className='font-display md:font-display absolute top-0 right-0 text-[6.25rem] leading-[6.25rem] text-concrete md:right-auto md:left-0'>
          {painting.year}
        </div>
        <div className='flex w-full flex-col items-start gap-10 md:w-[66.33%]'>
          <p className='font-body relative text-boulder'>
            {painting.description}
          </p>
          <Link href={painting.source}>
            <a className='font-link-2 self-start text-boulder'>Go to source</a>
          </Link>
        </div>
      </div>
      <Navigator gallery={gallery} painting={painting} />
    </main>
  );
};

export default Main;
