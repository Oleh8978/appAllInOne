import React, { useEffect, useState } from 'react';
import {
View, ScrollView, Text, Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PageHeader from '../../../../components/PageHeader/PageHeader';
import Card from '../../../../components/Card/Card';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import {
  EARN_DEPOSIT
} from '../../../../../constants/navigation/userScreens'

import CurlyLineImage from '../../../../../assets/svgs/CurlyLineImage';

import styles from './Earn.styles';
import colors from '../../../../../styles/colors';

export default function Earn({ navigation }) {
  const [isWithdraw, setIsWithdraw] = useState(true);

  const moveForward = (typeLine) => {
    navigation.navigate(EARN_DEPOSIT, { params: { type: typeLine } });
  };

  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <CurlyLineImage style={{ ...styles.imageTop }} />
      <PageHeader 
       text="Earn Balance" 
       credit="0.00" 
       isEarn
       isWithdraw 
       />
      <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>
        <Card typeOfInfo="flexible deposit" onPress={() => moveForward('credit')} />
        <Card typeOfInfo="long term deposit" onPress={() => moveForward('credit')} />
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
