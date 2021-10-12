import React from 'react';
import {
View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FooterBackground from '../../../../components/FooterBackground/FooterBackground';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';

import { TWO_FACTOR_AUTH } from '../../../../../constants/navigation/authenticationScreens';

import { KNOW_YOUR_CUSTOMER } from '../../../../../constants/navigation/userScreens';

import { MAIN_SCREN_2FA } from '../../../../../constants/navigation/twoFactorAuth';

import CurlyLineImage from '../../../../../assets/svgs/CurlyLineImage';

import styles from './HomeScreen.styles';
import colors from '../../../../../styles/colors';

export default function LoanInfo({ navigation }) {
    const TWOFA = () => {
        navigation.navigate(TWO_FACTOR_AUTH);
    };

    const KYC = () => {
        navigation.navigate(KNOW_YOUR_CUSTOMER);
    };

  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <CurlyLineImage style={{ ...styles.imageTop }} />
      <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: 'white', height: 400, paddingTop: 50 }}>
          <DefaultButton title="KYC" onPress={() => KYC()} />
          <View style={{ backgroundColor: 'white', height: 30 }} />
          <DefaultButton title="2FA" onPress={() => TWOFA()} />
        </View>
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
