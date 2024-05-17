import styles from './CamperCard.module.css';
import { ReactComponent as Heart } from '../../icons/heart.svg';
const CamperCard = ({ camper }) => {
  const { gallery, name, price } = camper;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={gallery[0]} alt="camper" />
      <div className={styles.headding}>
        <div className={styles.name}>
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <Heart />
      </div>
    </div>
  );
};

export default CamperCard;
