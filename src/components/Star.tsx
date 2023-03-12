import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import grayStar from '@/assets/icons/gray-star.png';
import greenStar from '@/assets/icons/green-star.png';

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
      <Image source={getImage()} style={styles.start} />
    </TouchableOpacity>
  );
}

const stylesFunction = (bigStar: boolean) =>
  StyleSheet.create({
    start: {
      width: bigStar ? 36 : 12,
      height: bigStar ? 36 : 12,
      marginRight: 2,
    },
  });
