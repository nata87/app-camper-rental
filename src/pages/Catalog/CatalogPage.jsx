import { useEffect, useState } from 'react';
import styles from './CatalogPage.module.css';
import { fetchCampers } from 'store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from 'store/selector';

import CamperCardList from 'components/CamperCardList/CamperCardList';

const CatalogPage = () => {
  const [shownCard, serShownCards] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const campers = useSelector(selectCampers);
  console.log('shownCard', shownCard);
  return (
    <div className={styles.container}>
      <section></section>
      <section>
        <CamperCardList
          campers={campers.filter((item, i) => i < shownCard * 4)}
        />
        <button
          className={styles.button}
          onClick={() => serShownCards(prev => prev + 1)}
        >
          Load more
        </button>
      </section>
    </div>
  );
};
export default CatalogPage;
