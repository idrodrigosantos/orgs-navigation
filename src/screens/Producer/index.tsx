import React from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Basket } from './components/Basket';
import { Top } from '@/components/Top';
import { useTexts } from '@/hooks/useTexts';
import topImage from '@/assets/producers/top.png';

export function Producer() {
  const route = useRoute();
  const { titleProducer, titleBasket } = useTexts();
  const { baskets, image, name } = route.params;

  const TopList = () => {
    return (
      <>
        <Top title={titleProducer} image={topImage} height={150} />
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image source={image} style={styles.producerImage} />
            <Text style={styles.producer}>{name}</Text>
          </View>

          <Text style={styles.baskets}>{titleBasket}</Text>
        </View>
      </>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={TopList}
      data={baskets}
      renderItem={({ item }) => <Basket {...item} producer={{ name, image }} />}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  producerImage: {
    width: 62,
    height: 62,
    marginTop: -23,
    borderRadius: 6,
  },
  producer: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  baskets: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
});
