import { useEffect, useState } from 'react';
import { testimonios } from '../data/siteData';

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonios.length), 6000);
    return () => clearInterval(t);
  }, [i]);

  return (
    <section className="section" id="testimonios" aria-labelledby="t-test">
      <div className="container">
        <h2 id="t-test">Lo que dicen nuestros viajeros</h2>
        <div className="slider" aria-live="polite">
          <blockquote className="slide is-active" key={i}>
            <p>“{testimonios[i].q}”</p>
            <footer>— {testimonios[i].a} ⭐⭐⭐⭐⭐</footer>
          </blockquote>
        </div>
        <div className="dots">
          {testimonios.map((_, k) => (
            <button key={k} className={`dot${k === i ? ' is-active' : ''}`} aria-label={`Testimonio ${k + 1}`} onClick={() => setI(k)} />
          ))}
        </div>
      </div>
    </section>
  );
}
