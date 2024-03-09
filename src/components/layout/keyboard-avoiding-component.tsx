import React, {FC} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type KeyboardAvoidingComponentProps = {
  children: JSX.Element[] | JSX.Element;
  backgroundColor?: string;
};

const KeyboardAvoidingComponent: FC<KeyboardAvoidingComponentProps> = ({
  children,
  backgroundColor,
}): React.JSX.Element => {
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardAvoidingComponent;
