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
import CreditCardImage from '../../../../../assets/svgs/CreditCardImage';

import CurlyLineImage from '../../../../../assets/svgs/CurlyLineImage';

import styles from './LoanInfo.styles';
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

export default function LoanInfo({ navigation }) {
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
        topText="Loan"
      />
      <View style={styles.underHeader}>
        <Text style={styles.underHeaderTopText}>
          $25,004.59
        </Text>
        <Text style={styles.underHeaderBottomText}>
          Loan Available
        </Text>
        {/* <TouchableOpacity
         style={styles.mainBottomRight}
         onPress={() => {console.log('chistory')}}
        >
            <HistoryClockImage />
            <Text>
                Repay
            </Text>
        </TouchableOpacity> */}

        <View style={styles.mainBottom}>
          <TouchableOpacity
            style={styles.mainBottomLeft}
            onPress={() => { console.log('credit card'); }}
          >
            <CreditCardImage />
            <Text style={{fontFamily: 'Gotham Pro', }}>Borrow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainBottomRight}
            nPress={() => { console.log('chistory'); }}
          >
            <HistoryClockImage />
            <Text style={{fontFamily: 'Gotham Pro', }}>Repay</Text>
          </TouchableOpacity>
        </View>

      </View>
      <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>

        <CardListItem
          textLeft="Loan utilized"
          textRightTop="$20.10"
          textRightBottom="12.12.2021"
        />

        <CardListItem
          textLeft="Loan amount"
          textRightTop="$5000.00"
        />

        <CardListItem
          textLeft="Next Payment"
          textRightTop="$20.00"
          textRightBottom="12.12.2024"
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
