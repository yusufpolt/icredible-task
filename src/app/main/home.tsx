import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Button, Paragraph} from '/components';
import {useAuthenticationAction, useAuthenticationStore} from 'store/auth';
import {Colors} from '/constants';

const Home = () => {
  const user = useAuthenticationStore(state => state.user);
  const {userLogout} = useAuthenticationAction();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Paragraph size={30}>Welcome {user.username || 'User'}</Paragraph>
        <Button onPress={() => userLogout()} buttonStyle={styles.button}>
          <Paragraph color={Colors.background} size={18} weight={'600'}>
            Logout
          </Paragraph>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 12,
  },
});
