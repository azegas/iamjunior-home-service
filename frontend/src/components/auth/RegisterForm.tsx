import { useUser } from '@/context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Formik, FormikConfig } from 'formik';
import * as yup from 'yup';
import InputField from '@/components/common/InputField';
import styles from './RegisterForm.module.scss';
import '@/styles/global.scss';
import { toast } from 'react-toastify';
import { LoginResponse } from './types';

const RegisterForm = () => {
  const { saveUserToContext } = useUser() ?? {};
  const navigate = useNavigate();

  const validationSchema = yup.object({
    username: yup
      .string()
      .min(3, 'Username must be at least 3 characters long.')
      .required('Username is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const handleRegistrationResponse = (response: Response, data: LoginResponse) => {
    if (response.ok) {
      saveUserToContext?.(data.user);
      toast.success(`Registered successfully, hello ${data.user.username}!`);
      navigate('/');
    } else {
      if (data.message) {
        toast.error(data.message);
      }
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          const isProd = import.meta.env.VITE_PROD === 'true';
          const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/auth/register`;
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          const data = await response.json();
          handleRegistrationResponse(response, data);
        } catch {
          toast.error('An error occurred during registration. Please try again.');
        } finally {
          setSubmitting(false);
        }
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        dirty,
        isValid,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
      }) => (
        <div className={styles.register}>
          <h1 className="title">Register</h1>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="username"
              label="Username:"
              value={values.username}
              error={errors.username}
              touched={touched.username}
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <InputField
              type="email"
              name="email"
              label="Email:"
              value={values.email}
              error={errors.email}
              touched={touched.email}
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <InputField
              type="password"
              name="password"
              label="Password:"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={!dirty || !isValid || isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
