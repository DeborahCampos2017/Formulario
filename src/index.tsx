import React from 'react';
import ReactDOM from 'react-dom/client';
import FormularioInscricao from './Formulario';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormularioInscricao />
  </React.StrictMode>
);

reportWebVitals();
