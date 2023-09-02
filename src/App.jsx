import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/router-dom/Navbar';
import AppRoutes from './components/router-dom/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
