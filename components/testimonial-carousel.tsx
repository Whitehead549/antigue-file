const recentReviewsImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-frFODnwGH88EZ5HyjW1qnhJwXW2oKv.png"

const testimonials = [
  {
    name: "Narciza Rakhimova",
    time: "1 month ago",
    rating: 5,
    quote: "Fantastic place!",
    avatarSource: recentReviewsImage,
    avatarPosition: "-73px -46px",
    avatarSize: "976px 303px",
  },
  {
    name: "James Rylance",
    time: "1 month ago",
    rating: 4,
    quote: "First time visiting, lots of parking, easy to get to on Hwy10 just before the Grange & Forks of the Credit. The antique building is full of character.",
    avatarSource: recentReviewsImage,
    avatarPosition: "-368px -46px",
    avatarSize: "976px 303px",
  },
  {
    name: "Ali Saremi",
    time: "1 month ago",
    rating: 5,
    quote: "Inglewood Antique Market is a really fun place to browse, with a great variety of finds.",
    avatarSource: recentReviewsImage,
    avatarPosition: "-663px -46px",
    avatarSize: "976px 303px",
  },
  {
    name: "Heather A",
    time: "3 weeks ago",
    rating: 5,
    quote: "I had a very nice experience here, lots to look at and good prices. Meeting wonderful people along the way.",
    avatarSource: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=85",
    avatarPosition: "center",
    avatarSize: "cover",
  },
  {
    name: "pavalohn",
    time: "3 weeks ago",
    rating: 5,
    quote: "This is such an amazing place. I spent a couple hours in there! Thank you kindly for being so helpful and kind.",
    avatarSource: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=85",
    avatarPosition: "center",
    avatarSize: "cover",
  },
  {
    name: "Camille Cruz",
    time: "3 weeks ago",
    rating: 5,
    quote: "Visited with my family after going to Downey’s Farm. It was an incredibly charming store with lots of interesting, well curated finds.",
    avatarSource: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=85",
    avatarPosition: "center",
    avatarSize: "cover",
  },
]

function ReviewCard({ review }: { review: (typeof testimonials)[number] }) {
  return (
    <article className="review-card">
      <div className="review-head">
        <span
          className="avatar avatar-photo"
          role="img"
          aria-label={`${review.name}'s profile photo`}
          style={{ backgroundImage: `url("${review.avatarSource}")`, backgroundPosition: review.avatarPosition, backgroundSize: review.avatarSize }}
        />
        <div className="reviewer-details">
          <strong>{review.name}</strong>
          <small>{review.time}</small>
        </div>
        <span className="google-mark" aria-label="Google review">G</span>
      </div>
      <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, index) => (
          <svg key={index} className={index < review.rating ? "rating-star" : "rating-star empty-star"} viewBox="0 0 24 24" aria-hidden="true">
            <path d="m12 2.4 2.95 6 6.62.96-4.79 4.67 1.13 6.6L12 17.51l-5.91 3.11 1.13-6.6-4.79-4.67 6.62-.96L12 2.4Z" />
          </svg>
        ))}
        <span className="verified-mark" aria-label="Verified review">✓</span>
      </div>
      <p>{review.quote}</p>
      <span className="read-more">Read more</span>
      <span className="review-quote-mark" aria-hidden="true">“</span>
    </article>
  )
}

export function TestimonialCarousel() {
  return (
    <div className="review-carousel" role="region" aria-label="Customer testimonials scrolling continuously">
      <div className="review-track">
        {testimonials.map((review) => <ReviewCard review={review} key={review.name} />)}
        <div className="review-track-duplicate" aria-hidden="true">
          {testimonials.map((review) => <ReviewCard review={review} key={`duplicate-${review.name}`} />)}
        </div>
      </div>
    </div>
  )
}
