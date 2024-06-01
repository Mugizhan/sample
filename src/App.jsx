import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home1';
import Product from './Components/Product/Product';
import Login from './Components/Login/Login'; // Assuming you have a Login component

function App() {
  return (
    <div>
      <BrowserRouter basename="/navi">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Redirect to login */}
          <Route path="/login" element={<Login />} /> {/* Login component */}
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Fallback route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
