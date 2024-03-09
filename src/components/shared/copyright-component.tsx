import React from 'react';
import {StyleSheet} from 'react-native';
import OpenURLButton from './open-url-button';
import {Colors} from '/constants';
import Paragraph from '../lib/paragraph';

const CopyrightComponent = (): React.JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <OpenURLButton url="https://icredible.com" color={Colors.text}>
      Copyright ©{year}.{' '}
      <Paragraph weight={'500'} color={'#000'}>
        iCredible Technology
      </Paragraph>{' '}
      All Rights Reserved
    </OpenURLButton>
  );
};

export default CopyrightComponent;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
