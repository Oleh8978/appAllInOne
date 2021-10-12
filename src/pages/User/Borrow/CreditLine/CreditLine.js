import React from 'react';
import {
View, ScrollView, Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../../components/Header/Header';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import ResizebleCard from '../../../../components/ResizebleCard/ResizebleCard';
import colors from '../../../../../styles/colors';
import styles from './CreditLine.styles';

const staticData = [
    {
        type: 'Bitcoin',
        amount: '1.00000000',
        AvailableCredit: 25004.59,
        Short: 'BTC',
    },
    {
        type: 'Litecoin',
        amount: '1.00000000',
        AvailableCredit: 25004.59,
        Short: 'LTC',
    },
    {
        type: 'Etherum',
        amount: '1.00000000',
        AvailableCredit: 25004.59,
        Short: 'ETH',
    },
    {
        type: 'TrueUSD',
        amount: '1.00000000',
        AvailableCredit: 25004.59,
        Short: 'TUSD',
    },
    {
        type: 'USD Coin',
        amount: '1.00000000',
        AvailableCredit: 25004.59,
        Short: 'USDC',
    },
];

export default function CreditLine({ navigation }) {
  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <Header
        topText="Request credit Line"
        customStyles={{ marginLeft: 60, marginRight: 'auto' }}
        navigation={navigation}
      />
      <ScrollView
        style={{ ...styles.mainBody }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.mainTopHeader}>
          Your Loan-to-Value persentage:
        </Text>
        <View style={styles.mainTopPlate}>
          <Text style={styles.mainTopPlateHeader}>
            50%
          </Text>
          <Text style={styles.mainTopPlateSubHeader}>
            8.95% APR
          </Text>
        </View>
        <View style={styles.mainBottomPlate}>
          <Text style={styles.mainBottomPlateHeader}>
            Choose collateral wallet:
          </Text>
          {staticData.map((item) => <ResizebleCard data={item} key={Math.random()} navigation={navigation} />)}
        </View>
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
