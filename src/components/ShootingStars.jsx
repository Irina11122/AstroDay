import { useEffect, useState } from 'react';

export default function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const id = Date.now() + Math.random();

      const star = {
        id,
        top: Math.random() * 60,
        left: Math.random() * 100,
        duration: 0.8 + Math.random() * 0.8,
      };

      setStars((prev) => [...prev, star]);

      setTimeout(
        () => {
          setStars((prev) => prev.filter((star) => star.id !== id));
        },
        star.duration * 1000 + 500,
      );
    };

    createStar();

    const interval = setInterval(createStar, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shooting-stars">
      {stars.map((star) => (
        <span
          key={star.id}
          className="shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDuration: `${star.duration}s`,
          }}
        ></span>
      ))}
    </div>
  );
}
