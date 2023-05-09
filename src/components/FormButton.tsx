import { useStepContext } from '../hooks/useStepContext';
function FormButton({ form = '' }) {
  const { step, setStep } = useStepContext();
  return (
    <div>
      {step > 0 && (
        <button
          onClick={() => {
            setStep(step => step - 1);
          }}
        >
          Go back
        </button>
      )}
      <button type="submit" form={form}>
        {step === 3 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
}

export default FormButton;
