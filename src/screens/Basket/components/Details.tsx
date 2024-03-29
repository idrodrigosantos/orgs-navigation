import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomText } from '@/components/CustomText';
import { useTexts } from '@/hooks/useTexts';

interface DetailsProps {
  name: string;
  description: string;
  producer: any;
  price: string;
}

export function Details({ name, description, price, producer }: DetailsProps) {
  const navigation = useNavigation();
  const { buyButton } = useTexts();

  return (
    <>
      <CustomText style={styles.name}>{name}</CustomText>

      <View style={styles.farm}>
        <Image source={producer.image} style={styles.farmImage} />

        <CustomText style={styles.nameFarm}>{producer.name}</CustomText>
      </View>

      <CustomText style={styles.description}>{description}</CustomText>

      <CustomText style={styles.price}>{price}</CustomText>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Summary', {
            purchase: { name, timestamp: +new Date() },
          })
        }
      >
        <CustomText style={styles.buttonText}>{buyButton}</CustomText>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
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
});
