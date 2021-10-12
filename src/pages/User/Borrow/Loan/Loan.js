import React from 'react';
import {
View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../../components/Header/Header';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';
import ResizebleCard from '../../../../components/ResizebleCard/ResizebleCard';
import CardMonth from '../../../../components/CardMonth/CardMonth';

import CurlyLineImage from '../../../../../assets/svgs/CurlyLineImage';

import styles from './Loan.styles';
import colors from '../../../../../styles/colors';

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

const data = [
  {
    data: '6 month',
    type: 'current',
  },
  {
    data: '6 month',
    type: '',
  },
  {
    data: '24 month',
    type: '',
  },
];

const data2 = [
  {
    data: '25%',
    subData: '2% APR',
    type: 'current',
  },
  {
    data: '35%',
    subData: '8% APR',
    type: '',
  },
  {
    data: '50%',
    subData: '12% APR',
    type: '',
  },
];

export default function Loan({ navigation }) {
  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <CurlyLineImage style={{ ...styles.imageTop }} />
      <Header
        navigation={navigation}
        topText="Request for loan"
      />
      <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.textHeader}>
          Choose term for loan
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {data.map((item) => <CardMonth data={item} key={Math.random()} />)}
        </View>
        <Text style={styles.textHeader}>
          Your Loan-to-Value persentage:
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {data2.map((item) => <CardMonth data={item} key={Math.random()} />)}
        </View>
        <View style={styles.mainBottomPlate}>
          <Text style={styles.textHeader}>
            Choose collateral wallet:
          </Text>
          {staticData.map((item) => <ResizebleCard data={item} key={Math.random()} navigation={navigation} typeCard="loan" />)}
        </View>
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
