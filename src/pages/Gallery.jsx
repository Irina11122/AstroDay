import PhotoCard from '../components/PhotoCard';
import { photographs } from '../data/photographs';

export default function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-header">
        <p className="eyebrow">THE COLLECTION</p>

        <h1>
          ICONIC
          <br />
          IMAGES
        </h1>

        <p>
          A collection of photographs that became symbols of history, culture,
          humanity and unforgettable moments.
        </p>
      </section>

      <section className="gallery-grid">
        {photographs.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </section>
    </main>
  );
}
