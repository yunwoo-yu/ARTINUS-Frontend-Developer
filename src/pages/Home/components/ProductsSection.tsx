import { ProductItem } from '../../../features/Products/ProductItem';
import { useGetProducts } from '../../../hooks/useGetProducts';

export const ProductsSection = () => {
  const { data } = useGetProducts({ limit: 20, skip: 0 });

  return (
    <ul className="border-t border-gray-300">
      {data.products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
