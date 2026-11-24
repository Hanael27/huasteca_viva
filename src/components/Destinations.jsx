import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { destinos, filtros } from '../data/siteData';
import { elegirDestino } from '../store/bookingSlice';
import Reveal from './Reveal';

export default function Destinations() {
  const [filtro, setFiltro] = useState('todos');
  const dispatch = useDispatch();
  const lista = destinos.filter((d) => filtro === 'todos' || d.cat === filtro);

  return (
    <section className="section section--alt" id="destinos" aria-labelledby="t-dest">
      <div className="container">
        <h2 id="t-dest">Destinos que visitamos</h2>
        <div className="filters" role="group" aria-label="Filtrar destinos">
          {filtros.map((f) => (
            <button key={f.id} className={`chip${filtro === f.id ? ' is-active' : ''}`} aria-pressed={filtro === f.id} onClick={() => setFiltro(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid grid--3">
          {lista.map((d) => (
            <Reveal key={d.id}>
              <article className="card">
                <img src={`/img/${d.img}`} alt={d.alt} loading="lazy" />
                <div className="card__b">
                  <h3>{d.nombre}</h3>
                  <p>{d.texto}</p>
                  <a href="#reservar" className="link" onClick={() => dispatch(elegirDestino(d.pick))}>Quiero ir →</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
