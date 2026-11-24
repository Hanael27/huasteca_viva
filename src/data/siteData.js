export const destinos = [
  { id: 'tamasopo', nombre: 'Cascadas de Tamasopo', cat: 'agua', img: 'Tamasopo.jpg', alt: 'Cascadas de Tamasopo con agua turquesa', texto: 'Nada en pozas turquesa rodeadas de selva.', pick: 'Tamasopo' },
  { id: 'xilitla', nombre: 'Xilitla y Jardín Surrealista', cat: 'cultura', img: 'Xilitla.jpg', alt: 'Esculturas surrealistas del Jardín de Edward James en Xilitla', texto: 'Un jardín de ensueño entre la neblina.', pick: 'Xilitla' },
  { id: 'aquismon', nombre: 'Aquismón y Sótano de las Golondrinas', cat: 'aventura', img: 'Aquismon.jpg', alt: 'Paisaje de Aquismón en la Huasteca', texto: 'Naturaleza imponente y miles de aves al amanecer.', pick: 'Aquismón' },
  { id: 'tamtoc', nombre: 'Zona arqueológica Tamtoc', cat: 'cultura', img: 'Tamtoc.jpg', alt: 'Zona arqueológica de Tamtoc', texto: 'La historia viva del pueblo teenek.', pick: 'Tamtoc' },
  { id: 'valles', nombre: 'Río Huichihuayán y Ciudad Valles', cat: 'agua', img: 'CdValles.jpg', alt: 'Río en Ciudad Valles', texto: 'Relájate en ríos de aguas cristalinas.', pick: 'Ciudad Valles' },
  { id: 'puente', nombre: 'Puente de Dios', cat: 'aventura', img: 'PdDios.jpg', alt: 'Paisaje de la Huasteca', texto: 'Una cueva con pozas de azul intenso.', pick: 'Puente de Dios' },
];

export const filtros = [
  { id: 'todos', label: 'Todos' },
  { id: 'agua', label: 'Cascadas y ríos' },
  { id: 'cultura', label: 'Cultura' },
  { id: 'aventura', label: 'Aventura' },
];

export const paquetes = [
  { id: 'escapada', nombre: 'Escapada', precio: 1890, items: ['1 noche de hotel', '2 destinos con guía', 'Transporte en combi', 'Entradas incluidas'] },
  { id: 'aventura', nombre: 'Aventura Huasteca', precio: 3490, top: true, items: ['2 noches de hotel', '4 destinos con guía', 'Autobús o combi', 'Desayunos y entradas'] },
  { id: 'total', nombre: 'Expedición Total', precio: 5990, items: ['4 noches de hotel', 'Los 7 destinos con guía', 'Todas las comidas', 'Fotos y seguro de viajero'] },
];

export const beneficios = [
  { ico: '🧭', t: 'Guías locales', p: 'Conocen cada sendero, leyenda y rincón secreto de la región.' },
  { ico: '🚌', t: 'Transporte seguro', p: 'Autobuses y combis con clima, seguro de viajero y operadores profesionales.' },
  { ico: '🏨', t: 'Hospedaje incluido', p: 'Hoteles y cabañas seleccionados cerca de los atractivos.' },
  { ico: '💸', t: 'Precio claro', p: 'Sin cargos ocultos: entradas, traslados y guía ya incluidos.' },
];

export const testimonios = [
  { q: 'El guía nos llevó a pozas que ni sabíamos que existían. Todo puntual y muy bien organizado.', a: 'Mariana R., Monterrey' },
  { q: 'Fuimos en familia con niños y todo fue sencillo: transporte, hotel y comidas. Repetiremos.', a: 'Luis y Carmen, CDMX' },
  { q: 'El Jardín de Xilitla con explicación del guía fue otra experiencia. Excelente precio.', a: 'Andrea P., Querétaro' },
];

export const faq = [
  { q: '¿Qué incluye el precio?', a: 'Transporte, guía, entradas y hospedaje según el paquete elegido.' },
  { q: '¿Cuál es el mejor mes para ir?', a: 'De octubre a mayo hay mejor clima; en verano las cascadas lucen más caudalosas.' },
  { q: '¿Puedo reservar para un grupo?', a: 'Sí, tenemos tarifas especiales para grupos de 10 o más personas.' },
];
