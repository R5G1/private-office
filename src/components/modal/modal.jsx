import styles from '../modal/modal.module.scss';

function Modal({ active, setActive, children }) {
  return (
    <div className={active ? styles.modalActive : styles.modal} onClick={() => setActive(false)}>
      <div
        className={active ? styles.modalContentActive : styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
