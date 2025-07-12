import { MoveRight } from 'lucide-react';
import { Link } from 'react-router';
import type { Product } from '../../hooks/useGetProductDetail';
import { WEB_PATH } from '../../pages/Routes';
import { formatDiscountedPrice, formatPrice } from '../../utils/utils';
import { StarRating } from '../../components/StarRating';
import { Badge } from '../../components/Badge';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <li className="w-full border-b bg-white border-gray-300 hover:bg-gray-200 cursor-pointer group">
      <Link
        to={WEB_PATH.detail(String(product.id))}
        className="p-4 grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto] gap-4 items-center h-full"
      >
        <div className="size-24 sm:size-32 bg-gray-100 rounded-lg overflow-hidden">
          <img src={product.thumbnail} alt={product.title} loading="lazy" className="size-full object-cover" />
        </div>
        <div className="flex flex-col min-w-0">
          <p className="text-lg sm:text-xl mb-2 truncate">{product.title}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
            <span className="text-xl sm:text-3xl font-bold text-gray-900">
              {formatDiscountedPrice(product.price, product.discountPercentage)}$
            </span>
            <span className="text-sm sm:text-lg text-gray-500 line-through">{formatPrice(product.price)}$</span>
            <Badge variant="destructive">{product.discountPercentage}% Discount</Badge>
          </div>
          <div className="mt-auto">
            <StarRating rating={product.rating} />
          </div>
        </div>
        <div className="flex items-center justify-center p-2 sm:px-6 sm:py-4 border-l border-gray-300 h-full">
          <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-red-500" />
        </div>
      </Link>
    </li>
  );
};
