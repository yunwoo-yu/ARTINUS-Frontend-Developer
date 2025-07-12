import dayjs from 'dayjs';
import type { Review } from '../hooks/useGetProductDetail';

export const formatPrice = (price: number) => {
  return price.toLocaleString('en-US');
};

export const formatDiscountedPrice = (price: number, discountPercentage: number) => {
  return formatPrice(price - (price * discountPercentage) / 100);
};

export const getRatingTable = (reviews: Review[]) => {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  reviews.forEach(review => {
    distribution[review.rating as keyof typeof distribution]++;
  });

  return distribution;
};

export const getFormattedDate = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD');
};
