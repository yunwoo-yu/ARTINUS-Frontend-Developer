import { StarRating } from '../../components/StarRating';
import type { Review } from '../../hooks/useGetProductDetail';
import { getFormattedDate } from '../../utils/utils';

interface UserRivewsProps {
  reviews: Review[];
}

export const UserRivews = ({ reviews }: UserRivewsProps) => {
  const totalReviews = reviews.length;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">리뷰 ({totalReviews})</h3>
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="font-medium text-gray-900">{review.reviewerName}</span>
                      <StarRating rating={review.rating} />
                    </div>
                    <div className="text-sm text-gray-600">{getFormattedDate(review.date)}</div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            아직 리뷰가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};
