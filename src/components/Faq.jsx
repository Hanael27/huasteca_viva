import { faq } from '../data/siteData';

export default function Faq() {
  return (
    <section className="section section--alt" id="faq" aria-labelledby="t-faq">
      <div className="container narrow">
        <h2 id="t-faq">Preguntas frecuentes</h2>
        {faq.map((f) => (
          <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
        ))}
      </div>
    </section>
  );
}
