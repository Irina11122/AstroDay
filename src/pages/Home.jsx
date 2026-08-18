import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      {/* EXISTING HERO - DON'T CHANGE */}

      <section className="home-hero">
        <h1>
          Through the lens, <br /> memories become stars
        </h1>

        <div className="btn-div-home">
          <button className="info-btn montserrat-400">
            <Link to="/universe">SEE THE UNIVERSE</Link>
          </button>

          <button className="contact-btn">
            <Link to="/photo">PHOTOGRAPHY</Link>
          </button>
        </div>
      </section>

      <section className="astrogravia-home">
        <div className="astrogravia-home-text">
          <p className="home-section-label">ASTROGRAVIA DAY</p>

          <h2>
            Where photography
            <br />
            meets the universe.
          </h2>

          <p>
            Astrogravia Day is an invitation to look beyond our everyday world
            and discover the universe through photography.
          </p>

          <p>
            From stars and planets to distant galaxies and deep space, we
            explore the cosmos through images, stories and creativity.
          </p>
        </div>

        <div className="astrogravia-home-number">
          <span>∞</span>
          <p>EXPLORE THE UNKNOWN</p>
        </div>
      </section>

      <section className="home-game">
        <div className="home-game-text">
          <p className="home-section-label">ASTROGRAVIA GAME</p>

          <h2>
            How much do
            <br />
            you know about space?
          </h2>

          <p>
            Test your knowledge and explore the universe through our interactive
            Astrogravia Day game.
          </p>

          <p>Scan the QR code with your phone and start your cosmic journey.</p>
        </div>
        <div className="home-qr">
          <div className="qr-container">
            <img
              src="/images/qr-game.png"
              alt="QR code for Astrogravia Day game"
            />
          </div>

          <h3>SCAN TO PLAY</h3>

          <p>Point your camera at the QR code</p>
        </div>{' '}
        <section className="home-discover">
          <div className="home-discover-header">
            <p className="home-section-label">DISCOVER</p>

            <h2>
              Start your journey
              <br />
              through the cosmos.
            </h2>
          </div>

          <div className="home-discover-grid">
            <Link to="/galaxies" className="home-discover-card">
              <span>01</span>
              <h3>Galaxies</h3>
              <p>Vast collections of stars, gas and dust.</p>
              <strong>→</strong>
            </Link>

            <Link to="/stars" className="home-discover-card">
              <span>02</span>
              <h3>Stars</h3>
              <p>Discover how stars are born and die.</p>
              <strong>→</strong>
            </Link>

            <Link to="/planets" className="home-discover-card">
              <span>03</span>
              <h3>Planets</h3>
              <p>Explore worlds inside and beyond our Solar System.</p>
              <strong>→</strong>
            </Link>

            <Link to="/deep-space" className="home-discover-card">
              <span>04</span>
              <h3>Deep Space</h3>
              <p>Enter the mysterious depths of the universe.</p>
              <strong>→</strong>
            </Link>
          </div>
        </section>
        {/* FINAL */}
        <section className="home-final-section">
          <p>LOOK UP. LOOK CLOSER.</p>

          <h2>
            There is more
            <br />
            beyond the lens.
          </h2>

          <Link to="/universe">EXPLORE THE UNIVERSE →</Link>
        </section>
      </section>
    </div>
  );
}
