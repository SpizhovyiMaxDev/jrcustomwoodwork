import styles from "./Modal.module.css";
import useKey from "../../hooks/useKey";

function Modal({ isModalOpen, closeModal, children }) {
  useKey("Escape", closeModal);

  return (
    <>
      <div
        className={`${styles.overlay} ${
          isModalOpen ? styles.openModal : styles.closeModal
        }`}
        onClick={closeModal}
      ></div>
      <div
        className={`${styles.modal} ${
          isModalOpen ? styles.openModal : styles.closeModal
        }`}
      >
        <button className={styles.closeModalBtn} onClick={closeModal}>
          <svg width="40px" height="40px">
            <use href="/icons.svg#icon-close" />
          </svg>
        </button>
        {children}
      </div>
    </>
  );
}

export default Modal;
