import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"; 
import { PropertiesProvider } from './context/PropertiesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <PropertiesProvider>
      <App />
    </PropertiesProvider>
  </BrowserRouter>
);

