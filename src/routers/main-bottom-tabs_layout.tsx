import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '/app';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type BottomTabsParamList = {
  Home: undefined;
};

export type HomeProps = NativeStackScreenProps<BottomTabsParamList, 'Home'>;

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const MainBottomTabsLayout = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default MainBottomTabsLayout;
