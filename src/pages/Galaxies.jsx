export default function Galaxies() {
  return (
    <main className="galaxies-page">
      <section className="galaxies-hero">
        <div className="galaxies-overlay">
          <p className="galaxies-label">THE UNIVERSE</p>

          <h1>Galaxies</h1>

          <p className="galaxies-intro">
            Vast cosmic cities filled with billions of stars, planets, gas and
            dust, stretching across unimaginable distances.
          </p>
        </div>
      </section>

      <section className="galaxies-content">
        <div className="galaxy-card">
          <div className="galaxy-number">01</div>
          <h2>Milky Way</h2>
          <p>
            Our home galaxy. The Milky Way contains hundreds of billions of
            stars, including our Sun.
          </p>
        </div>

        <div className="galaxy-card">
          <div className="galaxy-number">02</div>
          <h2>Andromeda</h2>
          <p>
            The nearest major galaxy to the Milky Way. It is moving toward us
            and will eventually interact with our galaxy.
          </p>
        </div>

        <div className="galaxy-card">
          <div className="galaxy-number">03</div>
          <h2>Spiral Galaxies</h2>
          <p>
            Galaxies with beautiful spiral arms containing stars, gas and dust
            orbiting around a central region.
          </p>
        </div>

        <div className="galaxy-card">
          <div className="galaxy-number">04</div>
          <h2>Elliptical Galaxies</h2>
          <p>
            Huge collections of stars with smooth, rounded shapes and relatively
            little interstellar gas and dust.
          </p>
        </div>
      </section>
    </main>
  );
}
