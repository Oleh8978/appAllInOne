import React, { useState, useEffect } from 'react';

import {
 View, ScrollView, Image, Text, TouchableOpacity,
} from 'react-native';

import OTPInput from 'react-native-otp';
import Header from '../../../../components/Header/Header';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import { CONGRATS } from '../../../../../constants/navigation/twoFactorAuth';
import { TWO_FACTOR_AUTH } from '../../../../../constants/navigation/authenticationScreens';

import styles from './Code.styles';
import colors from '../../../../../styles/colors';

export default function Code({ navigation, route }) {
    const [code, setCode] = useState('');

  const moveForward = () => {
    if (route?.params?.type === 'credit') {
      navigation.navigate(TWO_FACTOR_AUTH,
        { screen: CONGRATS, params: { type: 'credit' } });
    }

    return navigation.navigate(TWO_FACTOR_AUTH,
      { screen: CONGRATS, params: { type: 'loan' } });
  };

  return (
    <View>
      <Header
        isBlue
        mainCustomStyle={{ backgroundColor: colors.white }}
        navigation={navigation}
      />
      <ScrollView style={styles.body}>
        {code.length === 6
                ? (
                  <Image
                    source={require('../../../../../assets/images/codeDone.png')}
                    style={styles.img}
                  />
)
                : (
                  <Image
                    source={require('../../../../../assets/images/twoAuth.png')}
                    style={styles.img}
                  />
)}
        <Text style={styles.mainHeader}>
          Easy Peasy
        </Text>
        <Text style={styles.subHeader}>
          Enter 6-digit code from your
          two-factor authentificator APP.
        </Text>
        <OTPInput
          value={code}
          onChange={setCode}
          tintColor={colors.lightBlue}
          offTintColor={colors.lightBlue}
          cellStyle={{ borderRadius: 8 }}
          otpLength={6}
        />
        <DefaultButton
          title={code.length < 6 ? `${6 - code.length } digits left ` : 'Next'}
          isArrowNext
          customStyles={{
                   marginTop: 30,
                }}
          disabled={code.length < 6}
          onPress={() => moveForward()}
        />
      </ScrollView>
      <FooterBackground />
    </View>
  );
}
