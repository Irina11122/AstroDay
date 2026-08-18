export default function Planets() {
  return (
    <main className="planets-page">
      <section className="planets-hero">
        <div className="planets-overlay">
          <p className="planets-label">THE UNIVERSE</p>

          <h1>Planets</h1>

          <p className="planets-intro">
            Worlds of rock, gas and ice orbiting stars across the universe. From
            our Solar System to distant exoplanets, every planet tells a
            different story.
          </p>
        </div>
      </section>

      <section className="planets-section">
        <div className="planet-card">
          <span className="planet-number">01</span>

          <div className="planet-icon mercury"></div>

          <h2>Rocky Planets</h2>

          <p>
            Small, solid worlds with rocky surfaces. Mercury, Venus, Earth and
            Mars are the four terrestrial planets of our Solar System.
          </p>
        </div>

        <div className="planet-card">
          <span className="planet-number">02</span>

          <div className="planet-icon gas"></div>

          <h2>Gas Giants</h2>

          <p>
            Massive planets made mostly of hydrogen and helium. Jupiter and
            Saturn are the largest planets in our Solar System.
          </p>
        </div>

        <div className="planet-card">
          <span className="planet-number">03</span>

          <div className="planet-icon ice"></div>

          <h2>Ice Giants</h2>

          <p>
            Uranus and Neptune contain large amounts of water, methane and
            ammonia in their deep interiors.
          </p>
        </div>

        <div className="planet-card">
          <span className="planet-number">04</span>

          <div className="planet-icon exoplanet"></div>

          <h2>Exoplanets</h2>

          <p>
            Planets orbiting stars beyond our Sun. Thousands have already been
            discovered, revealing how diverse planetary systems can be.
          </p>
        </div>
      </section>

      <section className="solar-system">
        <p className="solar-label">OUR COSMIC NEIGHBORHOOD</p>

        <h2>The Solar System</h2>

        <p>
          Eight planets orbit our Sun, each with its own atmosphere, landscape
          and history.
        </p>

        <div className="planet-orbits">
          <div className="orbit orbit-1">
            <span className="orbit-planet planet-1"></span>
          </div>

          <div className="orbit orbit-2">
            <span className="orbit-planet planet-2"></span>
          </div>

          <div className="orbit orbit-3">
            <span className="orbit-planet planet-3"></span>
          </div>

          <div className="sun"></div>
        </div>
      </section>

      <section className="planet-fact">
        <p>THERE ARE WORLDS OUT THERE WE HAVE NOT EVEN DISCOVERED YET.</p>
      </section>
    </main>
  );
}
