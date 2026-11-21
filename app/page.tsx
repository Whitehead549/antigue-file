import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"
import { SiteNavbar } from "@/components/site-navbar"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

const categories = [
  { title: "Porcelain\n& China", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=700&q=85" },
  { title: "Comics &\nMagazines", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=700&q=85" },
  { title: "Furniture\n& Decor", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85" },
  { title: "Sports Cards,\nGames & Toys", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b821b9?auto=format&fit=crop&w=700&q=85" },
  { title: "Vinyl, CDs\n& DVDs", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=700&q=85" },
  { title: "Unique\nFinds!", image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=85" },
]

const atticStories = [
  { title: "Vintage Decor Trends: Pieces Making a Major Comeback in 2026", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85" },
  { title: "Should You Open Old Sports Card Packs? (Or Keep Them Sealed for Value)", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b821b9?auto=format&fit=crop&w=700&q=85" },
  { title: "I Inherited a Collection: Now What?", image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=85" },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="section-title">{children}</h2>
}

export default function Home() {
  return (
    <main id="home">
      <SiteNavbar />
      <section className="hero" aria-label="Inglewood Antique Market">
        <div className="hero-shade" />
        <div className="hero-lockup">
          <span className="hero-arched">Inglewood</span>
          <span className="hero-rule"><i /></span>
          <span className="hero-title">Antique</span>
          <span className="hero-subtitle">Market</span>
        </div>
      </section>

      <section className="intro section-wrap">
        <SectionTitle>Curated Antiques, Collectibles, &amp; Timeless Finds</SectionTitle>
        <p className="intro-copy">Fifteen dealers. Thousands of stories. One unforgettable barn. At Inglewood Antique Market, every aisle is packed to the rafters with antiques, vintage furniture, Canadiana, retro collectibles, fine china, and the kind of unexpected treasures that make you slow down and look twice. <a href="#visit">Located in Caledon, Ontario, just north of Toronto</a>, we’re open year-round. Come and visit us today!</p>
        <p className="quote">“Antiques, vintage wares, and one-of-a-kind finds — all under one historic roof.”</p>
        <p className="intro-copy lower-copy">Whether you’re a serious collector, a weekend treasure hunter, or just tagging along “for a quick look,” there’s always something waiting to be discovered. Inglewood Antique Market blends its deep roots and authentic charm with fresh energy, new dealers, and thoughtfully curated collections, ensuring that every visit feels both familiar and new.</p>
        <div className="category-grid" id="collections">
          {categories.map((category) => (
            <a className="category-card" href="#visit" key={category.title} style={{ backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.65),rgba(0,0,0,.25)),url("${category.image}")` }}>
              <span>{category.title.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="visit-band" id="visit">
        <div className="visit-inner">
          <SectionTitle>Visit Us</SectionTitle>
          <div className="visit-details">
            <div className="visit-detail">
              <h3>Address</h3>
              <address>16083 Hurontario St.<br />Caledon Village, ON, L7C 2G6</address>
            </div>
            <div className="visit-detail">
              <h3>Email</h3>
              <a href="mailto:medleyauctions@hotmail.com">medleyauctions@hotmail.com</a>
            </div>
            <div className="visit-detail">
              <h3>Store Hours</h3>
              <p>Monday – Sunday: 10:30am – 5:00pm</p>
              <p className="italic">We’re open all year round, including most holidays!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews" aria-labelledby="reviews-title">
        <div className="section-wrap">
          <h2 className="section-title" id="reviews-title">Treasured by Our Visitors</h2>
        </div>
        <TestimonialCarousel />
      </section>

      <section className="story section-wrap">
        <div className="story-row">
          <div><SectionTitle>Our Origin Story</SectionTitle><p><strong><em>Inglewood Antique Market has been a cornerstone for vintage enthusiasts and collectors since 1994.</em></strong> Originally founded by Annette and Phil Turturici, the market began as a labour of love—an inviting space tucked inside a rustic barn, offering a thoughtfully curated selection of antiques, collectibles, knick-knacks and rare oddities.</p><p>In 2018, Jon Medley took the helm. Jon’s rich knowledge of mid-century furniture, art, records, jewelry, figures, books and more breathed new life into the market.</p><p>And now, under the stewardship of Chad Reynolds, the tradition continues.</p></div>
          <Image className="story-image" src="/market-barn.png" alt="Historic timber barn housing the antique market" width={900} height={650} />
        </div>
        <div className="story-row story-row-reverse">
          <div className="shop-collage"><Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85" alt="Vintage furniture and home decor in a curated shop" width={800} height={500} /><Image src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=900&q=85" alt="Records and collectibles displayed in a shop" width={800} height={500} /></div>
          <div><SectionTitle>Antiques, Vintage &amp; Collectibles</SectionTitle><p><strong>Inglewood Antique Market</strong> is a destination antique mall in Caledon Village, just north of Toronto. With 15 local vendors under one roof, shoppers can explore nostalgia from every era. <a href="#attic">Take the virtual tour</a> to see what else we’ve got in stock!</p><ul className="collection-list"><li>China, Porcelain, &amp; Glassware</li><li>Comics &amp; Graphic Novels</li><li>Jewelry &amp; Clothing</li><li>Vintage Toys &amp; Games</li><li>Antiques &amp; Furniture</li><li>Books &amp; Magazines</li><li>Home Decor &amp; Wall Art</li><li>Vinyl, CDs &amp; DVDs</li></ul><p>Newly revitalized while honouring its long tradition, the market offers a welcoming, small-town atmosphere perfect for collectors, treasure hunters, and weekend explorers.</p><p><strong><em>We invite you to come visit and explore for yourself!</em></strong></p></div>
        </div>
      </section>

      <section className="attic section-wrap" id="attic">
        <h2 className="lined-title"><span>From The Attic</span></h2>
        <div className="attic-grid">{atticStories.map((story) => <a href="#attic" className="attic-card" key={story.title}><Image src={story.image} alt="" width={700} height={440} /><span>{story.title}</span></a>)}</div>
      </section>

      <section className="newsletter">
        <div className="newsletter-logo"><span>Behind the Find</span><i>✦</i></div>
        <h2>The Inglewood Antique Newsletter</h2>
        <p>Sign up today for previews of new items, upcoming events, sales, and exclusive discounts. We respect your inbox. No spam. Only the good stuff.</p>
        <form action="#newsletter" id="newsletter"><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Email Address" required /><button type="submit">Sign Me Up</button></form>
      </section>
      <SiteFooter />
    </main>
  )
}
