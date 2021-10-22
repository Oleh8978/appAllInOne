import React, { useState } from 'react';
import {
View, Image, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FooterBackground from '../../../components/FooterBackground/FooterBackground';

import PageHeader from '../../../components/PageHeader/PageHeader';

import styles from './Trade.styles';
import colors from '../../../../styles/colors';

export default function Trade({ navigation }) {
  return (
    <LinearGradient
      style={{ height: '100%', width: '100%', minHeight: '100%' }}
      colors={[colors.darkGreen, colors.darkBlue]}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <PageHeader
        text="Available Balance"
        centerType="trade"
        stylesMainblock={{ height: 100 }}
        isTrade
        isHomeScreen={false}
      />
      <Image source={require('../../../../assets/images/placeHold.png')} style={{ width: '100%', height: 72, marginBottom: 20 }} />
      <ScrollView
        style={styles.mainWrapper}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      >
        <Image
          source={require('../../../../assets/images/bodyTrade.png')}
          style={{ width: '100%', height: 600 }}
        />
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
