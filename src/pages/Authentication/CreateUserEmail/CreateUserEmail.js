import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Text, ScrollView, View, Image,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import createUser from '../../../../services/cognito/createUserThroughEmail';
import statusBar from '../../../../utilities/statusBar';
import {
  emailValidator,
  passwordValidator,
} from '../../../../utilities/yupValidators';
import KeyboardNormalizer from '../../../HOCs/KeyboardNormalizerFolding';

import { AUTHENTICATION } from '../../../../constants/navigation/navigators';
import { CONFIRM_EMAIL_ADDRESS, SIGN_TYPE } from '../../../../constants/navigation/authenticationScreens';

import Header from '../../../components/Header/Header';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import Footer from '../../../components/Footer/Footer';
import FormInput from '../../../components/FormInput/FormInput';
import Notification from '../../../components/Notification/Notification';
import Indent from '../../../components/Indent/Indent';
import PasswordValidator from '../../../components/PasswordValidator/PasswordValidator';
import OpenURLButton from '../../../components/openLinkComponent/openLinkComponent';

import AccountImage from '../../../../assets/images/accountEmailImg.png';
import {
  authPageWrapper as wrapper,
  header,
  view,
} from '../../../../styles/mixins';
import colors from '../../../../styles/colors';
import styles from './CreateUserEmail.styles';

function CreateUserEmail({ navigation, addHeight }) {
  useFocusEffect(() => statusBar('dark'));

  const [password, setPassword] = useState('');
  const [passwordValidators, setPasswordValidators] = useState(
    {
      length: true,
      number: true,
      upperCaseLetter: true,
      lowercaseLetter: true,
    },
  );
  const [formError, setFormError] = useState('');
  const [showLoader, setShowLoader] = useState(false);

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

  return (
    <LinearGradient
      style={{ ...wrapper, backgroundColor: 'transparent' }}
      colors={[colors.lightBlue, colors.darkBlue]}
    >
      <View style={header}>
        <Header
          topText="Create your account with email"
          navigation={navigation}
          customStyles={{ marginLeft: 55, marginRight: 45 }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
        <Image source={AccountImage} style={styles.imageTop} />
        <Formik
          validationSchema={yup.object().shape({
          email: emailValidator,
          password: passwordValidator,
        })}
          initialValues={{
          email: '',
          password: '',
        }}
          onSubmit={async (newUser, { resetForm }) => {
          try {
            setShowLoader(true);
            const { user } = await createUser(newUser);
            if (user) {
              setFormError('');
              navigation.navigate(AUTHENTICATION, {
                screen: CONFIRM_EMAIL_ADDRESS,
                params: { username: newUser.email },
              });
              resetForm();
            }
          } catch (e) {
            setFormError(e);
          }
          setShowLoader(false);
        }}
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
          <View style={styles.formWrapper}>
            <View style={styles.form}>
              <View style={styles.formBody}>
                <FormInput
                  keyboardType="email-address"
                  autoCompleteType="email"
                  set={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  textContentType="emailAddress"
                  placeholder="Enter your email address"
                  headerText="Email"
                  error={touched.email && errors.email}
                />
                <FormInput
                  autoCompleteType="password"
                  set={(value) => {
                    handleChange('password')(value);
                    setPassword(value);
                  }}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  textContentType="newPassword"
                  placeholder="Create your password"
                  headerText="Password"
                  error={touched.password && !!errors.password}
                />
                <Indent height={5} />
                <PasswordValidator validators={passwordValidators} />
                <Indent height={10} />
              </View>
            </View>
            <View style={view}>
              <View style={{ width: '100%', paddingHorizontal: 15 }}>
                <DefaultButton
                  title="Next"
                  onPress={handleSubmit}
                  showLoader={showLoader}
                  isArrowNext
                  disabled={!(isValid && dirty)}
                />
              </View>
              <View style={{ ...styles.textContainer, flex: 1, flexWrap: 'wrap' }}>
                <Text style={styles.textFooter}>
                  By clicking NEXT I agree to the
                  {' '}
                </Text>
                <OpenURLButton
                  text="Terms"
                  url=""
                  customStyleTxt={{ textDecorationLine: 'underline' }}
                />
                <Text style={styles.textFooter}>
                  {' '}
                  and
                  {' '}
                </Text>
                <OpenURLButton
                  text="Privacy Policy"
                  url=""
                  customStyleTxt={{ textDecorationLine: 'underline' }}
                />
              </View>
              <Footer
                navigation={navigation}
                customContactBorderWidth={addHeight}
                textFooter="Log into your account"
                onPressFunctionality={() => navigation.navigate(AUTHENTICATION, { screen: SIGN_TYPE, params: { type: 'login' } })}
              />
            </View>
          </View>
        )}
        </Formik>
        <Notification notification={formError} close={() => setFormError('')} />
      </ScrollView>
    </LinearGradient>
  );
}
CreateUserEmail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default KeyboardNormalizer(CreateUserEmail, wrapper, 171, 0, 1);
