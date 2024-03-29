import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RegisterProps} from 'routers/auth-layout';
import {images} from '../../../assets';
import {
  Button,
  CopyrightComponent,
  Input,
  KeyboardAvoidingComponent,
  Paragraph,
} from '/components';
import {Colors} from '/constants';
import {useRegister} from '/hooks';

const Register = ({navigation}: RegisterProps): React.JSX.Element => {
  const {bottom} = useSafeAreaInsets();
  const {values, errors, handleChange, handleSubmit, isPending} = useRegister();

  return (
    <>
      <KeyboardAvoidingComponent backgroundColor={Colors.background}>
        <View style={styles.container}>
          <Image style={styles.image} source={images.logo_icredible} />
          <View style={styles.headerContainer}>
            <Paragraph size={20} weight={'600'}>
              Register Now!
            </Paragraph>
            <Paragraph weight={'300'}>
              Enter your credentials to continue.
            </Paragraph>
          </View>
          <View style={styles.formContainer}>
            <Input
              value={values.username}
              label="Username"
              errorText={errors.username}
              onChangeText={handleChange('username')}
              placeholder="username"
            />
            <Input
              value={values.password}
              label="Password"
              hidePassword
              errorText={errors.password}
              onChangeText={handleChange('password')}
              placeholder="password"
            />
            <Input
              value={values.password_confirm}
              label="Password Confirm"
              hidePassword
              errorText={errors.password_confirm}
              onChangeText={handleChange('password_confirm')}
              placeholder="password confirm"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              loading={isPending}
              onPress={() => handleSubmit()}
              buttonStyle={styles.button}>
              <Paragraph color={Colors.background} size={18} weight={'600'}>
                Register
              </Paragraph>
            </Button>
            <Paragraph size={18} textStyle={styles.text}>
              Do you have an account?{' '}
              <Paragraph
                size={18}
                onPress={() => navigation.navigate('Login')}
                weight={'600'}
                color={Colors.orange}>
                Login
              </Paragraph>
            </Paragraph>
          </View>
        </View>
      </KeyboardAvoidingComponent>
      <View style={(styles.footerContainer, {marginBottom: bottom})}>
        <CopyrightComponent />
      </View>
    </>
  );
};

export default Register;

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
    alignItems: 'center',
  },
});
