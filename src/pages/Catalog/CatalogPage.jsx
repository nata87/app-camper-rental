import { useEffect } from 'react';
import styles from './CatalogPage.module.css';
import { fetchCampers } from 'store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from 'store/selector';
import CamperCard from 'components/CamperCard/CamperCard';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const campers = useSelector(selectCampers);

  return (
    <div className={styles.container}>
      <section></section>
      <section>
        {campers.map(camper => {
          return <CamperCard camper={camper} key={camper._id} />;
        })}
      </section>
    </div>
  );
};
export default CatalogPage;
