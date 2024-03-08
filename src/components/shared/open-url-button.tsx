import React, {FC, useCallback} from 'react';
import {Alert, Linking} from 'react-native';

import Paragraph, {ParagraphProps} from '../lib/paragraph';

type OpenURLButtonProps = ParagraphProps & {
  url: string;
};

const OpenURLButton: FC<OpenURLButtonProps> = ({
  url,
  children,
  ...props
}): React.JSX.Element => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Paragraph
      textStyle={{textAlign: 'center'}}
      size={12}
      {...props}
      onPress={handlePress}>
      {children}
    </Paragraph>
  );
};

export default OpenURLButton;
