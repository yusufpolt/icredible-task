import PopupModal from 'components/lib/popup-modal';
import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {images} from '../../../assets';
import Button from '../lib/button';
import Paragraph from '../lib/paragraph';
import {Colors} from '/constants';
import {useVerifyCode} from 'hooks';

type CodeVerifyModalProps = {
  isVisible: boolean;
  onDismiss: (isVisible: boolean) => void;
};

const CELL_COUNT = 6;

const CodeVerifyModal: FC<CodeVerifyModalProps> = ({isVisible, onDismiss}) => {
  const {values, errors, handleSubmit, setFieldValue, loading} =
    useVerifyCode();
  const [value, setValue] = useState(values.verify_code);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleSetValue = (text: string) => {
    setValue(text);
    setFieldValue('verify_code', text);
  };

  return (
    <PopupModal isVisible={isVisible} onDismiss={() => onDismiss(false)}>
      <View style={styles.container}>
        <Image style={styles.image} source={images.logo_icredible} />
        <View style={styles.headerContainer}>
          <Paragraph size={20} weight={'600'}>
            Code Verification
          </Paragraph>
          <Paragraph weight={'300'}>Enter a random 6 digit code.</Paragraph>
        </View>
        <View style={styles.codeContainer}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={text => handleSetValue(text)}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Paragraph
            size={12}
            color={Colors.orange}
            textStyle={{position: 'absolute', bottom: -20}}>
            {errors.verify_code}
          </Paragraph>
        </View>
        <Button
          loading={loading}
          onPress={() => handleSubmit()}
          buttonStyle={styles.button}>
          <Paragraph color={Colors.background} size={18} weight={'600'}>
            Verify
          </Paragraph>
        </Button>
        <Paragraph size={18} style={styles.text}>
          No code received?{' '}
          <Paragraph size={16} weight={'600'} color={Colors.orange}>
            Resend
          </Paragraph>
        </Paragraph>
      </View>
    </PopupModal>
  );
};

export default CodeVerifyModal;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    height: 360,
    borderRadius: 10,
    backgroundColor: Colors.background,
    padding: 20,
    justifyContent: 'center',
    gap: 24,
  },
  headerContainer: {
    gap: 6,
  },
  image: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  codeContainer: {
    marginBottom: 6,
  },
  codeFieldRoot: {},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 42,
    fontSize: 26,
    borderWidth: 2,
    borderColor: Colors.gray,
    borderRadius: 10,
    textAlign: 'center',
    color: Colors.text,
  },
  focusCell: {
    borderColor: Colors.orange,
  },
  button: {
    height: 50,
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
    color: Colors.text,
  },
});
