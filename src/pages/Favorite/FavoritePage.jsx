import styles from './FavoritePage.module.css';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selector';
import CamperCard from 'components/CamperCard/CamperCard';

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={styles.container}>
      <section>
        {favorites.length ? (
          favorites.map(camper => {
            return <CamperCard camper={camper} key={camper._id} />;
          })
        ) : (
          <div
            style={{
              marginLeft: '45%',
              marginTop: '30%',
            }}
          >
            There is no favorites
          </div>
        )}
      </section>
    </div>
  );
};

export default FavoritePage;
