import axiosInstance from 'utils/axios-instance';

export const handleLogin = async (username: string, password: string) => {
  try {
    const response = await axiosInstance.post('/api/login', {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error: any) {
    return Promise.reject(error.message);
  }
};

export const handleRegister = async (username: string, password: string) => {
  try {
    const response = await axiosInstance.post('/api/register', {
      username,
      password,
    });
    return response.data;
  } catch (error: any) {
    return Promise.reject(error.message);
  }
};
