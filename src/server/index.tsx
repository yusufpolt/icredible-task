import {Model, createServer} from 'miragejs';
import * as Keychain from 'react-native-keychain';

type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
  token: string;
};

const users: UserType[] = [
  {
    id: 1,
    username: 'yusuf',
    email: 'yusufpolatdev@gmail.com',
    password: '123456789',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ5dXN1ZiIsImVtYWlsIjoieXVzdWZwb2xhdGRldkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4OSJ9.X-27v7QhqN6wlGwFd5gpFmMB0tU5rvI863CDbjS_3kQ',
  },
  {
    id: 2,
    username: 'admin',
    email: 'admin@icredible.com',
    password: '123456789',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AaWNyZWRpYmxlLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5In0.QJfT4LIV4StMABlGIfDFfPrIRdMsfDvBvhZOcicTMko',
  },
];

createServer({
  models: {
    user: Model,
  },
  routes() {
    this.namespace = 'api';

    this.post('/register', async (schema: any, request) => {
      let attrs = await JSON.parse(request.requestBody);
      let existingUser = schema.users.findBy({username: attrs.username});
      if (existingUser) {
        return {error: 'User already exists'};
      }
      if (attrs) {
        await Keychain.setGenericPassword(attrs.username, attrs.password);
      }
      return schema.create('user', attrs);
    });

    this.post('/login', async (schema: any, request) => {
      let attrs = await JSON.parse(request.requestBody);
      let {username, password} = attrs;
      let user = await schema.users.findBy({username, password});
      if (user) {
        const credentials = await Keychain.getGenericPassword();
        return {credentials: credentials};
      } else {
        return {error: 'Invalid credentials'};
      }
    });
  },
});
