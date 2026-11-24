import { useEffect, useState } from 'react';

export default function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById('reservar');
      const inForm = form && form.getBoundingClientRect().top < window.innerHeight * 0.7;
      setShow(window.scrollY > 600 && !inForm);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <a href="#reservar" className={`sticky-cta${show ? ' show' : ''}`}>Reservar</a>;
}
