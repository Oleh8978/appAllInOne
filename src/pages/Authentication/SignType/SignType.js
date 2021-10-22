import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { Auth, Hub } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';

import signInUser from '../../../../services/cognito/signInUserThroughEmail';
import statusBar from '../../../../utilities/statusBar';

import {
  emailValidator,
  passwordValidator,
} from '../../../../utilities/yupValidators';

import {
  AUTHENTICATION,
  USER,
} from '../../../../constants/navigation/navigators';
import {
  BIOMETRIC,
  FORGOT_PASSWORD,
  SIGN_TYPE,
  CREATE_USER_EMAIL, PASSCODE,
} from '../../../../constants/navigation/authenticationScreens';
import { USE_BIOMETRIC, WILL_TUNE_BIOMETRIC } from '../../../../constants/storageKeys';

import KeyboardNormalizer from '../../../HOCs/KeyboardNormalizerFolding';

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Notification from '../../../components/Notification/Notification';
import Loader from '../../../components/Loader/Loader';
import FormInput from '../../../components/FormInput/FormInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import DeviderText from '../../../components/DeviderText/DeviderText';

import MainPageImage from '../../../../assets/images/MainPage.png';
import GoogleImage from '../../../../assets/svgs/Google';
import FacebookImage from '../../../../assets/svgs/Facebook';
import AppleImage from '../../../../assets/svgs/Apple';

import {
  authPageWrapper as wrapper,
  shadowBlock,
  view,
} from '../../../../styles/mixins';
import styles from './SignType.styles';
import colors from '../../../../styles/colors';

