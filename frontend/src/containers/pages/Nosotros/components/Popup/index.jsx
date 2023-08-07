import styles from './styles.module.css';

import LogoPatitas from "/icons/logo-patita.png"

const Popup = ({ isOpen, onClose, dev }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <span className={styles.closeBtn} onClick={onClose}>&times;</span>
        <img className={styles.popup__dev} src={dev.img} alt={`foto ${dev.title} desarrollador`} />
        <p className={styles.popup__name}>{dev.name}</p>
        <p className={styles.popup__position}>{dev.position}</p>
        <a className={styles.popup__link} href={dev.linkedin}>LinkedIn</a>
        <a className={styles.popup__link} href={dev.portfolio}>Portafolio</a>
        <img className={styles.popup__logo} src={LogoPatitas} alt="logo patitas a casa" />
      </div>
    </div>
  );
};

export default Popup;