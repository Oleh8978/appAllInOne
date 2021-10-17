import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import ArrowNext from '../../../assets/svgs/ArrovNext';

import styles from './posibilityCard.styles';

function PosibilityCard({
  data = {},
  onPress = () => {},
}) {
  return (
    <TouchableOpacity style={styles.main} onPress={() => {}}>
      <Image source={data.image} style={styles.image} />
      <View style={{ flexDirection: 'column', width: 170 }}>
        <Text style={styles.textTop}>
          {data.name}
        </Text>
        <Text style={styles.textBottom}>
          {data.text}
        </Text>
      </View>
      <ArrowNext />
    </TouchableOpacity>
  );
}

export default PosibilityCard;
