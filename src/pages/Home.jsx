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
          <p className="home-section-label">ASTROGRAVIA × PRAXIS</p>

          <h2>
            Creativity,
            <br />
            youth & community.
          </h2>

          <p>
            PRAXIS is a non-profit organisation based in Serres, Greece, working
            with young people and local communities through education, culture,
            creativity and active participation.
          </p>

          <p>
            Through its activities and projects, PRAXIS creates opportunities
            for young people to learn, exchange ideas, develop new skills and
            become active members of their communities.
          </p>

          <p>
            Its work connects people from different backgrounds and encourages
            creativity, collaboration and intercultural dialogue.
          </p>

          <p>
            Astrogravia Day reflects this approach by bringing together
            photography, astronomy, science and creativity in one shared
            experience.
          </p>

          <p>
            Through the lens, we are invited to look beyond what we already
            know, explore the universe and discover new ways of seeing the world
            around us.
          </p>
        </div>
        <div className="home-qr">
          <div className="qr-container">
            <img src="/public/praxis logo.png" alt="logo" />
          </div>

          <div className="home-praxis-number">
            <span>01</span>
            <p>YOUTH • CULTURE • CREATIVITY</p>
          </div>

          <p>Praxis Organisation</p>
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
