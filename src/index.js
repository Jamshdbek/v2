import React , {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./i18next"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
    <App/>
    </Suspense>
  </React.StrictMode>
);

