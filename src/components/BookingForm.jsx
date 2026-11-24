import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paquetes } from '../data/siteData';
import { elegirPaquete, setPersonas, setComentario, reset, selectBooking, selectTotal } from '../store/bookingSlice';
import { mxn } from './Plans';

const manana = () => { const d = new Date(); d.setDate(d.getDate() + 1); return d.toISOString().split('T')[0]; };

const reglas = {
  nombre: (v) => v.trim().length >= 3 || 'Escribe tu nombre completo (mínimo 3 letras).',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || 'Ingresa un correo válido, por ejemplo nombre@correo.com.',
  tel: (v) => /^\d{10}$/.test(v.replace(/[\s-]/g, '')) || 'El teléfono debe tener 10 dígitos.',
  personas: (v) => (Number(v) >= 1 && Number(v) <= 40) || 'Indica entre 1 y 40 personas.',
  fecha: (v) => (v && v >= manana()) || 'Elige una fecha a partir de mañana.',
};

export default function BookingForm() {
  const dispatch = useDispatch();
  const { paquete, personas, comentario } = useSelector(selectBooking);
  const total = useSelector(selectTotal);
  const [valores, setValores] = useState({ nombre: '', email: '', tel: '', fecha: '' });
  const [errores, setErrores] = useState({});
  const [gracias, setGracias] = useState('');

  const valorDe = (id) => (id === 'personas' ? personas : valores[id]);
  const validar = (id) => {
    const r = reglas[id](String(valorDe(id)));
    setErrores((e) => ({ ...e, [id]: r === true ? '' : r }));
    return r === true;
  };
  const cambiar = (e) => setValores({ ...valores, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const ids = Object.keys(reglas);
    const malos = ids.filter((id) => !validar(id));
    if (malos.length) return document.getElementById(malos[0])?.focus();
    setGracias(`¡Gracias, ${valores.nombre.trim().split(' ')[0]}! Recibimos tu solicitud por ${mxn(total)} MXN. Te contactaremos por WhatsApp en menos de 24 horas.`);
    setValores({ nombre: '', email: '', tel: '', fecha: '' });
    setErrores({});
    dispatch(reset());
  };

  const campo = (id, label, props) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} value={valorDe(id)} aria-invalid={Boolean(errores[id])} aria-describedby={`e-${id}`}
        className={errores[id] ? 'invalid' : errores[id] === '' ? 'valid' : ''} onBlur={() => validar(id)} {...props} />
      <small className="err" id={`e-${id}`}>{errores[id]}</small>
    </div>
  );

  return (
    <section className="section cta" id="reservar" aria-labelledby="t-res">
      <div className="container narrow">
        <h2 id="t-res">Reserva o cotiza tu viaje</h2>
        <p className="sub">Déjanos tus datos y te respondemos por WhatsApp en menos de 24 horas.</p>
        <form onSubmit={enviar} noValidate>
          {campo('nombre', 'Nombre completo', { type: 'text', autoComplete: 'name', onChange: cambiar })}
          {campo('email', 'Correo electrónico', { type: 'email', autoComplete: 'email', onChange: cambiar })}
          {campo('tel', 'Teléfono (10 dígitos)', { type: 'tel', inputMode: 'numeric', autoComplete: 'tel', onChange: cambiar })}
          <div className="row">
            <div className="field">
              <label htmlFor="paquete">Paquete</label>
              <select id="paquete" value={paquete} onChange={(e) => dispatch(elegirPaquete(e.target.value))}>
                {paquetes.map((p) => <option key={p.id} value={p.id}>{p.nombre} — {mxn(p.precio)}</option>)}
              </select>
            </div>
            {campo('personas', 'Personas', { type: 'number', min: 1, max: 40, onChange: (e) => dispatch(setPersonas(e.target.value)) })}
          </div>
          {campo('fecha', 'Fecha tentativa', { type: 'date', min: manana(), onChange: cambiar })}
          <div className="field">
            <label htmlFor="msg">Destino de interés / comentarios (opcional)</label>
            <textarea id="msg" rows="3" value={comentario} onChange={(e) => dispatch(setComentario(e.target.value))} />
          </div>
          <p className="total" aria-live="polite">Total estimado: <strong>{mxn(total)} MXN</strong></p>
          <button type="submit" className="btn btn--block">Enviar solicitud</button>
          {gracias && <p className="ok" role="status">{gracias}</p>}
        </form>
      </div>
    </section>
  );
}
