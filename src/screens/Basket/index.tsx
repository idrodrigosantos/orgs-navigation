import { FlatList, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Details } from './components/Details';
import { Item } from './components/Item';

import { CustomText } from '@/components/CustomText';
import { Top } from '@/components/Top';
import { useTexts } from '@/hooks/useTexts';

export function Basket() {
  const route = useRoute();
  const { topBasket, titleItems } = useTexts();

  const { details, items, producer } = route.params;

  return (
    <>
      <FlatList
        data={items}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Top title={topBasket} />
              <View style={styles.basket}>
                <Details {...details} producer={producer} />
                <CustomText style={styles.title}>{titleItems}</CustomText>
              </View>
            </>
          );
        }}
        style={styles.list}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
