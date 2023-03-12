import { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Producer } from './components/Producer';
import { Top } from './components/Top';

import { useProducers } from '@/hooks/useProducers';
import { useTexts } from '@/hooks/useTexts';

export function Producers({ bestProducers }) {
  const navigation = useNavigation();
  const route = useRoute();

  const [displayMessage, setDisplayMessage] = useState(false);

  const list = useProducers(bestProducers);
  const { titleProducers, buyMessage } = useTexts();

  const namePurchase = route.params?.compra.nome;
  const timestampPurchase = route.params?.compra.timestamp;
  const completeMessage = buyMessage?.replace('$NOME', namePurchase);

  useEffect(() => {
    setDisplayMessage(!!namePurchase);

    let timeout;
    if (namePurchase) {
      timeout = setTimeout(() => {
        setDisplayMessage(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [timestampPurchase]);

  const TopList = () => {
    return (
      <>
        <Top bestProducers={bestProducers} />

        {displayMessage && (
          <Text style={styles.purchase}>{completeMessage}</Text>
        )}

        <Text style={styles.title}>{titleProducers}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <Producer
          {...item}
          onPress={() => {
            navigation.navigate('Producer', item);
          }}
        />
      )}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={TopList}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  purchase: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16,
    lineHeight: 26,
  },
});
