import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, Text, SafeAreaView, ScrollView,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';

import statusBar from '../../../../utilities/statusBar';
import {
  passwordValidator,
  verificationCode,
} from '../../../../utilities/yupValidators';

import { AUTHENTICATION } from '../../../../constants/navigation/navigators';
import {
  SIGN_TYPE,
  WELL_DONE,
} from '../../../../constants/navigation/authenticationScreens';
import { DEVICE_WIDTH } from '../../../../constants/constants';

import KeyboardNormalizer from '../../../HOCs/KeyboardNormalizerFolding';
import Header from '../../../components/Header/Header';
import FormInput from '../../../components/FormInput/FormInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import Indent from '../../../components/Indent/Indent';
import Notification from '../../../components/Notification/Notification';
import PasswordValidator from '../../../components/PasswordValidator/PasswordValidator';

import styles from './ResetPasswordCode.styles';
import {
  authPageWrapper as wrapper,
  view,
  formWrapper,
  header,
} from '../../../../styles/mixins';
import colors from '../../../../styles/colors';

function ResetPasswordCode({ navigation, route, height }) {
  useFocusEffect(() => statusBar('dark'));

  const [formError, setFormError] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValidators, setPasswordValidators] = useState(
    {
      length: true,
      number: true,
      upperCaseLetter: true,
      lowercaseLetter: true,
    },
  );

  useEffect(() => {
    if (password.length) {
      setPasswordValidators({
        length: password.length >= 8,
        number: /\d/.test(password),
        upperCaseLetter: /[A-Z]/.test(password),
        lowercaseLetter: /[a-z]/.test(password),
      });
    } else {
      setPasswordValidators({
        length: true,
        number: true,
        upperCaseLetter: true,
        lowercaseLetter: true,
      });
    }
  }, [password]);

  const resetCode = async (_values) => {
    try {
      setShowLoader(true);
      await Auth.forgotPasswordSubmit(
        route.params.email,
        _values.code,
        _values.password,
      );
      setFormError('');
      navigation.navigate(AUTHENTICATION, {
        screen: WELL_DONE,
        params: {
          onPress: () => navigation.navigate(AUTHENTICATION, {
            screen: SIGN_TYPE, type: 'login',
          }),
        },
      });
    } catch (e) {
      setFormError(e);
    }
    setShowLoader(false);
  };

  return (
    <>
      <LinearGradient colors={[colors.lightBlue, colors.darkBlue]} style={{ ...view, height: '100%', justifyContent: 'flex-start' }}>
        <View style={{ ...header, backgroundColor: 'transparent', marginTop: 0 }}>
          <Header
            topText=""
            navigation={navigation}
          />
        </View>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <Image source={require('../../../../assets/images/ForgotPasswordImage.png')} style={styles.imageTop} />
          <Formik
            validationSchema={yup.object().shape({
            code: verificationCode,
            password: passwordValidator,
          })}
            initialValues={{
            code: '',
            password: '',
          }}
            onSubmit={resetCode}
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
            <SafeAreaView
              style={{
                ...formWrapper,
                justifyContent: 'space-between',
                flex: 1,
                paddingHorizontal: 0,
              }}
            >
              <View
                style={{ width: '100%' }}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.textContainerTop}>
                    Create
                  </Text>
                  <Text style={styles.textContainerTop}>
                    New Password
                  </Text>
                  <View style={styles.containerBottom}>
                    <Text style={styles.textContainerBottom}>
                      We have sent you verification code
                    </Text>
                    <Text style={styles.textContainerBottom}>
                      to change your password
                    </Text>
                  </View>
                </View>
                <View style={{ ...view, paddingHorizontal: '5%', marginTop: 0 }}>
                  <FormInput
                    set={handleChange('code')}
                    value={values.code}
                    placeholder="Enter verification code from Email"
                    headerText="Verification code"
                    error={touched.code && errors.code}
                  />
                  <FormInput
                    autoCompleteType="password"
                    set={(value) => { handleChange('password')(value); setPassword(value); }}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    textContentType="password"
                    placeholder="Create your password"
                    headerText="Password"
                    error={touched.password && !!errors.password}
                  />
                  <Indent height={5} />
                  <PasswordValidator validators={passwordValidators} />
                  <Indent height={10} />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <DefaultButton
                  customStyles={{ marginTop: DEVICE_WIDTH <= 360 ? 30 : 0 }}
                  title="Submit"
                  onPress={handleSubmit}
                  showLoader={showLoader}
                  disabled={!(isValid && dirty)}
                />
              </View>
            </SafeAreaView>
          )}
          </Formik>
        </ScrollView>
      </LinearGradient>
      <Notification notification={formError} close={() => setFormError('')} />
    </>
  );
}

ResetPasswordCode.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.object,
  height: PropTypes.object,
};

export default KeyboardNormalizer(ResetPasswordCode, wrapper, 200);
