import { createContext, useContext, useState } from 'react';
import './App.css';
import Info from './components/Info';
import Plan from './components/Plan';
import AddOn from './components/AddOn';
import Summary from './components/Summary';
import { useStepContext } from './hooks/useStepContext';

function App() {
  const { step, setStep } = useStepContext();
  function renderPage(step: number | null) {
    switch (step) {
      case 0:
        return <Info />;
      case 1:
        return <Plan />;
      case 2:
        return <AddOn />;
      case 3:
        return <Summary />;
    }
  }

  return <>{renderPage(step)}</>;
}

export default App;
