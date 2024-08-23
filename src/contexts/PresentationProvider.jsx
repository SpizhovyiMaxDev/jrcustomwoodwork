import { createContext, useContext, useState } from "react";

const PresentationContext = createContext();

function PresentationProvider({
  customStyles = "",
  imgsSrcSets = [],
  mediaSizes = [],
  children,
}) {
  const [isModalOpen, setModalState] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalImages = imgsSrcSets.length;
  const isLastSlide = currentSlide === imgsSrcSets.length - 1;
  const isFirstSlide = currentSlide === 0;
  const nextSlide = () =>
    setCurrentSlide((slide) => (!isLastSlide ? slide + 1 : slide));
  const prevSlide = () =>
    setCurrentSlide((slide) => (!isFirstSlide ? slide - 1 : slide));
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  return (
    <PresentationContext.Provider
      value={{
        isLastSlide,
        isFirstSlide,
        currentSlide,
        isModalOpen,
        closeModal,
        openModal,
        prevSlide,
        nextSlide,
        totalImages,
        imgsSrcSets,
        mediaSizes,
        customStyles,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
}

function usePresentation() {
  const context = useContext(PresentationContext);

  if (!context) {
    throw new Error(
      "Ops, make sure that you are using 'usePresentation' inside of the 'PresentationProvider'"
    );
  }

  return context;
}

export { usePresentation, PresentationProvider };
