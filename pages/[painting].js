import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/painting/Header';
import Main from '../components/painting/Main';

export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());

  const paths = data.map((painting) => {
    return {
      params: { painting: painting.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const paintingSlug = context.params.painting;
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());
  const paintingData = data.find((painting) => paintingSlug === painting.slug);

  return {
    props: {
      gallery: data,
      painting: paintingData,
    },
  };
};

const Painting = ({ gallery, painting }) => {
  return (
    <>
      <Head>
        <title>Galleria | {painting.name}</title>
      </Head>
      <div className='flex w-full max-w-[1920px] flex-col items-center'>
        <Header painting={painting} />
        <Main gallery={gallery} painting={painting} />
      </div>
    </>
  );
};

export default Painting;