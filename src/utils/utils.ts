export const formatPrice = (price: number) => {
  return price.toLocaleString('en-US');
};

export const formatDiscountedPrice = (price: number, discountPercentage: number) => {
  return formatPrice(price - (price * discountPercentage) / 100);
};
