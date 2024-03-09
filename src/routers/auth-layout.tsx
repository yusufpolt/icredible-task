import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {ForgotPassword, Login, Register} from '/app';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};
export type LoginProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;
export type RegisterProps = NativeStackScreenProps<
  AuthStackParamList,
  'Register'
>;

export type ForgetPasswordProps = NativeStackScreenProps<
  AuthStackParamList,
  'ForgotPassword'
>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthLayout = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthLayout;
