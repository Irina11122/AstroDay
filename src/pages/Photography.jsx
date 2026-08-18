import { Link } from 'react-router-dom';

export default function Photography() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">A DIGITAL PHOTOGRAPHY EXHIBITION</p>

          <h1>
            ICONIC
            <br />
            PHOTOGRAPHS
          </h1>

          <p className="hero-description">
            Explore the photographs that changed history, captured unforgettable
            moments and became symbols recognized around the world.
          </p>

          <Link to="/gallery" className="explore-button">
            Explore the collection →
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
            alt="Vintage camera"
          />
        </div>
      </section>

      <section className="intro">
        <p>
          Photography does more than capture a moment. Sometimes, a single image
          can tell the story of an entire generation.
        </p>
      </section>
    </main>
  );
}
