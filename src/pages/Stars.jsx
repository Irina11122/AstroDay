export default function Stars() {
  return (
    <main className="stars-page">
      <section className="stars-hero">
        <div className="stars-overlay">
          <p className="stars-label">THE UNIVERSE</p>

          <h1>Stars</h1>

          <p className="stars-intro">
            Giant spheres of plasma that illuminate the universe, born in clouds
            of gas and dust and destined to change over millions or billions of
            years.
          </p>
        </div>
      </section>

      <section className="stars-content">
        <div className="star-card">
          <span className="star-number">01</span>

          <h2>Birth of a Star</h2>

          <p>
            Stars are born inside enormous clouds of gas and dust called
            nebulae. Gravity slowly pulls the material together until a new star
            begins to form.
          </p>
        </div>

        <div className="star-card">
          <span className="star-number">02</span>

          <h2>Main Sequence</h2>

          <p>
            Most stars spend the majority of their lives fusing hydrogen into
            helium. Our Sun is currently in this stage.
          </p>
        </div>

        <div className="star-card">
          <span className="star-number">03</span>

          <h2>Red Giants</h2>

          <p>
            When a star runs out of hydrogen in its core, it expands
            dramatically and becomes a red giant or red supergiant.
          </p>
        </div>

        <div className="star-card">
          <span className="star-number">04</span>

          <h2>Stellar Death</h2>

          <p>
            The final fate of a star depends on its mass. Some become white
            dwarfs, while massive stars can explode as supernovae and leave
            behind neutron stars or black holes.
          </p>
        </div>
      </section>

      <section className="star-fact">
        <p>ONE STAR CAN CHANGE AN ENTIRE GALAXY.</p>
      </section>
    </main>
  );
}
