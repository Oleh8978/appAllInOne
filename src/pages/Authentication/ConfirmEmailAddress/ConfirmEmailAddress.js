import React, {
  useEffect, useState, useRef,
} from 'react';
import PropTypes from 'prop-types';
import {
 View, Text, Image, ScrollView, Platform,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import statusBar from '../../../../utilities/statusBar';
import resendConfirmationLink from '../../../../services/cognito/resendConfirmationLink';

import { AUTHENTICATION } from '../../../../constants/navigation/navigators';
import { SIGN_TYPE } from '../../../../constants/navigation/authenticationScreens';

import Header from '../../../components/Header/Header';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import Indent from '../../../components/Indent/Indent';
import Notification from '../../../components/Notification/Notification';

import { authPageWrapper as wrapper, view } from '../../../../styles/mixins';
import styles from './ConfirmEmailAddress.styles';
import colors from '../../../../styles/colors';

const TIMER = 60;

export default function ConfirmEmailAddress({ navigation, route }) {
  useFocusEffect(() => statusBar('light'));

  const [resendError, setResendError] = useState('');
  const [timer, setTimer] = useState(TIMER);
  const [showTimer, setShowTimer] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        setTimeout(() => setShowTimer(false));
        clearInterval(intervalRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timer]);

  const resendEmail = async () => {
    try {
      setShowLoader(true);
      await resendConfirmationLink(route?.params?.username);
      setResendError('');
      setTimer(TIMER);
      setShowTimer(true);
    } catch (e) {
      setResendError(e);
    }
    setShowLoader(false);
  };

  return (
    <LinearGradient style={{ ...wrapper, backgroundColor: 'transparent' }} colors={[colors.lightBlue, colors.darkBlue]}>
      <View style={wrapper}>
        <Header
          goBackFunction={() => navigation.navigate(AUTHENTICATION, { screen: SIGN_TYPE, params: { type: 'registration' } })}
          topText="Create your account with email"
          navigation={navigation}
          isLight={false}
          customStyles={{ marginLeft: 55, marginRight: 45 }}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
          <Image source={require('../../../../assets/images/confirmEmailImg.png')} style={styles.imageTop} />
          <View style={styles.textWrapper}>
            <Text allowFontScaling={false} style={styles.mainText}>
              Confirm your email
            </Text>
            <Text style={styles.textSubTitle}>Check your email for the confirmation link</Text>
            <Text allowFontScaling={false} style={styles.subText}>
              If you do not receive a confirmation email, please check your spam
              folder or request a new one.
            </Text>
            <Text allowFontScaling={false} style={styles.subText}>
              {route.params.username ? route.params.username : ''}
            </Text>
          </View>
          <View style={{ ...view, paddingBottom: Platform.OS === 'IOS' ? 0 : 45 }}>
            <View style={{ width: '100%', paddingHorizontal: 15, flexDirection: 'row' }}>
              {showTimer && <Text allowFontScaling={false} style={styles.timer}>{timer}</Text>}
              <DefaultButton
                onPress={resendEmail}
                showLoader={showLoader}
                disabled={showTimer}
                title="resend confirmation link"
              />
            </View>
            <Indent height={20} />
            <View style={{ width: '100%', paddingHorizontal: 15 }}>
              <DefaultButton
                onPress={() => {
              navigation.navigate(AUTHENTICATION, { screen: SIGN_TYPE, params: { type: 'create' } });
              clearInterval(intervalRef.current);
            }}
                isLight
                title="Back"
              />
            </View>
          </View>
          <View />
          <Notification
            notification={resendError}
            close={() => setResendError('')}
          />
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

ConfirmEmailAddress.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.object,
};
