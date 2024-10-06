import usuario5 from '../../images/testimonials/usuario5.jpg';
import usuariomujer from '../../images/testimonials/usuariomujer.jpg';
import usuario2 from '../../images/testimonials/usuario2.png';
import usuario3 from '../../images/testimonials/usuario3.png';
import usuario4 from '../../images/testimonials/usuario4.png';
import usuario6 from '../../images/testimonials/usuario6.jpg';
import usuario8 from '../../images/testimonials/usuario8.avif';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Testimonies.css';

function Testimonies() {
    useScrollAnimation();
  return (
    <section id="testimonials" className="testimonials fade-in">
        <h2>Testimonios</h2>
        <div className="container-testimonials">
            <div className="testimonial">
                <img src={usuario5} alt="Profile Picture" className="testimonial-img"/>
                <h3>Alberto Quintanilla</h3>
                <h4>Ganadero</h4>
                <p className="testimonial-quote">“Las botas de cuero son una pieza esencial para mi trabajo en el campo. Son resistentes y me protegen los pies durante largas jornadas cuidando el ganado.”</p>
            </div>
            <div className="testimonial">
                <img src={usuariomujer} alt="Profile Picture" className="testimonial-img"/>
                <h3>Ana García</h3>
                <h4>Senderista</h4>
                <p className="testimonial-quote">“He usado estas botas en mis caminatas por la montaña, y han demostrado ser las más cómodas y resistentes. Definitivamente, son mis favoritas para aventuras al aire libre.”</p>
            </div>
            <div className="testimonial">
                <img src={usuario2} alt="Profile Picture" className="testimonial-img"/>
                <h3>Carlos Rodríguez</h3>
                <h4>Trabajador de la construcción</h4>
                <p className="testimonial-quote">“Trabajo en la construcción y necesito botas que puedan resistir todo tipo de condiciones. Estas botas de cuero me han dado la durabilidad y confort que buscaba.”</p>
            </div>
            <div className="testimonial">
                <img src={usuario3} alt="Profile Picture" className="testimonial-img"/>
                <h3>Lucía Fernández</h3>
                <h4>Estilista</h4>
                <p className="testimonial-quote">“Además de ser extremadamente cómodas, estas botas son muy elegantes. Las uso tanto para el trabajo como para salir, y siempre recibo cumplidos por su diseño.”</p>
            </div>

            <div className="testimonial">
                <img src={usuario4} alt="Profile Picture" className="testimonial-img"/>
                <h3>Claudia Pérez</h3>
                <h4>Amante de la moda</h4>
                <p className="testimonial-quote">“Estas botas son el complemento perfecto para mi estilo. Son cómodas y a la vez muy sofisticadas. Se han convertido en mis favoritas para el día a día.”</p>
            </div>
            <div className="testimonial">
                <img src={usuario6} alt="Profile Picture" className="testimonial-img"/>
                <h3>Javier Gómez</h3>
                <h4>Agricultor</h4>
                <p className="testimonial-quote">“Las botas de cuero me han acompañado en largas jornadas de trabajo en el campo. Son resistentes al agua y al barro, lo que las hace ideales para cualquier condición climática.”</p>
            </div>
            <div className="testimonial">
                <img src={usuario8} alt="Profile Picture" className="testimonial-img"/>
                <h3>Manuel Lopez</h3>
                <h4>Chef</h4>
                <p className="testimonial-quote">“Las uso para trabajar en la cocina, y me brindan el soporte que necesito para estar de pie durante horas. Además, su diseño me encanta, siempre se ven bien.”</p>
            </div>
            
        </div>
    </section>
  );
}

export default Testimonies;
