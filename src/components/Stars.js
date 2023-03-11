import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Star from './Star';

export default function Stars({
  amount: originalAmount,
  editable = false,
  bigStar = false,
}) {
  const [amount, setAmount] = useState(originalAmount);

  const RenderStars = () => {
    const starsList = [];
    for (let i = 0; i < 5; i++) {
      starsList.push(
        <Star
          key={i}
          onPress={() => setAmount(i + 1)}
          disabled={!editable}
          filled={i < amount}
          bigStar={bigStar}
        />
      );
    }

    return starsList;
  };

  return (
    <View style={styles.stars}>
      <RenderStars />
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
});
