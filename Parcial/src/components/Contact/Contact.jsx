import { useState, useEffect } from 'react';
import './Contact.css';
import Alert from '../Alert/Alert';

function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    mail: '',
    message: ''
  });

  const [alertVisible, setAlertVisible] = useState(false); 
  const [alertMessage, setAlertMessage] = useState(''); 

  useEffect(() => {
   
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { fname, mail, message } = formData;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (fname.trim().length < 5) {
      setAlertMessage('El nombre tiene que tener más de 5 letras');
      return false;
    }
    if (!mail.match(emailPattern)) {
      setAlertMessage('Por favor ingresa un correo válido');
      return false;
    }
    if (message.trim() === '') {
      setAlertMessage('El campo de mensaje es obligatorio');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
  
      setAlertMessage('Formulario enviado correctamente');
      setAlertVisible(true);
      setFormData({ fname: '', mail: '', message: '' });
    } else {

      setAlertVisible(true);
    }
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <section className="contact-section fade-in">
      <div className="container-form">
        <div className="container-form-title">Contacta con nosotros</div>
        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="fname">Nombre:</label><br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleInputChange}
            required
          /><br />

          <label htmlFor="mail">Email:</label><br />
          <input
            type="email"
            id="mail"
            name="mail"
            value={formData.mail}
            onChange={handleInputChange}
            required
          /><br /><br />

          <label htmlFor="message">Mensaje:</label><br />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea><br />

          <input type="submit" value="Enviar mensaje" />
        </form>
      </div>

      {alertVisible && <Alert message={alertMessage} closeAlert={closeAlert} />}
    </section>
  );
}

export default Contact;
