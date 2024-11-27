import { useUser } from '@/context/UserContext';
import { json, useNavigate } from 'react-router-dom';
import InputField from '@/components/common/InputField';
import styles from './LoginForm.module.scss';
import '@/styles/global.scss';
import { toast } from 'react-toastify';
import { LoginResponse } from './types';
import { Formik, FormikConfig } from 'formik';
import { LoginValues } from '@types';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
});

// create a type for the form values
type LoginFormFormValues = FormikConfig<LoginValues>;
// const x: LoginFormFormValues;
// x.

const LoginForm = () => {
  const { saveUserToContext } = useUser() ?? {};
  const navigate = useNavigate();

  const handleLogin: LoginFormFormValues['onSubmit'] = async ({ email, password }) => {
    // check if we are in production or development, and set the api url accordingly (from .env file)
    const isProd = import.meta.env.VITE_PROD === 'true';

    try {
      console.log('Bandoma prisijungti {', email, password, '}');
      // const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/auth/login`;
      // const response = await fetch(apiUrl, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();
      // handleLoginResponse(response, data);
    } catch {
      toast.error('An error occurred during login. Please try again.');
    }
  };

  const handleLoginResponse = (response: Response, data: LoginResponse) => {
    if (response.ok) {
      saveUserToContext?.(data.user);
      toast.success(
        `Login successful, hello ${data.user.username}! You can now add businesses to your favorites.`,
      );
      navigate('/');
    } else {
      if (data.message) {
        toast.error(data.message);
      }
    }
  };

  return (
    <Formik
      // creates context for the form
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, dirty, isValid, handleChange, handleSubmit, handleBlur }) => (
        <div className={styles.login}>
          <h1 className="title">Login</h1>
          <pre>{JSON.stringify({ errors, touched }, null, 2)}</pre>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Email:"
              type="email"
              id="email"
              name="email"
              value={values.email}
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <InputField
              label="Password:"
              type="password"
              id="password"
              name="password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={!dirty || !isValid}>
              Login
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
