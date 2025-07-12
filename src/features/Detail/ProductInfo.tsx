import { Package, Shield, Truck } from 'lucide-react';
import { Badge } from '../../components/Badge';
import { StarRating } from '../../components/StarRating';
import type { Product } from '../../hooks/useGetProductDetail';
import { formatDiscountedPrice, formatPrice } from '../../utils/utils';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const commonInfos = {
    brand: product.brand,
    category: product.category,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
        <div className="flex items-center gap-2 mb-4">
          {Object.entries(commonInfos).map(
            ([key, value], index) =>
              value && (
                <Badge variant={index === 0 ? 'default' : 'secondary'} key={key}>
                  {value}
                </Badge>
              )
          )}
        </div>
        <div className="flex items-center gap-4 mb-4">
          <StarRating rating={product.rating} />
          <span className="text-sm text-gray-600">({product.reviews.length} Reviews)</span>
        </div>
      </div>

      <div className="border-t border-b py-6">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-gray-900">
            {formatDiscountedPrice(product.price, product.discountPercentage)}$
          </span>
          <span className="text-lg text-gray-500 line-through">{formatPrice(product.price)}$</span>
          <Badge variant="destructive">{product.discountPercentage}% Discount</Badge>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm">
          <Package className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600">재고:</span>
          <span className={`font-medium ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
            {product.availabilityStatus} ({product.stock}개) (최소 주문 수량: {product.minimumOrderQuantity})
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Truck className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600">배송:</span>
          <span className="font-medium">{product.shippingInformation}</span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Shield className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600">보증:</span>
          <span className="font-medium">{product.warrantyInformation}</span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-600">반품정책:</span>
          <span className="font-medium">{product.returnPolicy}</span>
        </div>
      </div>

      <div>
        <button
          className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors cursor-pointer"
          disabled={product.stock === 0}
        >
          Buy Now
        </button>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-900 mb-3">Product Information</h3>
        <p className="text-gray-700">{product.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          {Object.entries({ ...commonInfos, weight: product.weight, sku: product.sku }).map(
            ([key, value]) =>
              value && (
                <div key={key}>
                  <span className="text-gray-600">{key}:</span>
                  <span className="ml-2 font-medium">{value}</span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
