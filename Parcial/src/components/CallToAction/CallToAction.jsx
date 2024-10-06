
import reserva from '../../images/images/products/reserva.jpg';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './CallToAction.css';

function CallToAction() {
    useScrollAnimation();
  return (
    <section>
    <div className="calltoaction-container fade-in">
        <div className="text-info">
            <img src={reserva} alt="Terrenaitor Boots"/>
            <div className="calltoaction-text-header">
                <h2>Reserva tu Par de Botas Terrenaitor</h2>
                <p>Las botas Terrenaitor están diseñadas para enfrentar cualquier desafío. Con una combinación única de cuero resistente y tecnología de confort avanzada, son perfectas para cualquier terreno. Reserva tu par ahora y experimenta la máxima comodidad y durabilidad en cada paso. ¡No te quedes sin las tuyas!</p>
                <button>Reservar Ahora</button>
            </div>
        </div>
    </div>
</section>
  );
}

export default CallToAction;
