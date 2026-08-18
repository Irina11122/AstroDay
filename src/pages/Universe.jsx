import { Link } from 'react-router-dom';

export default function Universe() {
  return (
    <main className="universe-page">
      <section className="universe-hero">
        <h1>The Universe</h1>
        <p>
          Explore the galaxies, stars, planets and mysteries that make our
          universe extraordinary.
        </p>
      </section>

      <section className="universe-content">
        <div>
          <h2>
            <Link to="/galaxies">GALAXIES</Link>{' '}
          </h2>
          <p> Discover the enormous collections of stars, gas and dust.</p>
        </div>

        <div>
          <h2>
            <Link to="/stars">STARS</Link>{' '}
          </h2>
          <p>Learn how stars are born, live and eventually die.</p>
        </div>

        <div>
          <h2>
            <Link to="/planets">PLANETS</Link>{' '}
          </h2>
          <p>Explore worlds inside and beyond our Solar System.</p>
        </div>

        <div>
          <h2>
            <Link to="/deepspace">DEEP SPACE</Link>{' '}
          </h2>
          <p>Journey into nebulas, black holes and distant galaxies.</p>
        </div>
      </section>
    </main>
  );
}
