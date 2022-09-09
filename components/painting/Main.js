import Link from 'next/link';
import Navigator from './Navigator';

const Main = ({ gallery, painting }) => {
  return (
    <main className='-mt-[1.25rem] flex h-[41rem] w-full flex-col items-center justify-between'>
      <div className='relative flex w-[87.2%] flex-col items-center gap-10 pt-[4.625rem]'>
        <div className='font-display absolute top-0 right-0 text-[6.25rem] leading-[6.25rem] text-concrete'>
          {painting.year}
        </div>
        <p className='font-body relative text-boulder'>
          {painting.description}
        </p>
        <Link href={painting.source}>
          <a className='font-link-2 self-start text-boulder'>Go to source</a>
        </Link>
      </div>
      <Navigator gallery={gallery} painting={painting} />
    </main>
  );
};

export default Main;
