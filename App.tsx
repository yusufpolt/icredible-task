import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppLayout from './src/routers/app-layout';

const App = () => {
  return (
    <NavigationContainer>
      <AppLayout />
    </NavigationContainer>
  );
};

export default App;
