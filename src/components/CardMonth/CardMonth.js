import React from 'react';
import {
 View, Text, TouchableOpacity,
} from 'react-native';

import styles from './CardMonth.styles';
import colors from '../../../styles/colors';

export default function CardMonth({ data, func }) {
  return (
    <TouchableOpacity
      style={{
       ...styles.card,
       backgroundColor: data.type ? colors.lightBlue : colors.white,
       flexDirection: 'column',
      }}
      onPress={() => func(data)}
    >
      <Text style={{ ...styles.TopText, color: data.type ? colors.white : colors.darkBlue }}>
        {data.data}
      </Text>
      {data.subData ? (
        <Text style={{ ...styles.BottomText, color: data.type ? colors.white : colors.darkBlue }}>
          {data.subData}
        </Text>
) : <></>}

    </TouchableOpacity>
  );
}
