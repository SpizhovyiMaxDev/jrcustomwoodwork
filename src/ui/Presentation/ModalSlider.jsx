import styles from "./ModalSlider.module.css";
import { usePresentation } from "../../contexts/PresentationProvider";
import Modal from "./Modal";

function ModalSlider() {
  const {
    mediaQueries,
    imgsSrcSet,
    currentSlide,
    nextSlide,
    prevSlide,
    totalImages,
    isFirstSlide,
    isLastSlide,
    isModalOpen,
    closeModal,
  } = usePresentation();

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className={styles.slider}>
        {imgsSrcSet.map((srcSets, index) => (
          <div
            className={`${styles.sliderItem}`}
            style={{
              left: `${(index - currentSlide) * 100}%`,
              transform: `scale(${index - currentSlide ? 0.5 : 1})`,
            }}
            key={index}
          >
            <picture style={{ display: "contents" }}>
              {srcSets.map((srcSet, index) => {
                return (
                  <source
                    media={mediaQueries.at(index)}
                    srcSet={srcSet}
                    key={`srcSet-${index}`}
                  ></source>
                );
              })}
              <img
                src={srcSets.at(-1)}
                className={styles.sliderImage}
                alt={`Modal Slider, slide ${index + 1}`}
              />
            </picture>
          </div>
        ))}

        {totalImages > 1 && (
          <>
            <button
              className={`${styles.sliderBtn} ${styles.sliderBtnPrev} ${
                isFirstSlide ? styles.sliderBtnHidden : styles.sliderBtnVisible
              }`}
              aria-label="Button prev slide"
              onClick={prevSlide}
            >
              <svg width="30px" height="30px">
                <use href="/icons.svg#icon-arrow-left" />
              </svg>
            </button>

            <button
              className={`${styles.sliderBtn} ${styles.sliderBtnNext} ${
                isLastSlide ? styles.sliderBtnHidden : styles.sliderBtnVisible
              }`}
              aria-label="Button next slide"
              onClick={nextSlide}
            >
              <svg width="30px" height="30px">
                <use href="/icons.svg#icon-arrow-right" />
              </svg>
            </button>
          </>
        )}
      </div>
    </Modal>
  );
}

export default ModalSlider;
