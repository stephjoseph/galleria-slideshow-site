const Modal = ({ painting, toggleModal }) => {
  return (
    <div className='fixed top-0 z-50 flex h-screen w-full flex-col items-center bg-black/[0.8539] pt-[9.063rem] md:justify-center md:pt-0'>
      <div className='flex w-[87.2%] flex-col items-end gap-8 md:w-max md:max-w-[60%] md:gap-10 xl:max-w-[50%]'>
        <button
          className='font-link-1 text-[0.875rem] leading-[1.063rem] tracking-[3px] text-white hover:text-white/[0.15] active:text-white/[0.15]'
          type='button'
          onClick={() => toggleModal()}
        >
          close
        </button>
        <div className='relative w-full'>
          <img src={painting.images.gallery} alt={painting.name} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
