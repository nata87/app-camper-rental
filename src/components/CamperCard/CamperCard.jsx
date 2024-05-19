import styles from './CamperCard.module.css';
import { ReactComponent as Heart } from '../../icons/heart.svg';
import { ReactComponent as Star } from '../../icons/star.svg';
import { ReactComponent as Map } from '../../icons/map.svg';
import { ReactComponent as Adult } from '../../icons/adult.svg';
import { ReactComponent as Transmision } from '../../icons/transmision.svg';
import { ReactComponent as Benz } from '../../icons/benz.svg';
import { ReactComponent as Kitchen } from '../../icons/kitchen.svg';
import { ReactComponent as Beds } from '../../icons/beds.svg';
import { ReactComponent as Wind } from '../../icons/wind.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'store/selector';
import { addFavorite, deleteFavorite } from 'store/favoritesSlice';
import Tag from 'components/Tag/Tag';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import CamperInfo from 'components/CamperInfo/CamperInfo';
const CamperCard = ({ camper }) => {
  const {
    _id,
    adults,
    details,
    description,
    gallery,
    location,
    name,
    engine,
    price,
    rating,
    reviews,
    transmission,
  } = camper;
  const [showModal, setShowModal] = useState(false);

  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const isFavorit = favorites.some(item => item._id === _id);

  const goFavorite = () => {
    if (isFavorit) {
      dispatch(deleteFavorite(camper));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={gallery[0]} alt="camper" />
      <div style={{ width: '100%' }}>
        <div className={styles.headding}>
          <div className={styles.name}>
            <div>{name}</div>
            <div>&euro;{price.toFixed(2)}</div>
          </div>
          <Heart
            className={styles.heart}
            style={
              isFavorit
                ? { fill: '#E44848', stroke: '#E44848' }
                : { fill: '#fff', stroke: '#101828' }
            }
            onClick={goFavorite}
            width={24}
            alt="Haert"
          />
        </div>
        <div className={styles.ratingWrapper}>
          <span className={styles.rating}>
            <Star style={{ marginRight: '8px' }} />
            {rating} ({reviews.length} Reviews)
          </span>
          <span>
            <Map style={{ stroke: '#101828', marginRight: '8px' }} />
            {location}
          </span>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <p className={styles.description}>{description.slice(0, 63)}...</p>
        </div>
        <div>
          <ul className={styles.infoList}>
            <Tag Icon={Adult} data={adults} text="adults" />
            <Tag Icon={Transmision} text={transmission} />
            <Tag Icon={Benz} text={engine} />
            {details.kitchen && <Tag Icon={Kitchen} text="kitchen" />}
            <Tag Icon={Kitchen} text={engine} />
            {details.beds && (
              <Tag Icon={Beds} data={details.beds} text="beds" />
            )}
            {details.airConditioner && <Tag Icon={Wind} text="AC" />}
          </ul>
        </div>
        <button className={styles.button} onClick={toggleModal}>
          Show more
        </button>
        {showModal && (
          <Modal onClose={() => toggleModal()}>
            <CamperInfo data={camper} onClose={() => toggleModal()} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default CamperCard;
