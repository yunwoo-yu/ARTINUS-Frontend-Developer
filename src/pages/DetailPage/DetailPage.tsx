import { Suspense } from 'react';
import { ContentLoader } from '../../components/ContentLoader';
import { DetailSection } from './components/DetailSection';

const DetailPage = () => {
  return (
    <Suspense fallback={<ContentLoader />}>
      <DetailSection />
    </Suspense>
  );
};

export default DetailPage;
