import styles from "./Slider.module.css";
import { usePresentation } from "../../contexts/PresentationProvider";

function Slider() {
  const {
    mediaQueries,
    imgsSrcSet,
    isFirstSlide,
    isLastSlide,
    openModal,
    currentSlide,
    prevSlide,
    nextSlide,
    wrapperStyles,
    totalImages,
  } = usePresentation();

  return (
    <div className={`${styles.slider} ${wrapperStyles}`}>
      {imgsSrcSet.map((srcSets, index) => (
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
                  media={mediaQueries.at(index)}
                  srcSet={srcSet}
                  key={`srcSet-${index}`}
                ></source>
              );
            })}
            <img
              src={srcSets.at(-1)}
              className={styles.sliderImage}
              alt={`Slider, slide ${index + 1}`}
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
  );
}

export default Slider;
