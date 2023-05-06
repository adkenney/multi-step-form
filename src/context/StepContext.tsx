import { SetStateAction, createContext, useState } from 'react';

interface StepContextValue {
  step: number | null;
  setStep: React.Dispatch<SetStateAction<number | null>>;
}

export const StepContext = createContext<StepContextValue | undefined>(
  undefined
);

export const StepContextProvider = ({ children }: any) => {
  const [step, setStep] = useState<number | null>(0);
  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};
