import { Suspense } from 'react';
import { ContentLoader } from '../../components/ContentLoader';
import { ProductsSection } from './components/ProductsSection';

const HomePage = () => {
  return (
    <Suspense fallback={<ContentLoader />}>
      <ProductsSection />
    </Suspense>
  );
};

export default HomePage;
