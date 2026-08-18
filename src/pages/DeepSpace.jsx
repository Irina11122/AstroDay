export default function DeepSpace() {
  return (
    <main className="deep-space-page">
      <section className="deep-space-hero">
        <div className="deep-space-overlay">
          <p className="deep-space-label">BEYOND OUR GALAXY</p>

          <h1>Deep Space</h1>

          <p className="deep-space-intro">
            Enter the unknown. Explore black holes, nebulae, supernovae and
            distant galaxies hidden across the vastness of space.
          </p>
        </div>
      </section>

      <section className="deep-space-content">
        <div className="space-card">
          <span className="space-number">01</span>

          <div className="space-visual black-hole"></div>

          <h2>Black Holes</h2>

          <p>
            Regions of space where gravity is so powerful that nothing, not even
            light, can escape. At their center lies a mysterious singularity.
          </p>
        </div>

        <div className="space-card">
          <span className="space-number">02</span>

          <div className="space-visual nebula"></div>

          <h2>Nebulae</h2>

          <p>
            Enormous clouds of gas and dust scattered across space. Some are the
            birthplace of new stars, while others are the remains of dying
            stars.
          </p>
        </div>

        <div className="space-card">
          <span className="space-number">03</span>

          <div className="space-visual supernova"></div>

          <h2>Supernovae</h2>

          <p>
            Powerful stellar explosions that can briefly outshine entire
            galaxies and spread heavy elements throughout the universe.
          </p>
        </div>

        <div className="space-card">
          <span className="space-number">04</span>

          <div className="space-visual distant-galaxy"></div>

          <h2>Distant Galaxies</h2>

          <p>
            Billions of light-years away, countless galaxies reveal the history
            of the universe and allow us to look back into cosmic time.
          </p>
        </div>
      </section>

      <section className="cosmic-depth">
        <div className="cosmic-text">
          <p className="depth-label">HOW FAR CAN WE SEE?</p>

          <h2>
            Looking Into
            <br />
            the Past
          </h2>

          <p>
            When we look into deep space, we are also looking into the past.
            Light needs time to travel across the universe, meaning the most
            distant objects we see appear as they were billions of years ago.
          </p>
        </div>

        <div className="cosmic-number">
          <span>13.8</span>
          <small>BILLION YEARS</small>
        </div>
      </section>

      <section className="deep-space-fact">
        <p>
          THE FURTHER WE LOOK,
          <br />
          THE FURTHER BACK IN TIME WE SEE.
        </p>
      </section>
    </main>
  );
}
