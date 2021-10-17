import React from 'react';
import {
 View, ScrollView, Image, Text, TouchableOpacity,
} from 'react-native';

import Header from '../../../../components/Header/Header';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import { LIST_SCREN_2FA } from '../../../../../constants/navigation/twoFactorAuth';
import { TWO_FACTOR_AUTH } from '../../../../../constants/navigation/authenticationScreens';

import { USER } from '../../../../../constants/navigation/navigators';
import { HOME, HOME_PAGE } from '../../../../../constants/navigation/userScreens';

import styles from './Main.styles';

export default function Main({ navigation }) {
  return (
    <View style={{ ...styles.main }}>
      <Header isBlue navigation={navigation} />
      <ScrollView
        style={{ ...styles.body }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Image source={require('../../../../../assets/images/biometricImage.png')} style={styles.img} />
        <Text style={styles.headerMain}>
          Turn on 2-Factor Authentication
        </Text>
        <Text style={styles.subHeader}>
          Go beyond the password and protect yourself from hackers and account takeovers.
        </Text>
        <DefaultButton title="Next" isArrowNext onPress={() => navigation.navigate(TWO_FACTOR_AUTH, { screen: LIST_SCREN_2FA })} />
        <TouchableOpacity 
         style={styles.skipContainer} 
         onPress={() => { navigation.navigate(USER,
        { screen: HOME_PAGE, params: { screen: HOME } });
         }}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </ScrollView>
      <FooterBackground />
    </View>
  );
}
