import styles from './ScrollUpButton.module.css';

const ScrollUpButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button onClick={handleClick} className={styles.button}>
      Up
    </button>
  );
};

export default ScrollUpButton;
