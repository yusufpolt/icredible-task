import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LoginProps} from 'routers/auth-layout';
import {images} from '../../../assets';
import {
  Button,
  CopyrightComponent,
  Input,
  KeyboardAvoidingComponent,
  Paragraph,
} from '/components';
import {Colors} from '/constants';
import {useLogin} from '/hooks';

const Login = ({navigation}: LoginProps): React.JSX.Element => {
  const {bottom} = useSafeAreaInsets();
  const {values, errors, handleChange, handleSubmit} = useLogin();
  return (
    <>
      <KeyboardAvoidingComponent>
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
            />
            <Input
              value={values.password}
              errorText={errors.password}
              onChangeText={handleChange('password')}
              label="Password"
              hidePassword
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => handleSubmit()} buttonStyle={styles.button}>
              <Paragraph color={Colors.background} size={18} weight={'600'}>
                Login
              </Paragraph>
            </Button>
            <Paragraph size={18} style={styles.text}>
              Don't have an account?{' '}
              <Paragraph
                size={16}
                onPress={() => navigation.navigate('Register')}
                weight={'600'}
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
});
