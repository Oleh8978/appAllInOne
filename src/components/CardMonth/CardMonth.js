import React from 'react';
import { View, Text } from 'react-native';

import styles from './CardMonth.styles';
import colors from '../../../styles/colors';

export default function CardMonth({ data }) {
  return (
    <View style={{ ...styles.card, backgroundColor: data.type === 'current' ? colors.lightBlue : colors.white, flexDirection: 'column' }}>
      <Text style={{ ...styles.TopText, color: data.type === 'current' ? colors.white : colors.darkBlue }}>
        {data.data}
      </Text>
      {data.subData ? (
        <Text style={{ ...styles.BottomText, color: data.type === 'current' ? colors.white : colors.darkBlue }}>
          {data.subData}
        </Text>
) : <></>}

    </View>
  );
}
