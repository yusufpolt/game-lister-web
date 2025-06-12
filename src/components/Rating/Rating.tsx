import { Star } from "lucide-react";
import { useState } from "react";

interface RatingProps {
  initialRating?: number;
  maxRating?: number;
  onRatingChange?: (rating: number) => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Rating = ({
  initialRating = 0,
  maxRating = 5,
  onRatingChange,
  size = "md",
  disabled = false,
}: RatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const handleRatingChange = (newRating: number) => {
    if (disabled) return;
    setRating(newRating);
    onRatingChange?.(newRating);
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            key={index}
            type="button"
            className={`${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={() => handleRatingChange(ratingValue)}
            onMouseEnter={() => !disabled && setHoverRating(ratingValue)}
            onMouseLeave={() => !disabled && setHoverRating(0)}
            disabled={disabled}
          >
            <Star
              className={`${sizeClasses[size]} ${
                ratingValue <= (hoverRating || rating)
                  ? "text-white fill-white"
                  : "text-white/30"
              } transition-colors duration-200`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
