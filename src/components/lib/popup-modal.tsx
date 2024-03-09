import KeyboardAvoidingComponent from '../layout/keyboard-avoiding-component';
import React, {FC, useEffect} from 'react';
import {
  Keyboard,
  Modal,
  ModalProps,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export type PopupModalProps = ModalProps & {
  isVisible: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
};

const PopupModal: FC<PopupModalProps> = ({
  children,
  onDismiss,
  isVisible,
  ...props
}) => {
  useEffect(() => {
    if (!isVisible) Keyboard.dismiss();
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <Modal {...props} animationType="slide" transparent visible={isVisible}>
      <KeyboardAvoidingComponent>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={onDismiss}>
            <View style={[styles.backdrop]} />
          </TouchableWithoutFeedback>
          {children}
        </View>
      </KeyboardAvoidingComponent>
    </Modal>
  );
};

export default PopupModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
});
