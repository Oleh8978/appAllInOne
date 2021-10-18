import React, { useEffect, useState } from 'react';
import {
View, ScrollView, Text, Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PageHeader from '../../../components/PageHeader/PageHeader';
import FooterBackground from '../../../components/FooterBackground/FooterBackground';
import Card from '../../../components/Card/Card';

import CurlyLineImage from '../../../../assets/svgs/CurlyLineImage';

import fakeBody from '../../../../assets/images/EarnBody.png';

import styles from './Earn.styles';
import colors from '../../../../styles/colors';


export default function Earn({ navigation }) {

  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <CurlyLineImage style={{ ...styles.imageTop }} />
         <PageHeader text={'Earn Balance'} credit={'0.00'} isEarn/>
         <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>
           <Image source={fakeBody} style={{width: '100%', height: 518}}/>
         </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
