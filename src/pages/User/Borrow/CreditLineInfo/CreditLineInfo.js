import React from 'react';
import {
View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../../components/Header/Header';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';
import CardListItem from '../../../../components/cardListItem/cardListItem';
import TransActionListItem from '../../../../components/transactionListCard/transactionListCard';

import HistoryClockImage from '../../../../../assets/svgs/HistoryClockImage';

import CurlyLineImage from '../../../../../assets/svgs/CurlyLineImage';

import styles from './CreditLineInfo.styles';
import colors from '../../../../../styles/colors';

const transactions = [
    {
        amount: '$25.00',
        equality: '0.0001 BTC',
        time: 'Today, 10:33',
        typeTr: 'Interest',
    },
    {
        amount: '$25.00',
        equality: '0.0001 BTC',
        time: 'Today, 10:33',
        typeTr: 'Repayment',
    },
    {
        amount: '$25.00',
        equality: '0.0001 BTC',
        time: 'Today, 10:33',
        typeTr: 'Withdraw',
    },

];

export default function CreditLineInfo({ navigation }) {
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
        topText="Credit line details"
      />
      <View style={styles.underHeader}>
        <Text style={styles.underHeaderTopText}>
          $25,004.59
        </Text>
        <Text style={styles.underHeaderBottomText}>
          Credit utilized
        </Text>
        <TouchableOpacity
          style={styles.mainBottomRight}
          onPress={() => { console.log('chistory'); }}
        >
          <HistoryClockImage />
          <Text>
            Repay
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>

        <CardListItem
          textLeft="Next estimated payment"
          textRightTop="$20.10"
          textRightBottom="12.12.2021"
        />

        <CardListItem
          textLeft="LTV / APR"
          textRightTop="50% LTV"
          textRightBottom="8,95% APR"
        />

        <CardListItem
          textLeft="Cryptocurrency collateral"
          image="Bitcoin"
          textRightTop="BTC 1.000000"
          textRightBottom="$50,009.10"
        />

        <CardListItem
          textLeft="Credit line"
          textRightTop="show code"
        />

        <Text style={styles.transactionsHeader}>
          Transactions
        </Text>
        <View style={{ marginBottom: 100 }}>
          {transactions.map((item) => <TransActionListItem data={item} key={Math.random()} />)}
        </View>
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
