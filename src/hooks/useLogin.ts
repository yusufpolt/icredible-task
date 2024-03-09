import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {handleLogin} from 'api/auth';
import {AxiosError} from 'axios';
import {useFormik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import * as Yup from 'yup';
import {useAuthenticationAction} from '/store/auth';

type UserLoginData = {
  username: string;
  password: string;
};

type CredentialsData = {
  username: string;
  password: string;
  storage: string;
  service: string;
};

type LoginSuccessData = {
  credentials: CredentialsData;
};

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too Short').required('Username required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password required'),
});

const useLogin = (
  options?: UseMutationOptions<UserLoginData, AxiosError, UserLoginData>,
) => {
  const {setUser} = useAuthenticationAction();

  const {mutate, ...props} = useMutation({
    mutationFn: ({username, password}) => handleLogin(username, password),
    onSuccess(data: LoginSuccessData | any) {
      console.log('data', data);
      if (data.credentials) {
        setUser(data.credentials);
        showMessage({
          message: 'Login Successful',
          description: 'You are directed to the Home screen',
          type: 'success',
        });
      } else {
        showMessage({
          message: 'Error',
          description: 'Username or password is incorrect',
          type: 'danger',
        });
      }
    },
    ...options,
  });

  const {...formikProps} = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log('here', values);
      mutate({username: values.username, password: values.password});
    },
    validationSchema: LoginSchema,
  });

  return {
    ...props,
    ...formikProps,
  };
};

export default useLogin;
