import {useNavigation} from '@react-navigation/native';
import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {handleRegister} from 'api/auth';
import {AxiosError} from 'axios';
import {useFormik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import * as Yup from 'yup';

type UserRegisterData = {
  username: string;
  password: string;
};

const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too Short').required('Username required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password required'),
  password_confirm: Yup.string()
    .required('Password confirm required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

const useRegister = (
  options?: UseMutationOptions<UserRegisterData, AxiosError, UserRegisterData>,
) => {
  const navigation = useNavigation<any>();
  const {mutate, ...props} = useMutation({
    mutationFn: ({username, password}) => handleRegister(username, password),
    onSuccess(data: any) {
      console.log('hereeee data', data);
      if (data.user) {
        navigation.navigate('Login');
        showMessage({
          message: 'Registration Successful',
          description: 'Login to continue',
          type: 'success',
        });
      } else {
        showMessage({
          message: 'Error',
          description: 'User already exists',
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
      password_confirm: '',
    },
    onSubmit: values => {
      console.log('here', values);
      mutate({username: values.username, password: values.password});
    },
    validationSchema: RegisterSchema,
  });

  return {
    ...props,
    ...formikProps,
  };
};

export default useRegister;
