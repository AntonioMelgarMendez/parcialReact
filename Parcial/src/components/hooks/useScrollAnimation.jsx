import { useEffect } from 'react';

function useScrollAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar en la carga inicial para elementos visibles al inicio

    return () => window.removeEventListener('scroll', handleScroll); // Limpiar evento al desmontar
  }, []);
}

export default useScrollAnimation;
