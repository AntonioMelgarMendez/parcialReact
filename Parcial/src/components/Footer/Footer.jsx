import { useState } from 'react';
import logo from '../../images/logo/logo.png';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Footer.css';

function Footer() {
  useScrollAnimation();

 
  const [email, setEmail] = useState('');


  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Correo suscrito:', email);
    setEmail(''); 
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="Logo Botas Conquer" className="footer-logo" />
          <p>Botas Conquer</p>
          <p>Todos los derechos reservados</p>
          <p>1234 Calle de las Botas, Suite 100<br />Ciudad, Estado, 56789</p>
        </div>

        <div className="footer-section">
          <h3>Empresa</h3>
          <ul>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Contáctanos</a></li>
            <li><a href="#">Sobre nosotros</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Soporte</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Ayuda</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Chat en vivo</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <ul className="social-media">
            <li><a href="#"><i className="fa-brands fa-facebook fa-2x"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter fa-2x"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram fa-2x"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-youtube fa-2x"></i></a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Suscríbete</h3>
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              value={email}
              onChange={handleInputChange} 
              required 
            />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
