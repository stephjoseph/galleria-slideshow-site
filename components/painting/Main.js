import Link from 'next/link';

const Main = ({ painting }) => {
  return (
    <main className='-mt-[1.25rem] flex h-[36.5rem] w-full flex-col items-center justify-between md:-mt-0 md:h-[26.938rem] xl:h-[35.688rem] xl:w-[33.06%]'>
      <div className='relative flex w-[87.2%] flex-col items-center pt-[4.625rem] md:w-[89.71%] md:pt-[4.688rem] xl:h-full xl:w-full xl:items-start xl:pt-[7.188rem]'>
        <div className='font-display md:font-display absolute top-0 right-0 text-[6.25rem] leading-[6.25rem] text-concrete md:right-auto md:left-0 xl:left-px'>
          {painting.year}
        </div>
        <div className='flex w-full flex-col items-start gap-10 md:w-[66.33%]  xl:h-full xl:w-[73.53%] xl:justify-between'>
          <p className='font-body relative text-boulder'>
            {painting.description}
          </p>
          <Link href={painting.source}>
            <a className='font-link-2 self-start text-boulder'>Go to source</a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
