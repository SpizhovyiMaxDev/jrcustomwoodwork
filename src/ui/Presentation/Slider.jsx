import styles from "./Slider.module.css";
import { usePresentation } from "../../contexts/PresentationProvider";

function Slider() {
  const {
    imgsSrcSets,
    isFirstSlide,
    isLastSlide,
    openModal,
    currentSlide,
    mediaSizes,
    prevSlide,
    nextSlide,
    customStyles,
    totalImages,
  } = usePresentation();

  return (
    <div className={`${styles.slider} ${customStyles}`}>
      {imgsSrcSets.map((srcSets, index) => (
        <div
          key={`sliderItem-${index}`}
          className={styles.sliderItem}
          style={{
            left: `${(index - currentSlide) * 100}%`,
          }}
          onClick={openModal}
        >
          <picture>
            {srcSets.map((srcSet, index) => {
              return (
                <source
                  media={mediaSizes.at(index)}
                  srcSet={srcSet}
                  key={index}
                ></source>
              );
            })}
            <img
              src={srcSets.at(-1)}
              className={styles.sliderImage}
              alt={`Project Slider, slide ${index + 1}`}
            />
          </picture>
        </div>
      ))}

      {totalImages > 0 && (
        <>
          <button
            className={`${styles.sliderBtn} ${styles.sliderBtnPrev} ${
              isFirstSlide ? styles.sliderBtnHidden : styles.sliderBtnVisible
            }`}
            aria-label="Button prev slide"
            onClick={prevSlide}
          >
            <svg width="30" height="30px">
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
            <svg width="30" height="30px">
              <use href="/icons.svg#icon-arrow-right" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default Slider;
