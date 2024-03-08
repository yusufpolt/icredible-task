import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthLayout from './auth-layout';
import MainBottomTabsLayout from './main-bottom-tabs_layout';

type AppStackParamList = {
  AuthLayout: undefined;
  MainLayout: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppLayout = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthLayout" component={AuthLayout} />
      <Stack.Screen name="MainLayout" component={MainBottomTabsLayout} />
    </Stack.Navigator>
  );
};

export default AppLayout;
