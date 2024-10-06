


import './Alert.css';

function Alert() {

  return (
    <div id="customAlert" className="modal">
        <div className="modal-content">
            <span className="close-btn">&times;</span>
            <p id="alertMessage">Este es un mensaje de alerta.</p>
            <button id="alertOkBtn">Aceptar</button>
        </div>
    </div>
  );
}

export default Alert;
