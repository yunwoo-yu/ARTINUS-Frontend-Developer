import { Suspense } from 'react';
import { ProductsSection } from './components/ProductsSection';
import { LoaderCircle } from 'lucide-react';

export const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="pt-40">
          <LoaderCircle className="animate-spin mx-auto" />
        </div>
      }
    >
      <ProductsSection />
    </Suspense>
  );
};
