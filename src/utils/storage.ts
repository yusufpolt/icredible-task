import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  async saveItem(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error: any) {
      console.error('Error Save Item AsyncStorage: ', error.message);
    }
  },

  async getItem(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error: any) {
      console.error('Error Get Item AsyncStorage : ', error.message);
      return null;
    }
  },

  async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error: any) {
      console.error('Error Remove Item AsyncStorage : ', error.message);
    }
  },
};
