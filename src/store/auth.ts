import {storage} from 'utils/storage';
import {create} from 'zustand';

type UserType = {
  id: string;
  username: string;
  password: string;
};

type AuthenticationStore = {
  user: UserType;
  route: 'auth' | 'main';
  actions: {
    setUser: (value: UserType) => void;
    setRoute: (value: 'auth' | 'main') => void;
    userLogout: () => void;
  };
};

const handleSetUser = async (state: {}, set: any) => {
  await storage.saveItem('route', 'main');
  set({user: state, route: 'main'});
};

const handleLogout = async (set: any) => {
  await storage.saveItem('route', 'auth');
  set({user: {}, route: 'auth'});
};

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  user: {
    id: '',
    username: '',
    password: '',
  },
  route: 'auth',
  actions: {
    setRoute: state => set({route: state}),
    setUser: (state: UserType) => handleSetUser(state, set),
    userLogout: () => {
      handleLogout(set);
    },
  },
}));

export const useAuthenticationAction = () =>
  useAuthenticationStore(state => state.actions);
