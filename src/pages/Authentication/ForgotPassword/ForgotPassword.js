import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Dimensions,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';

import statusBar from '../../../../utilities/statusBar';
import { emailValidator } from '../../../../utilities/yupValidators';

import { AUTHENTICATION } from '../../../../constants/navigation/navigators';
import { RESET_PASSWORD_CODE, SIGN_TYPE } from '../../../../constants/navigation/authenticationScreens';

import KeyboardNormalizer from '../../../HOCs/KeyboardNormalizerFolding';
import Header from '../../../components/Header/Header';
import FormInput from '../../../components/FormInput/FormInput';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import Notification from '../../../components/Notification/Notification';
import Footer from '../../../components/Footer/Footer';

import styles from './ForgotPassword.styles';
import colors from '../../../../styles/colors';

import {
  view,
  authPageWrapper as wrapper,
  formWrapper,
  header,
} from '../../../../styles/mixins';

function ForgotPassword({ navigation, height, route }) {
  useFocusEffect(() => statusBar('dark'));

  const [formError, setFormError] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  return (
    <>
      <LinearGradient colors={[colors.lightBlue, colors.darkBlue]} style={{ ...view, height: '100%', justifyContent: 'flex-start' }}>
        <View style={{ ...header, backgroundColor: 'transparent', marginTop: 0 }}>
          <Header
            topText=""
            navigation={navigation}
          />
        </View>
        <ScrollView style={{ width: '100%', height: '100%' }} showsHorizontalScrollIndicator={false}>
          <Image source={require('../../../../assets/images/ForgotPasswordImage.png')} style={styles.imageTop} />
          <View style={styles.textContainer}>
            <Text style={styles.textContainerTop}>
              Forgot password?
            </Text>
            <View style={styles.containerBottom}>
              <Text style={styles.textContainerBottom}>
                Please enter your email address to request a password reset
              </Text>
            </View>
          </View>
          <Formik
            validationSchema={yup.object().shape({ email: emailValidator })}
            initialValues={{ email: route.params?.email }}
            onSubmit={async (user) => {
            try {
              setShowLoader(true);
              const email = user.email;

              await Auth.forgotPassword(email);
              setFormError('');
              navigation.navigate(AUTHENTICATION, {
                screen: RESET_PASSWORD_CODE,
                params: { email },
              });
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
            <View style={{ ...formWrapper, backgroundColor: 'transparent' }}>
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
              <DefaultButton
                title="Reset Password"
                onPress={handleSubmit}
                customStyles={{ marginTop: 14 }}
                isLight={false}
                showLoader={showLoader}
                disabled={!(isValid && (dirty || route.params?.email?.length))}
              />
            </View>
          )}
          </Formik>
          <Footer textFooter="Log into your account" customStyle={{ marginTop: 15 }} onPressFunctionality={() => navigation.navigate(AUTHENTICATION, { screen: SIGN_TYPE, params: { type: 'login' } })} />
        </ScrollView>
      </LinearGradient>
      <Notification notification={formError} close={() => setFormError('')} />
    </>
  );
}

ForgotPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  height: PropTypes.object,
  route: PropTypes.object,
};

export default KeyboardNormalizer(
  ForgotPassword,
  wrapper,
  201,
  Dimensions.get('window').height > 700 ? 201 : 0,
);
