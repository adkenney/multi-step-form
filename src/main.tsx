import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StepContextProvider } from './context/StepContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StepContextProvider>
      <App />
    </StepContextProvider>
  </React.StrictMode>
);
