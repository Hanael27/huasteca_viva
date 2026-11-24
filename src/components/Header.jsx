import { useState } from 'react';

const links = [['#destinos', 'Destinos'], ['#paquetes', 'Paquetes'], ['#hotel', 'Hospedaje'], ['#testimonios', 'Opiniones']];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <div className="container header__in">
        <a href="#inicio" className="logo">🦜 Ruta Viva <span>Huasteca</span></a>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" aria-label="Abrir menú" onClick={() => setOpen(!open)}>☰</button>
        <nav id="nav" className={`nav${open ? ' open' : ''}`} aria-label="Principal">
          {links.map(([href, label]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href="#reservar" className="btn btn--sm" onClick={close}>Reservar</a>
        </nav>
      </div>
    </header>
  );
}
