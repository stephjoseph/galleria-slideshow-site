import Image from 'next/image';
import Link from 'next/link';

const Main = ({ gallery }) => {
  return (
    <main className='flex w-full flex-col items-center py-6 md:py-10'>
      <h1 className='pointer-events-none absolute opacity-0'>Galleria</h1>
      <div className='mosaic grid w-[87.2%] grid-cols-1 place-items-center gap-6 md:h-[2820px] md:max-h-max md:w-[89.71%] md:max-w-[689px] md:grid-cols-2 md:place-items-start md:gap-10'>
        {gallery.map((painting) => (
          <Link href={painting.slug} key={painting.name}>
            <a className='relative h-full w-full object-contain'>
              <img
                className='h-full w-full'
                src={painting.images.thumbnail}
                alt={painting.name}
              />
              <div className='absolute bottom-0 flex h-[10.625rem] w-full items-end bg-gradient-to-b from-black/[0.0001] to-black pb-8 pl-8'>
                <div className='flex w-[83.39%] flex-col gap-[0.438rem]'>
                  <h2 className='font-h2 text-white'>{painting.name}</h2>
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
