import resistencia from '../../images/images/setBotas/resistencia.jpg';
import comodidad from '../../images/images/setBotas/comodidad.jpeg';
import estilo from '../../images/images/setBotas/estilo.jpg';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Benefits.css';

function Benefits() {
  useScrollAnimation();
  return (
    <section id="benefits" className="benefits-section fade-in">
      <h2>Beneficios</h2>
      <div className="benefit-cards">
        <div className="benefit-card" style={{ gridArea: 'card1' }}>
          <img src={resistencia} alt="Durabilidad"/>
          <div className="card-content">
            <h3>Durabilidad</h3>
            <p>Nuestras botas de cuero están hechas para durar muchos años, soportando las condiciones más exigentes.</p>
          </div>
        </div>
        <div className="benefit-card" style={{ gridArea: 'card2' }}>
          <img src={comodidad} alt="Comodidad"/>
          <div className="card-content">
            <h3>Comodidad</h3>
            <p>Con un diseño ergonómico, nuestras botas proporcionan comodidad durante todo el día.</p>
          </div>
        </div>
        <div className="benefit-card" style={{ gridArea: 'card3' }}>
          <img src={estilo} alt="Estilo"/>
          <div className="card-content">
            <h3>Estilo</h3>
            <p>El diseño elegante y moderno se adapta tanto a ocasiones formales como informales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
