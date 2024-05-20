import { useState } from 'react';
import styles from './CamperInfo.module.css';
import { ReactComponent as Close } from '../../icons/close.svg';
import { ReactComponent as Star } from '../../icons/star.svg';
import { ReactComponent as Map } from '../../icons/map.svg';
import CamperFeatures from 'components/CamperFeatures/CamperFeatures';
import CamperReviews from 'components/CamperReviews/CamperReviews';
const CamperInfo = ({ data, onClose }) => {
  const [isFeatures, setIsFeatures] = useState(true);

  const { name, price, rating, location, description, gallery, reviews } = data;
  return (
    <div className={styles.cover}>
      <div className={styles.container}>
        <div className={styles.name}>
          <h1 style={{ fontSize: '24px' }}>{name}</h1>
          <button className={styles.closeButton} onClick={onClose}>
            <Close className={styles.close} />
          </button>
        </div>
        <div className={styles.ratingContainer}>
          <span className={styles.rating}>
            <Star />
            {rating} ({reviews.length} Reviews)
          </span>
          <span className={styles.location}>
            <Map style={{ stroke: '#101828' }} />
            {location}
          </span>
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.price}>&euro;{price.toFixed(2)}</p>
        </div>
        <section className={styles.body}>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery}>
              {gallery &&
                gallery.map((item, index) => {
                  return (
                    <img
                      className={styles.image}
                      key={index}
                      src={item}
                      alt="Camper"
                    />
                  );
                })}
            </div>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.tabs}>
            <div
              className={styles.tab}
              style={
                isFeatures
                  ? { borderBottom: '5px solid #E44848' }
                  : { borderBottom: 'none' }
              }
            >
              <button
                className={styles.tabButton}
                onClick={() => setIsFeatures(true)}
              >
                Features
              </button>
            </div>
            <div
              className={styles.tab}
              style={
                !isFeatures
                  ? { borderBottom: '5px solid #E44848' }
                  : { borderBottom: 'none' }
              }
            >
              <button
                className={styles.tabButton}
                onClick={() => setIsFeatures(false)}
              >
                Reviews
              </button>
            </div>
          </div>
          <hr style={{ margin: '0 0 44px' }} />
          <div className={styles.tabBody}>
            {isFeatures ? (
              <CamperFeatures data={data} />
            ) : (
              <CamperReviews reviews={reviews} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
export default CamperInfo;
