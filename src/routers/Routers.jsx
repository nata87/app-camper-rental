import Spiner from 'components/Spiner/Spiner';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/HomePage'));
const Catalog = lazy(() => import('../pages//Catalog/CatalogPage'));

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spiner />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/catalog"
        element={
          <Suspense fallback={<Spiner />}>
            <Catalog />
          </Suspense>
        }
      />
      <Route path="/favorite" element={<h1>favorite</h1>} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default Routers;
