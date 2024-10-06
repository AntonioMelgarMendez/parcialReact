import cuero from '../../images/images/setBotas/cuero.jpg';
import impermeable from '../../images/images/setBotas/impermeable.jpg';
import ergonomico from '../../images/images/setBotas/ergonomico.jpg';
import traccion from '../../images/images/setBotas/traccion.jpg';
import pies from '../../images/images/setBotas/pies.jpg';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Carousel from '../Aux/Carousel';
import './Feature.css';

function Feature() {
    const slides = [
        {
          image: cuero,
          title: 'Calidad Superior del Cuero',
          text: 'Cuero de alta calidad que garantiza resistencia y durabilidad.',
        },
        {
          image: impermeable,
          title: 'Impermeabilidad',
          text: 'Protección contra el agua, ideal para cualquier clima.',
        },
        {
          image: ergonomico,
          title: 'Diseño Ergonómico',
          text: 'Adaptación perfecta para mayor confort.',
        },
        {
          image: traccion,
          title: 'Suela Antideslizante',
          text: 'Tracción mejorada para superficies resbaladizas.',
        },
        {
          image: pies,
          title: 'Material Transpirable',
          text: 'Mantiene tus pies frescos y secos todo el día.',
        },
      ];
    
  
      useScrollAnimation();  
      return (
        <section id="features" className="features-section fade-in">
          <h2>Características</h2>
          <Carousel slides={slides} /> 
        </section>
      );
}

export default Feature;
