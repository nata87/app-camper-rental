import { useEffect, useState } from 'react';
import styles from './CatalogPage.module.css';
import { fetchCampers } from 'store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectFilters } from 'store/selector';

import CamperCardList from 'components/CamperCardList/CamperCardList';
import FiltersBar from 'components/FiltersBar/FiltersBar';

const CatalogPage = () => {
  const [shownCard, serShownCards] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);

  const filteredCampers = campers.filter(({ location }) => {
    return filters.location.length
      ? location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
  });

  return (
    <div className={styles.container}>
      <section>
        <FiltersBar />
      </section>
      <section>
        <CamperCardList
          campers={filteredCampers.filter((item, i) => i < shownCard * 4)}
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
