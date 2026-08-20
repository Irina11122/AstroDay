import { Link } from 'react-router-dom';

export default function ClubSerres() {
  return (
    <main className="club-page">
      {/* HERO */}
      <section className="club-hero">
        <div className="club-hero-content">
          <p className="home-section-label">CLUB SERRES FOR UNESCO</p>

          <h1>
            Youth.
            <br />
            Culture.
            <br />
            Change.
          </h1>

          <p>
            Empowering young people through education, culture, creativity and
            active participation.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="club-about">
        <div className="club-about-label">
          <p>01 — ABOUT</p>
        </div>

        <div className="club-about-content">
          <h2>
            Creating opportunities
            <br />
            for a better future.
          </h2>

          <p>
            Club Serres for UNESCO is a non-governmental organisation based in
            Serres, Greece, founded in 1996.
          </p>

          <p>
            The organisation promotes non-formal education, awareness of social
            and environmental issues, active citizenship and social
            entrepreneurship.
          </p>

          <p>
            Through local and international activities, the Club creates
            opportunities for young people to learn, exchange ideas, develop
            skills and participate actively in their communities.
          </p>
        </div>
      </section>

      {/* AREAS */}
      <section className="club-areas">
        <div className="club-areas-header">
          <p className="home-section-label">WHAT WE DO</p>

          <h2>
            Education beyond
            <br />
            the classroom.
          </h2>
        </div>

        <div className="club-areas-grid">
          <div className="club-area-card">
            <span>01</span>
            <h3>Youth & Education</h3>
            <p>
              Creating learning opportunities through non-formal education,
              exchanges, seminars and training activities.
            </p>
          </div>

          <div className="club-area-card">
            <span>02</span>
            <h3>Human Rights</h3>
            <p>
              Raising awareness about equality, inclusion, human rights and
              social participation.
            </p>
          </div>

          <div className="club-area-card">
            <span>03</span>
            <h3>Environment</h3>
            <p>
              Encouraging environmental awareness and responsible relationships
              with nature.
            </p>
          </div>

          <div className="club-area-card">
            <span>04</span>
            <h3>Culture & Heritage</h3>
            <p>
              Supporting cultural heritage, multiculturalism and connections
              between communities.
            </p>
          </div>

          <div className="club-area-card">
            <span>05</span>
            <h3>Science & Research</h3>
            <p>
              Supporting educational and scientific activities and cooperation
              with local institutions.
            </p>
          </div>

          <div className="club-area-card">
            <span>06</span>
            <h3>European Identity</h3>
            <p>
              Connecting young people through European cooperation, mobility and
              shared values.
            </p>
          </div>
        </div>
      </section>

      {/* YOUTH */}
      <section className="club-youth">
        <div className="club-youth-number">
          <span>50+</span>
          <p>VOLUNTEERS</p>
        </div>

        <div className="club-youth-text">
          <p className="home-section-label">YOUTH PARTICIPATION</p>

          <h2>
            Young people are
            <br />
            part of the change.
          </h2>

          <p>
            Club Serres for UNESCO works with young people, students and local
            communities through projects, campaigns, youth exchanges, seminars
            and training activities.
          </p>

          <p>
            Its activities encourage young people to develop critical thinking,
            creativity, communication skills and active participation in
            society.
          </p>
        </div>
      </section>

      {/* ASTROGRAVIA CONNECTION */}
      <section className="club-astrogravia">
        <div>
          <p className="home-section-label">CLUB SERRES × ASTROGRAVIA</p>

          <h2>
            Looking beyond
            <br />
            what we know.
          </h2>
        </div>

        <div className="club-astrogravia-text">
          <p>
            Astrogravia Day brings together photography, astronomy, science and
            creativity.
          </p>

          <p>
            This creative experience reflects the values of learning,
            exploration, youth participation and intercultural exchange that are
            central to the work of Club Serres for UNESCO.
          </p>

          <Link to="/universe">EXPLORE THE UNIVERSE →</Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="club-contact">
        <img
          src="/images/club-serres-unesco-logo.png"
          alt="Club Serres for UNESCO"
        />

        <p>
          Ioustinianou 19
          <br />
          62123 Serres, Greece
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=serres.for.unesco@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          serres.for.unesco@gmail.com
        </a>

        <a
          href="https://www.serresforunesco.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT OFFICIAL WEBSITE →
        </a>
      </section>
    </main>
  );
}
