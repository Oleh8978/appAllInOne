import React, { useState } from 'react';
import { View, Image } from 'react-native';

import FooterBackground from '../../../components/FooterBackground/FooterBackground';

import mainFake from '../../../../assets/images/debitscreen.png';

import styles from './DebitCard.styles';

export default function DebitCard({ navigation }) {
  return (
    <View
      style={{ height: '100%', width: '100%', minHeight: '100%' }}
    >
      <Image style={{ height: '100%', width: '100%' }} source={mainFake} />
      <FooterBackground />
    </View>
  );
}
