import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthLayout from './auth-layout';
import MainBottomTabsLayout from './main-bottom-tabs_layout';
import {useAppRoute} from '/hooks';
import {useAuthenticationAction} from 'store/auth';
import {useFocusEffect} from '@react-navigation/native';
import {useEffect} from 'react';

type AppStackParamList = {
  AuthLayout: undefined;
  MainLayout: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppLayout = () => {
  const {storageRoute, route} = useAppRoute();
  const {setRoute} = useAuthenticationAction();

  useEffect(() => {
    if (storageRoute !== null) {
      setRoute(storageRoute);
      return;
    }
  }, [storageRoute]);

  const APP_STACK: any = {
    main: <Stack.Screen name="MainLayout" component={MainBottomTabsLayout} />,
    auth: <Stack.Screen name="AuthLayout" component={AuthLayout} />,
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {APP_STACK[route || 'main']}
    </Stack.Navigator>
  );
};

export default AppLayout;
