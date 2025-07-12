import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'small' | 'medium' | 'large';
}

export const StarRating = ({ rating, size = 'medium' }: StarRatingProps) => {
  const filledStars = Math.round(rating);
  const sizes = {
    small: 'size-4',
    medium: 'size-5',
    large: 'size-6',
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`${sizes[size]} ${index < filledStars ? 'fill-amber-300' : 'fill-gray-300'} `} />
      ))}
      <span className="text-sm text-gray-500">({rating})</span>
    </div>
  );
};
