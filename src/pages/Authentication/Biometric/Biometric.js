import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import ReactNativeBiometrics from 'react-native-biometrics';
import LinearGradient from 'react-native-linear-gradient';

import statusBar from '../../../../utilities/statusBar';

import {
  USE_BIOMETRIC,
  WILL_TUNE_BIOMETRIC,
} from '../../../../constants/storageKeys';
import { USER } from '../../../../constants/navigation/navigators';

import Header from '../../../components/Header/Header';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import Indent from '../../../components/Indent/Indent';
import Notification from '../../../components/Notification/Notification';

import styles from './Biometric.styles';
import { authPageWrapper as wrapper, view } from '../../../../styles/mixins';
import colors from '../../../../styles/colors';

// User can be redirected to this page only if his device supports biometric authentication!
export default function Biometric({ navigation }) {
  useFocusEffect(() => statusBar('light'));

  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  const activate = async () => {
    setLoader(true);
    try {
      await ReactNativeBiometrics.createKeys('Confirm fingerprint').then(
        async (publicKey) => {
          try {
            const res = await ReactNativeBiometrics.createSignature({
              promptMessage: '',
              payload: publicKey.publicKey,
            });
            if (res.success) {
              await AsyncStorage.multiSet([
                [USE_BIOMETRIC, 'true'],
                [WILL_TUNE_BIOMETRIC, 'false'],
              ]);
              setLoader(false);
              await navigation.navigate(USER, { screen: HOME });
            }
          } catch (e) {
            setLoader(false);
            setError(e);
            console.log(e);
          }
        },
      );
    } catch (e) {
      setError('');
    }
  };

  const deactivate = async () => {
    try {
      await AsyncStorage.multiSet([
        [USE_BIOMETRIC, 'false'],
        [WILL_TUNE_BIOMETRIC, 'true'],
      ]);
      await navigation.navigate(USER);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      <LinearGradient colors={[colors.lightBlue, colors.darkBlue]} style={{ height: '100%', justifyContent: 'flex-start' }}>
        <SafeAreaView style={wrapper}>
          <Header
            topText=""
            navigation={navigation}
            isLight={false}
          />
          <Image source={require('../../../../assets/images/biometricImage.png')} style={styles.imageTop} />
          <View style={styles.textContainer}>
            <Text style={styles.textContainerTop}>
              Activate biometric
            </Text>
            <Text style={styles.textContainerTop}>
              authentification?
            </Text>
            <View style={styles.containerBottom}>
              <Text style={styles.textContainerBottom}>
                Face ID
              </Text>
            </View>
          </View>
          <View style={{ ...view, paddingHorizontal: 15 }}>
            <DefaultButton onPress={activate} title="Activate" loader={loader} />
            <Indent height={12} />
            <TouchableWithoutFeedback onPress={deactivate}>
              <Text allowFontScaling={false} style={{ color: colors.white, textDecorationLine: 'underline' }}>
                Set Up Later in Settings
              </Text>
            </TouchableWithoutFeedback>
            <Indent height={20} />
          </View>
        </SafeAreaView>
      </LinearGradient>
      <Notification notification={error} close={() => setError(() => setError(''))} />
    </>
  );
}

Biometric.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
