import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logo from '@/assets/nav/logo.png';
import { useTexts } from '@/hooks/useTexts';

export function Top({ bestProducers }) {
  const { welcome, subtitle, subtitleBestProducers } = useTexts();

  return (
    <>
      <View style={styles.top}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.welcome}>{bestProducers ? '' : welcome}</Text>
        <Text style={styles.subtitle}>
          {bestProducers ? subtitleBestProducers : subtitle}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  purchase: {
    backgroundColor: '#EAF5F3',
    padding: 16,
  },
  purchaseMessage: {
    fontSize: 16,
    lineHeight: 26,
    color: '#464646',
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});
