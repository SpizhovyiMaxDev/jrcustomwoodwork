import styles from "./Picture.module.css";

function Picture({
  src = "",
  srcSet = [],
  mediaQueries = [],
  openModal = null,
  wrapperStyles = "",
  alt = "",
}) {
  return (
    <picture
      className={`${styles.imageWrapper} ${wrapperStyles}`}
      onClick={openModal}
    >
      {srcSet.map((srcSet, index) => {
        return (
          <source
            srcSet={srcSet}
            media={mediaQueries[index]}
            key={index}
          ></source>
        );
      })}
      <img
        src={src || srcSet.at(-1)}
        className={styles.coveredImage}
        loading="lazy"
        alt={alt}
      />
    </picture>
  );
}

export default Picture;
