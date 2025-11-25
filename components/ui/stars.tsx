// lol yeah gemini

import { Star } from "lucide-react";

export const StarRating = ({ rating = 0, maxStars = 5 }) => {
  // Create an array of IDs [1, 2, 3, 4, 5] to use as unique keys
  const starIds = Array.from({ length: maxStars }, (_, i) => i + 1);

  return (
    <div className="flex gap-1 text-zinc-100">
      {starIds.map((starId) => {
        // Calculate fill. Since starId is 1-based (1,2,3), subtract 1 for the math
        const fillAmount = Math.max(0, Math.min(1, rating - (starId - 1)));
        const percent = fillAmount * 100;

        return (
          // distinct key using the star's ID instead of the map index
          <div key={starId} className="relative w-5 h-5">
            {/* Background (Empty) Star */}
            <Star className="absolute top-0 left-0 w-full h-full text-zinc-600" />

            {/* Foreground (Filled) Star */}
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${percent}%` }}
            >
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
