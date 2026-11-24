export default function Hotel() {
  return (
    <section className="section section--alt" id="hotel" aria-labelledby="t-hot">
      <div className="container split">
        <img src="/img/HuastecaP.jpg" alt="Collage de cascadas y ríos de la Huasteca" loading="lazy" />
        <div>
          <h2 id="t-hot">Duerme en medio de la selva</h2>
          <p>Trabajamos con hoteles y cabañas en Ciudad Valles, Xilitla y Tamasopo: limpios, con aire acondicionado, desayuno regional y a minutos de cada atractivo.</p>
          <ul className="checks">
            <li>Habitaciones dobles, triples y familiares</li>
            <li>Alberca y estacionamiento</li>
            <li>Cancelación gratuita hasta 7 días antes</li>
          </ul>
          <a href="#reservar" className="btn">Reservar hospedaje</a>
        </div>
      </div>
    </section>
  );
}
