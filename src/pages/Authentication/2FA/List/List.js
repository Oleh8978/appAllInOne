import React from 'react';

import { ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../../components/Header/Header';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import { CODE_SCREN_2FA } from '../../../../../constants/navigation/twoFactorAuth';
import { TWO_FACTOR_AUTH } from '../../../../../constants/navigation/authenticationScreens';

import colors from '../../../../../styles/colors';
import styles from './List.styles';

export default function List({ navigation }) {
  return (
    <LinearGradient colors={[colors.lightBlue, colors.darkBlue]} style={styles.main}>
      <Header
        isBlue={false}
        topText="2-step Verification"
        navigation={navigation}
      />
      <ScrollView style={styles.body}>
        <Text style={styles.headerText}>
          Choose
          2-Factor Authentication
        </Text>
        <Text style={styles.subHeader}>
          With 2-Step Verification, you add an extra layer of security to your account in case your password is stolen.
        </Text>
        <DefaultButton
          title="Use Phone"
          isArrowNext
          customStyles={{ marginTop: 15 }}
          onPress={() => navigation.navigate(TWO_FACTOR_AUTH,
                { screen: CODE_SCREN_2FA, params: { type: 'phone' } })}
        />
        <DefaultButton
          title="Use Google"
          isArrowNext
          customStyles={{ marginTop: 15 }}
          onPress={() => navigation.navigate(TWO_FACTOR_AUTH,
                 { screen: CODE_SCREN_2FA, params: { type: 'google' } })}
        />
        <DefaultButton
          title="Use Authy"
          isArrowNext
          customStyles={{ marginTop: 15 }}
          onPress={() => navigation.navigate(TWO_FACTOR_AUTH,
                 { screen: CODE_SCREN_2FA, params: { type: 'authy' } })}
        />
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
