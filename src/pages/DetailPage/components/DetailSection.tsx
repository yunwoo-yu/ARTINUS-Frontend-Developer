import { useParams } from 'react-router';
import { ProductImageGallery } from '../../../features/Detail/ProductImageGallery';
import { ProductInfo } from '../../../features/Detail/ProductInfo';
import { UserRivews } from '../../../features/Detail/UserRivews';
import { useGetProductDetail } from '../../../hooks/useGetProductDetail';

export const DetailSection = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product } = useGetProductDetail(Number(id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ProductImageGallery images={product.images} title={product.title} />
        <ProductInfo product={product} />
      </div>

      <div className="border-t pt-8">
        <UserRivews reviews={product.reviews} />
      </div>
    </div>
  );
};
