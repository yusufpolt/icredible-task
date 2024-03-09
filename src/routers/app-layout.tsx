import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuthenticationStore} from 'store/auth';
import AuthLayout from './auth-layout';
import MainBottomTabsLayout from './main-bottom-tabs_layout';

type AppStackParamList = {
  AuthLayout: undefined;
  MainLayout: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppLayout = () => {
  const route = useAuthenticationStore(state => state.route);

  const APP_STACK: any = {
    main: <Stack.Screen name="MainLayout" component={MainBottomTabsLayout} />,
    auth: <Stack.Screen name="AuthLayout" component={AuthLayout} />,
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {APP_STACK[route]}
    </Stack.Navigator>
  );
};

export default AppLayout;
