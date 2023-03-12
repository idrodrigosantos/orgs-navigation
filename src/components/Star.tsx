import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

import greenStar from '@/assets/icons/green-star.png';
import grayStar from '@/assets/icons/gray-star.png';

interface StarProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  disabled: boolean;
  filled: boolean;
  bigStar: boolean;
}

export function Star({
  onPress,
  disabled = true,
  filled,
  bigStar = false,
}: StarProps) {
  const styles = stylesFunction(bigStar);

  const getImage = () => {
    if (filled) {
      return greenStar;
    }
    return grayStar;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image source={getImage()} style={styles.estrela} />
    </TouchableOpacity>
  );
}

const stylesFunction = (bigStar: boolean) =>
  StyleSheet.create({
    estrela: {
      width: bigStar ? 36 : 12,
      height: bigStar ? 36 : 12,
      marginRight: 2,
    },
  });
