import { BrowserRouter } from 'react-router-dom';
import Routers from 'routers/Routers';
import Header from './Header/Header';
import { PAGES } from 'data/pages';
import styles from './App.module.css';
import ScrollUpButton from './ScrollUpButton/ScrollUpButton';
import { Provider } from 'react-redux';
import store from 'store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/app-camper-rental">
        <Header options={PAGES} />
        <main className={styles.main}>
          <Routers />
          <ScrollUpButton />
        </main>
      </BrowserRouter>
    </Provider>
  );
};
