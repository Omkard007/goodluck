import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

import {reviews} from "@/lib/reviews";
import { Star } from "lucide-react";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  review,
}: {
  review: {
    author: string;
    rating: number;
    date: string;
    text: string;
    highlight: string;
  };
}) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all w-[500px]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-serif font-bold text-foreground mb-1">
            {review.author}
          </h3>
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
            <Star size={12} className="fill-current" />
            {review.rating}.0
          </span>
        </div>
        <span className="text-xs text-foreground/50">{review.date}</span>
      </div>

      <p className="text-foreground/80 leading-relaxed mb-4 italic">
        "{review.text}"
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
          {review.highlight}
        </span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-accent text-accent" />
          ))}
        </div>
      </div>
    </div>
  );
};

export function ReviewMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-20">
      <h2 className="text-4xl md:text-5xl  font-serif font-bold text-primary mb-15">
        What Our Customers Say
      </h2>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
