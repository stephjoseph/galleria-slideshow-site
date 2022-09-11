import { useState, createContext } from 'react';

export const SlideshowContext = createContext();

const SlideshowProvider = ({ children }) => {
  const [showing, setShowing] = useState(false);
  const [paintingIndex, setPaintingIndex] = useState(0);
  return (
    <SlideshowContext.Provider
      value={[showing, setShowing, paintingIndex, setPaintingIndex]}
    >
      {children}
    </SlideshowContext.Provider>
  );
};

export default SlideshowProvider;
