import { useEffect, useState } from 'react';
export default function useCountUp(end) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const step = Math.max(1, Math.ceil(end / 60));
    const t = setInterval(() => setN((v) => { const x = Math.min(end, v + step); if (x >= end) clearInterval(t); return x; }), 25);
    return () => clearInterval(t);
  }, [end]);
  return n;
}
