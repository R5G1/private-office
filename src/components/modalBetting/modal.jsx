import styles from '../modalBetting/modal.module.scss';

function Modal({ active, setActive, children, text }) {
  return (
    <div className={active ? styles.modalActive : styles.modal} onClick={() => setActive(false)}>
      <div
        className={active ? styles.modalContentActive : styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalContentActiveClose}>
          <h3>{text}</h3>
          <div className={styles.modalContentActiveCloseBtn} onClick={() => setActive(false)}>
            X
          </div>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
