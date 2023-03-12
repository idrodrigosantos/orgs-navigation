import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

interface CustomTextPros {
  children: ReactNode;
  style: any;
}

type customStyleProps = {
  fontWeight: 'normal' | 'bold';
};

export function CustomText({ children, style }: CustomTextPros) {
  let customStyle: customStyleProps = styles.text;

  if (style.fontWeight === 'bold') {
    customStyle = styles.boldText;
  }

  return <Text style={[style, customStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'normal',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
