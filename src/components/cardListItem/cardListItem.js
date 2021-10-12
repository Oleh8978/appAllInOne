import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Bitcoin from '../../../assets/svgs/Btc';
import EtherumCoin from '../../../assets/svgs/EtherumCoin';
import LiteCoin from '../../../assets/svgs/LiteCoin';
import USDCoin from '../../../assets/svgs/USDCoin';
import TrueUSDT from '../../../assets/svgs/TrueUSDT';

import styles from './cardListItem.styles';

import colors from '../../../styles/colors';

export default function CardListItem({ textLeft, textRightTop, textRightBottom, image }) {
    const coinImage = (type) => {
        switch (type) {
            case 'Bitcoin':
                return <Bitcoin style={{ marginRight: 25 }} />;
            case 'Etherum':
                return <EtherumCoin style={{ marginRight: 25 }} />;
            case 'Litecoin':
                return <LiteCoin style={{ marginRight: 25 }} />;
            case 'USD Coin':
                return <USDCoin style={{ marginRight: 25 }} />;
            case 'TrueUSD':
                return <TrueUSDT style={{ marginRight: 25 }} />;
            default:
                return <></>;
        }
    };

  return (
    <View style={styles.card}>
      <Text style={{ ...styles.leftText, width: 120 }}>
        {textLeft}
      </Text>
      {coinImage(image)}
      <View style={styles.rightContainer}>
        <Text style={styles.topTextRight}>
          {textRightTop}
        </Text>
        {textRightBottom ? (
          <Text style={styles.bottomTextRight}>
            {textRightBottom}
          </Text>
) : <></>}
      </View>
    </View>
  );
}
