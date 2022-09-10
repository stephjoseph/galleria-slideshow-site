import Image from 'next/image';
import Link from 'next/link';

const Main = ({ gallery }) => {
  return (
    <main className='flex w-full flex-col items-center py-6 md:py-10'>
      <h1 className='pointer-events-none absolute opacity-0'>Galleria</h1>
      <div className='mosaic grid w-[87.2%] gap-6 md:w-[89.71%] md:gap-10 xl:w-[94.44%]'>
        {gallery.map((painting) => (
          <Link href={painting.slug} key={painting.slug}>
            <a className='group relative w-full'>
              <div className='object- relative h-full w-full group-hover:opacity-50'>
                <img
                  className='h-full w-full'
                  src={painting.images.thumbnail.src}
                  alt={painting.name}
                />
              </div>
              <div className='absolute bottom-0 flex h-[10.625rem] w-full items-end bg-gradient-to-b from-black/[0.0001] to-black pl-8 pb-8'>
                <div className='flex w-[83.35%] flex-col gap-2'>
                  <h2 className='font-h2 text-[1.5rem] leading-[1.875rem] text-white'>
                    {painting.name}
                  </h2>
                  <div className='font-subhead-2 text-white/[0.7528]'>
                    {painting.artist.name}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Main;
