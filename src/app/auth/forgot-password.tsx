import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {images} from '../../../assets';
import {
  Button,
  CopyrightComponent,
  Input,
  KeyboardAvoidingComponent,
  Paragraph,
} from '/components';
import {Colors} from '/constants';
import {ForgetPasswordProps} from 'routers/auth-layout';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ForgotPassword = ({
  navigation,
}: ForgetPasswordProps): React.JSX.Element => {
  const {bottom} = useSafeAreaInsets();
  return (
    <>
      <KeyboardAvoidingComponent backgroundColor={Colors.background}>
        <View style={styles.container}>
          <Image style={styles.image} source={images.logo_icredible} />
          <View style={styles.headerContainer}>
            <Paragraph size={20} weight={'600'}>
              Recover your account
            </Paragraph>
            <Paragraph weight={'300'}>
              Enter your username below to reset password.
            </Paragraph>
          </View>
          <View style={styles.formContainer}>
            <Input label="Username" placeholder="username" />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigation.navigate('Login')}
              buttonStyle={styles.button}>
              <Paragraph color={Colors.background} size={18} weight={'600'}>
                Send request
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
    </>
  );
};

export default ForgotPassword;

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