function SignType({ navigation, route: { params: type } }) {
  useFocusEffect(() => statusBar('dark'));

  const isLogin = type?.type === 'login';
  const [loginError, setLoginError] = useState('');
  const [formError, setFormError] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    Hub.listen(/.*/, async (data) => {
      if (data.payload.event === 'parsingCallbackUrl') {
        setShowLoader(true);
      } else if (data.payload.event === 'cognitoHostedUI') {
        try {
          await Auth.currentAuthenticatedUser();
          try {
            if (
              !((await AsyncStorage.getItem(WILL_TUNE_BIOMETRIC)) === 'true')
            ) {
              navigation.navigate(AUTHENTICATION, { screen: BIOMETRIC });
            } else {
              await navigation.navigate(USER);
            }
            setLoginError('');
          } catch (e) {
            setLoginError(e);
          }
        } catch (_e) {
          setLoginError(_e);
        }
        setShowLoader(false);
      }
    });
  }, []);

  const authentication = async (provider) => {
    try {
      await Auth.federatedSignIn({ provider });
    } catch (e) {
      setLoginError(e);
    }
  };

  const signIn = async ({ email, password }) => {
    try {
      setShowLoader(true);
      await signInUser(email, password);
      setFormError('');

      if (await AsyncStorage.getItem(USE_BIOMETRIC) === 'true') {
        await navigation.navigate(USER);
      } else {
        const { available } = await ReactNativeBiometrics.isSensorAvailable();
        if (available) {
          await navigation.navigate(AUTHENTICATION, { screen: BIOMETRIC });
        } else {
          await navigation.push(PASSCODE, { nextPage: USER, isNew: true });
        }
      }
    } catch (e) {
      setFormError(e);
    }
    setShowLoader(false);
  };

  if (showLoader) {
    return (
      <LinearGradient
        style={{
        width: '100%',
        height: '100%',
      }}
        colors={[colors.lightBlue, colors.darkBlue]}
      >
        <Loader color={colors.grey} isAbsolute size="large" />
      </LinearGradient>
    );
  }

  return (
    <>
      <LinearGradient
        style={styles.wrapper}
        colors={[colors.lightBlue, colors.darkBlue]}
      >
        <Header
          navigation={navigation}
          topText={isLogin ? 'Log in to your account' : 'Create your account'}
          isLight
        />
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', height: '100%' }}>
          {isLogin ? <></> : <Image source={MainPageImage} style={{ width: '100%', height: 345 }} />}
          <View style={{ ...view, marginTop: isLogin ? 100 : 0 }}>
            <TouchableOpacity
              style={shadowBlock}
              onPress={() => authentication('SignInWithApple')}
            >
              <View style={{ ...styles.buttonsItemContainer }}>
                <AppleImage style={{ ...styles.logo, marginLeft: -25 }} />
                <Text allowFontScaling={false} style={styles.signUpText}>
                  Continue with Apple
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={shadowBlock}
              onPress={() => authentication('Google')}
            >
              <View style={styles.buttonsItemContainer}>
                <GoogleImage style={{ ...styles.logo, marginLeft: -15, marginRight: 5 }} />
                <Text allowFontScaling={false} style={styles.signUpText}>Continue with Google</Text>
              </View>
            </TouchableOpacity>
            <View style={{ ...shadowBlock, opacity: 0.25 }}>
              <View style={styles.buttonsItemContainer}>
                <FacebookImage style={styles.logo} />
                <Text allowFontScaling={false} style={styles.signUpText}>Continue with Facebook</Text>
              </View>
            </View>
            <DeviderText
              textDivider={isLogin ? 'or use your email' : 'or'}
              customStyle={{ minWidth: isLogin ? 15 : 12, fontFamily: 'Gotham Pro' }}
            />
            {isLogin
            ? (
              <Formik
                validationSchema={yup.object().shape({
                  email: emailValidator,
                  password: passwordValidator,
                })}
                initialValues={{
                  email: '',
                  password: '',
                }}
                onSubmit={signIn}
              >
                {({
           handleChange,
           handleBlur,
           handleSubmit,
           values,
           errors,
           touched,
           isValid,
           dirty,
        }) => (
          <View style={{ ...styles.formWrapper, height: Platform.OS === 'IOS' ? '100%' : 350 }}>
            <View style={styles.form}>
              <View>
                <FormInput
                  keyboardType="email-address"
                  autoCompleteType="email"
                  set={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  textContentType="emailAddress"
                  placeholder="Enter your email address"
                  headerText="email"
                  error={touched.email && errors.email}
                />
                <FormInput
                  autoCompleteType="password"
                  set={(value) => { handleChange('password')(value); }}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  textContentType="newPassword"
                  placeholder="Enter your password"
                  headerText="password"
                  error={touched.password && !!errors.password}
                />
              </View>
            </View>
            <DefaultButton
              title="Log in"
              onPress={handleSubmit}
              showLoader={showLoader}
              disabled={false}
              isArrowNext
              customStyles={{ marginTop: 15, width: '100%', marginBottom: 0 }}
            />
            {isLogin && (
            <Footer
              textFooter="Forgot password"
              customStyle={{ marginTop: 5 }}
              customStyleContainer={{ marginTop: 0 }}
              onPress={() => {
              navigation.navigate(AUTHENTICATION,
                { screen: FORGOT_PASSWORD,
                  params: { email: errors.email ? '' : values.email } });
                }}
            />
            )}
            {isLogin
            && (
            <Footer
              textFooter="Create an account"
              customStyle={{ marginTop: 5 }}
              onPress={() => navigation.navigate(SIGN_TYPE, { type: 'create' })}
            />
          )}
          </View>
        )}
              </Formik>
        ) : (
          <View style={styles.buttonContainer}>
            <DefaultButton
              title="Continue with Email"
              onPress={() => navigation.navigate(CREATE_USER_EMAIL)}
              isLight
              customStyles={{ marginTop: 15, width: '100%' }}
              textStyles={{ fontWeight: 'normal' }}
              isEmail
            />
          </View>
          )}
            {!isLogin && (
            <Footer
              textFooter="Log into your account"
              customStyle={{ marginTop: 15 }}
              onPress={() => navigation.navigate(AUTHENTICATION, { screen: SIGN_TYPE, params: { type: 'login' } })}
            />
            )}
          </View>
          <View />
          <View />
        </ScrollView>
      </LinearGradient>
      <Notification type="error" notification={loginError} close={() => setLoginError('')} />
    </>
  );
}

export default KeyboardNormalizer(SignType, wrapper, 210);
