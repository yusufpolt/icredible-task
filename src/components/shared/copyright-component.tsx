import React from 'react';
import {StyleSheet} from 'react-native';
import Paragraph from '../lib/paragraph';

import OpenURLButton from './open-url-button';
import {Colors} from '/constants';

const CopyrightComponent = (): React.JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <OpenURLButton url="https://icredible.com" color={Colors.text}>
      Copyright ©{year}. iCredible Technology All Rights Reserved
    </OpenURLButton>
  );
};

export default CopyrightComponent;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
