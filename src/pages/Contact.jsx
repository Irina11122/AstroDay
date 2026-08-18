export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-label">PRAXIS GREECE</p>

          <h1>Contact</h1>

          <p>
            Have a question, an idea or simply want to learn more? Get in touch
            with PRAXIS.
          </p>
        </div>
      </section>

      <section className="social-section">
        <div className="social-header">
          <p>STAY CONNECTED</p>
          <h2>Follow PRAXIS</h2>
          <span>
            Discover our activities, projects, stories and life in Serres.
          </span>
        </div>

        <div className="social-grid">
          <a
            href="https://www.instagram.com/praxis.greece/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card instagram"
          >
            <span className="social-icon">◎</span>

            <div>
              <small>INSTAGRAM</small>
              <h3>@praxis.greece</h3>
            </div>

            <span className="social-arrow">↗</span>
          </a>

          <a
            href="https://www.facebook.com/PraxisSerresGreece/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card facebook"
          >
            <span className="social-icon">f</span>

            <div>
              <small>FACEBOOK</small>
              <h3>Praxis Greece</h3>
            </div>

            <span className="social-arrow">↗</span>
          </a>

          <a
            href="https://www.youtube.com/channel/UCZZpA45YnxForS5faNqzOpw"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card youtube"
          >
            <span className="social-icon">▶</span>

            <div>
              <small>YOUTUBE</small>
              <h3>PRAXIS Greece</h3>
            </div>

            <span className="social-arrow">↗</span>
          </a>

          <a
            href="https://praxisgreece.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card blog"
          >
            <span className="social-icon">✦</span>

            <div>
              <small>PRAXIS BLOG</small>
              <h3>News & Stories</h3>
            </div>

            <span className="social-arrow">↗</span>
          </a>
        </div>
      </section>

      <section className="contact-bottom">
        <div>
          <span>PRAXIS</span>
          <p>Serres, Greece</p>
        </div>

        <div className="contact-slogan">
          <p>
            DON'T BE APART.
            <br />
            TAKE PART.
          </p>
        </div>
      </section>
    </main>
  );
}
