import useCountUp from '../hooks/useCountUp';

function Stat({ end, label, plus }) {
  const n = useCountUp(end);
  return <li><strong>{n.toLocaleString('es-MX')}{plus && n === end ? '+' : ''}</strong><span>{label}</span></li>;
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__in">
        <p className="eyebrow">Tours guiados + hospedaje en un solo paquete</p>
        <h1>Descubre la Huasteca Potosina <em>sin preocuparte por nada</em></h1>
        <p className="hero__lead">Viaja en autobús o combi con guías certificados, visita cascadas, selva y zonas arqueológicas, y duerme en hoteles seleccionados. Tú solo disfruta.</p>
        <div className="hero__cta">
          <a href="#reservar" className="btn">Cotiza tu viaje gratis</a>
          <a href="#paquetes" className="btn btn--ghost">Ver paquetes</a>
        </div>
        <ul className="stats">
          <Stat end={4500} label="viajeros felices" plus />
          <Stat end={7} label="destinos" />
          <Stat end={12} label="años de experiencia" />
        </ul>
      </div>
    </section>
  );
}
