import React from 'react'; //Librería que nos ayuda a hacer interfaces gráficas
import ReactDOM from 'react-dom/client'; //Este paquete nos ayudara a trabajar con React y con el DOM de nuestros navegadores
import './index.css'; //Importando algunos estilos
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //Representa la estructura de nuestro sitio web, esta ligado al id "root" que aparece dentro del div del documento index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
