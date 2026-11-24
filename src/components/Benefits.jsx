import { beneficios } from '../data/siteData';

export default function Benefits() {
  return (
    <section className="section" aria-labelledby="t-ben">
      <div className="container">
        <h2 id="t-ben">¿Por qué viajar con nosotros?</h2>
        <div className="grid grid--4">
          {beneficios.map((b) => (
            <article key={b.t} className="card card--flat">
              <span className="ico" aria-hidden="true">{b.ico}</span>
              <h3>{b.t}</h3>
              <p>{b.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
