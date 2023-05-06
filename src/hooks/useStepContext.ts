import { useContext } from 'react';
import { StepContext } from '../context/StepContext';

export const useStepContext = () => {
  const stepContext = useContext(StepContext);
  if (stepContext === undefined) {
    throw new Error('useStepContext must be inside of a StepContextProvider');
  }
  return stepContext;
};
