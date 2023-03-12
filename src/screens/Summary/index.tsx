import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { useTexts } from '@/hooks/useTexts';

import BackSVG from '@/assets/icons/back.svg';
import success from '@/assets/nav/success.png';

export function Summary() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    buyMessage,
    topPurchase,
    titlePurchase,
    homeBuyButton,
    buyProducerButton,
  } = useTexts();

  const purchase = route.params.compra;
  const message = buyMessage?.replace('$NOME', purchase.nome);

  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.topBack}
          onPress={() => navigation.goBack()}
        >
          <BackSVG />
        </TouchableOpacity>

        <Text style={styles.topText}>{topPurchase}</Text>
      </View>

      <View style={styles.content}>
        <Image source={success} style={styles.success} />

        <View style={styles.textos}>
          <Text style={styles.title}>{titlePurchase}</Text>
          <Text style={styles.message}>{message}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={
              () =>
                navigation.popToTop() /* para mostrar mensagem na Home: navigation.navigate('HomeScreen', { compra }) */
            }
          >
            <Text style={styles.buttonText}>{homeBuyButton}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.producerButton]}
            onPress={() => navigation.pop(2)}
          >
            <Text style={[styles.buttonText, styles.producerButtonText]}>
              {buyProducerButton}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  top: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 58,

    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  topText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topBack: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
    top: 17,
  },
  content: {
    zIndex: 0,
  },
  success: {
    width: '100%',
    height: undefined,
    aspectRatio: 360 / 351,
  },
  textos: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  message: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  producerButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  producerButtonText: {
    color: '#464646',
  },
});
