import {storage} from 'utils/storage';
import {create} from 'zustand';

type UserType = {
  username: string;
  password: string;
  service: string;
  storage: string;
};

type AuthenticationStore = {
  user: UserType;
  route: string;
  verify_code_modal: boolean;
  actions: {
    setUser: (value: UserType) => void;
    setVerifyUser: () => void;
    setRoute: (value: string) => void;
    userLogout: () => void;
    setVeriyCodeModal: (value: boolean) => void;
  };
};

const handleSetUser = (state: any, set: any) => {
  set({user: state});
};

const handleLogout = (set: any) => {
  storage.setItem('route', 'auth');
  set({user: {}, route: 'auth'});
};

const handleVerifyUser = (set: any) => {
  storage.setItem('route', 'main');
  set({route: 'main'});
};

const getRoute = storage.getItem('route');

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  user: {
    username: '',
    password: '',
    service: '',
    storage: '',
  },
  route: getRoute || 'auth',
  verify_code_modal: false,
  actions: {
    setRoute: state => set({route: state}),
    setVerifyUser: () => {
      handleVerifyUser(set);
    },
    setUser: (state: UserType) => handleSetUser(state, set),
    userLogout: () => {
      handleLogout(set);
    },
    setVeriyCodeModal: state => set({verify_code_modal: state}),
  },
}));

export const useAuthenticationAction = () =>
  useAuthenticationStore(state => state.actions);
