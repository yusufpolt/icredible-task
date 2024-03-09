import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LoginProps} from 'routers/auth-layout';
import {images} from '../../../assets';
import {
  Button,
  CodeVerifyModal,
  CopyrightComponent,
  Input,
  KeyboardAvoidingComponent,
  Paragraph,
} from '/components';
import {Colors} from '/constants';
import {useLogin} from '/hooks';

const Login = ({navigation}: LoginProps): React.JSX.Element => {
  const {bottom} = useSafeAreaInsets();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    visible,
    setVisible,
    isPending,
  } = useLogin();

  return (
    <>
      <KeyboardAvoidingComponent backgroundColor={Colors.background}>
        <View style={styles.container}>
          <Image style={styles.image} source={images.logo_icredible} />
          <View style={styles.headerContainer}>
            <Paragraph size={20} weight={'600'}>
              Welcome back!
            </Paragraph>
            <Paragraph weight={'300'}>
              Enter your credentials to continue.
            </Paragraph>
          </View>
          <View style={styles.formContainer}>
            <Input
              value={values.username}
              errorText={errors.username}
              onChangeText={handleChange('username')}
              label="Username"
              placeholder="username"
            />
            <Input
              value={values.password}
              errorText={errors.password}
              onChangeText={handleChange('password')}
              label="Password"
              hidePassword
              placeholder="password"
            />
            <Paragraph
              textStyle={styles.forgotPasswordText}
              color={Colors.text}>
              Forgot Password?{' '}
              <Paragraph
                weight={'600'}
                onPress={() => navigation.navigate('ForgotPassword')}
                color={Colors.orange}>
                Recovery
              </Paragraph>
            </Paragraph>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              loading={isPending}
              onPress={() => handleSubmit()}
              buttonStyle={styles.button}>
              <Paragraph color={Colors.background} size={18} weight={'600'}>
                Login
              </Paragraph>
            </Button>
            <Paragraph size={18} textStyle={styles.text}>
              Don't have an account?{' '}
              <Paragraph
                size={18}
                weight={'600'}
                onPress={() => navigation.navigate('Register')}
                color={Colors.orange}>
                Register
              </Paragraph>
            </Paragraph>
          </View>
        </View>
      </KeyboardAvoidingComponent>
      <View style={[styles.footerContainer, {marginBottom: bottom}]}>
        <CopyrightComponent />
      </View>
      <CodeVerifyModal
        isVisible={visible}
        onDismiss={() => setVisible(false)}
      />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
    justifyContent: 'center',
  },
  headerContainer: {
    gap: 6,
    marginVertical: 33,
  },
  formContainer: {
    gap: 18,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  buttonContainer: {
    gap: 10,
    marginTop: 30,
  },
  button: {
    height: 50,
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
  },
  footerContainer: {
    // marginBottom: 30,
    alignItems: 'center',
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
  },
});
