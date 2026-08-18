import { Link } from 'react-router-dom';

export default function PhotoCard({ photo }) {
  return (
    <Link to={`/photo/${photo.id}`} className="photo-card">
      <div className="photo-image">
        <img src={photo.image} alt={photo.title} />

        <span className="photo-number">
          {String(photo.id).padStart(2, '0')}
        </span>
      </div>

      <div className="photo-card-info">
        <div>
          <h2>{photo.title}</h2>
          <p>{photo.photographer}</p>
        </div>

        <span>{photo.year}</span>
      </div>
    </Link>
  );
}
