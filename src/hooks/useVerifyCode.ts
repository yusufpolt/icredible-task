import {useFormik} from 'formik';
import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useAuthenticationAction, useAuthenticationStore} from 'store/auth';
import * as Yup from 'yup';

const CodeVerifySchema = Yup.object().shape({
  verify_code: Yup.string()
    .min(6, 'Verification code missing')
    .required('Verification code required'),
});

const useVerifyCode = () => {
  const {setVerifyUser, setVeriyCodeModal} = useAuthenticationAction();
  const [loading, setLoading] = useState(false);
  const verify_code_modal = useAuthenticationStore(
    state => state.verify_code_modal,
  );

  const {...props} = useFormik({
    initialValues: {
      verify_code: '',
    },
    onSubmit: values => {
      setLoading(true);
      setVeriyCodeModal(false);
      setTimeout(() => {
        setLoading(false);
        setVerifyUser();
      }, 500);
    },
    validationSchema: CodeVerifySchema,
  });

  return {
    ...props,
    loading,
  };
};

export default useVerifyCode;

const styles = StyleSheet.create({});
