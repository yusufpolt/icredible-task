import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useAuthenticationStore} from 'store/auth';
import {storage} from '/utils/storage';

const useAppRoute = () => {
  const route = useAuthenticationStore(state => state.route);
  const [storageRoute, setStorageRoute] = useState<string | any>('');

  const getStorageToken = async () => {
    const storageRoute = await storage.getItem('route');
    setStorageRoute(storageRoute);
  };
  getStorageToken();

  return {
    route,
    storageRoute,
  };
};

export default useAppRoute;
