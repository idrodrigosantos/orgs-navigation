import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface CustomTextPros {
  children: any;
  style: any;
}

export function CustomText({ children, style }: CustomTextPros) {
  let customStyle = styles.text;

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
