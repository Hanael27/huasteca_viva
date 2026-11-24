import { useDispatch } from 'react-redux';
import { paquetes } from '../data/siteData';
import { elegirPaquete } from '../store/bookingSlice';
import Reveal from './Reveal';

export const mxn = (n) => n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 });

export default function Plans() {
  const dispatch = useDispatch();
  return (
    <section className="section" id="paquetes" aria-labelledby="t-paq">
      <div className="container">
        <h2 id="t-paq">Elige tu paquete</h2>
        <p className="sub">Precios por persona en habitación doble. Niños menores de 5 años gratis.</p>
        <div className="grid grid--3">
          {paquetes.map((p) => (
            <Reveal key={p.id}>
              <article className={`plan${p.top ? ' plan--top' : ''}`}>
                {p.top && <span className="badge">Más popular</span>}
                <h3>{p.nombre}</h3>
                <p className="price">{mxn(p.precio)} <small>MXN</small></p>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <a href="#reservar" className="btn btn--block" onClick={() => dispatch(elegirPaquete(p.id))}>Elegir {p.nombre}</a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
