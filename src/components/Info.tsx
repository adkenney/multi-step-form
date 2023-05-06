import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { useStepContext } from '../hooks/useStepContext';

function Info() {
  const { step, setStep } = useStepContext();

  interface infoFormData {
    fullName: string;
    email: string;
    phoneNumber: string;
  }

  const initialValues: infoFormData = {
    fullName: '',
    email: '',
    phoneNumber: '',
  };

  return (
    <section>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number</p>
      <Formik initialValues={initialValues} onSubmit={() => setStep(1)}>
        <Form>
          <label htmlFor="fullName">Name</label>
          <Field id="fullName" name="fullName" placeholder="e.g. Kobe Bryant" />
          <label htmlFor="email">Email Address</label>
          <Field
            id="email"
            name="email"
            placeholder="e.g. blackmamba@lorem.com"
            type="email"
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <Field
            id="phoneNumber"
            name="phoneNumber"
            placeholder="e.g. +1 234 567 890"
          />
          <button type="submit">Next Step</button>
        </Form>
      </Formik>
    </section>
  );
}

export default Info;
