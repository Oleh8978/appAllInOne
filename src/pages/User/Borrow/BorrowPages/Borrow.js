import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PageHeader from '../../../../components/PageHeader/PageHeader';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';
import Card from '../../../../components/Card/Card';

import  CurlyLineImage from '../../../../../assets/svgs/CurlyLineImage';

import {
  BORROW,
  INFO,
  INFO_LOAN,
  INFO_CREDIT
} from '../../../../../constants/navigation/userScreens';

import styles from './Borrow.styles';
import colors from '../../../../../styles/colors';


const hardcodedData = [
  {
    header: 'Credit Line',
    amount: 20004.59,
    type: 'credit',
    nextPayment: {
      amount: 25.59,
      date: '25.09.2021'
    },
    cryptoAmount: {
      type: 'Bitcoin',
      short: 'BTC',
      amount: '1.00000000',
      equality: '50,009.10'
    }
  },
  {
    header: 'Loan 12 months',
    amount: 20004.59,
    type: 'loan',
    nextPayment: {
      amount: 25.59,
      date: '25.09.2021'
    },
    cryptoAmount: {
      type: 'Etherum',
      short: 'ETH',
      amount: '1.00000000',
      equality: '50,009.10'
    }
  }
]


export default function Borrow({navigation}) {

  const moveForward = (typeLine) => {
    navigation.navigate(BORROW, {screen: INFO, params: { type: typeLine } })
  }

  const moveForwardLineInfo = (type) => {
    navigation.navigate(BORROW, {screen: type === 'loan' ?  INFO_LOAN : INFO_CREDIT })
  }

  return (
    <LinearGradient 
     colors={[colors.darkGreen, colors.darkBlue]} 
     style={{height: '100%', width: '100%'}}
     start={{x: 0.0, y: 0.10}} end={{x: 1.0, y: 0.10}}
     >
       <CurlyLineImage style={{...styles.imageTop}}/>
       <PageHeader/>
       {hardcodedData.length < 0 ? 
       (
       <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>
          <Card headerText={'Credit Line'} onPress={() => moveForward('credit')}/>
          <Card headerText={'Loan'} typeOfInfo='loan' onPress={() => moveForward('loan')}/>
       </ScrollView>
       ) : (
       <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>

         <View style={styles.topContainer}>
           <Text style={styles.headerText}>
             Active credits and loans
           </Text>
           {hardcodedData.map(item => {
             return <Card data={item} onPress={() => moveForwardLineInfo(item.type)} key={Math.random()}/>
           })}
         </View>

         <View style={styles.bottomContainer}>
           <Text style={styles.headerText}>
             Add more credit lines or loans
           </Text>
          <Card headerText={'Credit Line'} onPress={() => moveForward('credit')}/>
          <Card headerText={'Loan'} typeOfInfo='loan' onPress={() => moveForward('loan')}/>
         </View>

       </ScrollView>
       )}
      <FooterBackground/>
    </LinearGradient>
  );
}
