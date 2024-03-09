import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Platform } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import AppLayout from './src/routers/app-layout';
import './src/server/index';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppLayout />
        <FlashMessage
          style={{marginTop: Platform.OS === 'android' ? 30 : 0, zIndex: 1000}}
          floating={Platform.OS === 'android'}
          position="top"
        />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
