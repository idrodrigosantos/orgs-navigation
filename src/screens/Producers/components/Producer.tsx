import { useMemo } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { Stars } from '@/components/Stars';

const distanceInMeters = (distance) => {
  return `${distance}m`;
};

interface ProducerProps {
  name;
  image;
  distance;
  stars;
  onPress;
}

export function Producer({
  name,
  image,
  distance,
  stars,
  onPress,
}: ProducerProps) {
  const distanceText = useMemo(() => distanceInMeters(distance), [distance]);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} accessibilityLabel={name} />

      <View style={styles.information}>
        <View>
          <Text style={styles.name}>{name}</Text>

          <Stars amount={stars} />
        </View>
        <Text style={styles.distance}>{distanceText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    // Android
    elevation: 4,
    // iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});
