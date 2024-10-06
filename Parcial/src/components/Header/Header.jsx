import logo from '../../images/logo/logo.png';
import './Header.css';


function Header() {
  return (
    <header className="navbar ">
      <img src={logo} alt="logo" className="logo" />
      <ul className="navbar-members">
        <li className="navbar-item"><a href="#">Inicio</a></li>
        <li className="navbar-item"><a href="#benefits">Beneficios</a></li>
        <li className="navbar-item"><a href="#features">Features</a></li>
        <li className="navbar-item"><a href="#testimonials">Testimonios</a></li>
        <li className="navbar-item"><a href="#" id="buy-now">Reserva ahora</a></li>
      </ul>
    </header>
  );
}

export default Header;
