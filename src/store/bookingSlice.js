import { createSlice } from '@reduxjs/toolkit';
import { paquetes } from '../data/siteData';

const slice = createSlice({
  name: 'booking',
  initialState: { paquete: 'aventura', personas: 2, comentario: '' },
  reducers: {
    elegirPaquete: (s, a) => { s.paquete = a.payload; },
    elegirDestino: (s, a) => { s.comentario = `Me interesa visitar: ${a.payload}`; },
    setPersonas: (s, a) => { s.personas = a.payload; },
    setComentario: (s, a) => { s.comentario = a.payload; },
    reset: (s) => { s.personas = 2; s.comentario = ''; },
  },
});

export const { elegirPaquete, elegirDestino, setPersonas, setComentario, reset } = slice.actions;
export const selectBooking = (st) => st.booking;
export const selectTotal = (st) => {
  const p = paquetes.find((x) => x.id === st.booking.paquete);
  const n = Math.min(40, Math.max(1, Number(st.booking.personas) || 1));
  return (p?.precio ?? 0) * n;
};
export default slice.reducer;
