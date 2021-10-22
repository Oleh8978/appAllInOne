import React, {
    useEffect, useState, useCallback, useReducer,
  } from 'react';

import {
 View, Text, TouchableOpacity, Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BTC from '../../../assets/svgs/Btc';
import LTC from '../../../assets/svgs/LiteCoin';
import ETH from '../../../assets/svgs/Eth';

import FakeBTCChart from '../../../assets/svgs/FakeBTCChart';
import FakeETHChart from '../../../assets/svgs/FakeETHChart';

import styles from './CardChart.styles';
import colors from '../../../styles/colors';

const CardChard = ({ data }) => {
    const [clikced, setClicked] = useState(false);

    const coins = (type) => {
        switch (type) {
            case 'BTC':
                return <BTC />;
            case 'LTC':
                return <LTC />;
            case 'ETH':
                return <ETH style={{ marginTop: 5 }} />;
        }
    };

    const image = (type) => {
        switch (type) {
            case 'BTC':
                return <FakeBTCChart style={styles.image} />;
            case 'LTC':
                return <FakeETHChart style={styles.image} />;
            case 'ETH':
                return (
                  <View style={{ height: 50 }}>
                    <FakeETHChart style={styles.image} />
                  </View>
);
        }
    };

    return (
      <View style={styles.container}>
        <View style={styles.firstRow}>
          {coins(data.type)}
          {image(data.type)}
        </View>
        <Text style={styles.textUnder}>
          {data.name}
        </Text>
        <View style={styles.containerBottom}>
          <Text style={styles.leftText}>
            {data.price}
          </Text>
          <Text style={styles.rightText}>
            {data.percentage}
          </Text>
        </View>
      </View>
    );
};

export default CardChard;
