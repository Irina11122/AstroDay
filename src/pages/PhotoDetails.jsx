import { useParams, Link } from 'react-router-dom';
import { photographs } from '../data/photographs';

export default function PhotoDetails() {
  const { id } = useParams();

  const photo = photographs.find((item) => item.id === Number(id));

  if (!photo) {
    return (
      <main className="not-found">
        <h1>Photograph not found</h1>
        <Link to="/gallery">← Back to gallery</Link>
      </main>
    );
  }

  return (
    <main className="photo-details">
      <section className="details-hero">
        <div className="details-image">
          <img src={photo.image} alt={photo.title} />
        </div>

        <div className="details-info">
          <p className="eyebrow">{photo.category}</p>

          <h1>{photo.title}</h1>

          <p className="photographer">{photo.photographer}</p>

          <div className="details-meta">
            <div>
              <span>YEAR</span>
              <strong>{photo.year}</strong>
            </div>

            <div>
              <span>PHOTOGRAPHER</span>
              <strong>{photo.photographer}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="photo-story">
        <p className="eyebrow">THE STORY</p>

        <p className="story-text">{photo.description}</p>
      </section>

      <div className="back-link">
        <Link to="/gallery">← Back to collection</Link>
      </div>
    </main>
  );
}
