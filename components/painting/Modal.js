const Modal = ({ painting, modalActive, toggleModal }) => {
  return (
    <div
      onClick={() => toggleModal()}
      className={`${
        !modalActive
          ? 'pointer-events-none opacity-0'
          : 'opacity-1 pointer-events-auto'
      } modal fixed top-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-y-auto bg-black/[0.8539] transition-[opacity] duration-300 ease-in md:justify-start md:py-32 xl:max-h-[1024px]`}
    >
      <div
        className='flex w-[87.2%] flex-col items-end gap-8 md:w-max md:max-w-[87.24%] md:gap-10 xl:max-w-[63.68%]'
        onClick={(e) => e.stopPropagation()}
      >
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
