import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { CustomText } from './CustomText';

import Gradient from '@/assets/nav/gradient.svg';
import topImage from '@/assets/nav/vegetal.png';
import BackSVG from '@/assets/icons/back.svg';

const width = Dimensions.get('screen').width;
const STANDARD_HEIGHT = 270;

export function Top({ title, image = topImage, height = STANDARD_HEIGHT }) {
  const styles = stylesFunction(height);
  const navigation = useNavigation();
  return (
    <>
      <Image source={image} style={styles.top} />
      <Gradient
        width={width}
        height={(130 / 360) * width}
        style={styles.gradient}
      />
      <CustomText style={styles.title}>{title}</CustomText>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backButton}
      >
        <BackSVG color="white" style={styles.goBack} />
      </TouchableOpacity>
    </>
  );
}

const stylesFunction = (height) =>
  StyleSheet.create({
    top: {
      width: '100%',
      height: height,
    },
    gradient: {
      position: 'absolute',
    },
    title: {
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 16,
    },
    backButton: {
      position: 'absolute',
      padding: 17,
    },
    goBack: {
      width: 24,
      height: 24,
    },
  });
