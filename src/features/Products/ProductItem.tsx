import { MoveRight } from 'lucide-react';
import { Link } from 'react-router';
import type { Product } from '../../hooks/useGetProductDetail';
import { WEB_PATH } from '../../pages/Routes';
import { formatDiscountedPrice, formatPrice } from '../../utils/utils';
import { StarRating } from '../../components/StarRating';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <li className="w-full border-b bg-white border-gray-300  hover:bg-gray-200 cursor-pointer group">
      <Link to={WEB_PATH.detail(String(product.id))} className="py-4 flex gap-4 h-full">
        <div className="size-32">
          <img src={product.thumbnail} alt={product.title} loading="lazy" className="size-full object-cover" />
        </div>
        <div className="flex flex-col mr-auto">
          <p className="text-xl">{product.title}</p>
          <div className="flex flex-col h-full">
            <span className="text-sm line-through text-gray-400">{formatPrice(product.price)}$</span>
            <div className="text-2xl">
              <span className="text-red-500">{product.discountPercentage}% </span>
              <span>{formatDiscountedPrice(product.price, product.discountPercentage)}$</span>
            </div>
            <div className="mt-auto">
              <StarRating rating={product.rating} />
            </div>
          </div>
        </div>
        <div className="px-10 border-l border-gray-300 h-full py-10 self-center">
          <div>
            <MoveRight className="w-6 h-6 group-hover:text-red-500" />
          </div>
        </div>
      </Link>
    </li>
  );
};
