import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router/router.jsx';
import Header from './components/Header.jsx';
import FooterCom from './components/Footer.jsx';
import './style/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppRoutes />
      <FooterCom />
    </Router>
  </React.StrictMode>
);
