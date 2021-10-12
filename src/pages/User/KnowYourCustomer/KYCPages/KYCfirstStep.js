import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  Text,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Store from '../../../../store';
import { getDate } from '../../../../../utilities/formatters/timeFormatter';
import numberFormatter from '../../../../../utilities/formatters/numberFormatter';

import {
  nameValidator,
  familyNameValidator,
  phoneNumberValidator,
  emailValidator,
} from '../../../../../utilities/yupValidators';

import FormInput from '../../../../components/FormInput/FormInput';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import Indent from '../../../../components/Indent/Indent';
import DatePicker from '../../../../components/DatePicker/DatePicker';

import shadow from '../../../../../styles/mixins/shadowBorder';
import { view } from '../../../../../styles/mixins';
import styles from '../KnowYourCustomer.styles';
import colors from '../../../../../styles/colors';

function KYCfirstStep({ type = 'natural_person', jumpToNextPage, showLoader, title, firstPageGetter }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date('January 1, 2000'));
  const [dateIsPicked, setDateIsPicked] = useState(false);

  const dataSetter = (data) => {
    firstPageGetter(data);
    jumpToNextPage();
  };

  return (
    <>
      <Text style={{ ...styles.headText }}>{title}</Text>
      <Formik
        validationSchema={yup.object().shape({
          name: nameValidator,
          familyName: familyNameValidator,
          email: emailValidator,
          phoneNumber: phoneNumberValidator,
        })}
        initialValues={{
          name: Store.user.givenName,
          familyName: Store.user.familyName,
          email: Store.user.email,
          date: '',
          phoneNumber: '',
        }}
        onSubmit={dataSetter}
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
          <>
            <SafeAreaView style={{ width: '100%' }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={view}>
                  <FormInput
                    headerText="First name"
                    textheaderCustomStyle={{ color: colors.grey }}
                    autoCompleteType="name"
                    autoCapitalize="words"
                    set={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    textContentType="givenName"
                    placeholder="Enter your First name"
                    error={touched.name && errors.name}
                    inputCustomStyle={{ ...shadow }}
                  />
                  {type === 'natural_person' && (
                    <FormInput
                      headerText="Last name"
                      textheaderCustomStyle={{ color: colors.grey }}
                      autoCompleteType="name"
                      autoCapitalize="words"
                      set={handleChange('familyName')}
                      onBlur={handleBlur('familyName')}
                      value={values.familyName}
                      textContentType="familyName"
                      placeholder="Enter your Last name"
                      error={touched.familyName && errors.familyName}
                      inputCustomStyle={{ ...shadow }}
                    />
                  )}
                  <FormInput
                    headerText="Email address"
                    textheaderCustomStyle={{ color: colors.grey }}
                    keyboardType="email-address"
                    autoCompleteType="email"
                    set={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    textContentType="emailAddress"
                    placeholder="Enter your email Address"
                    error={touched.email && errors.email}
                    inputCustomStyle={{ ...shadow }}
                  />
                  <FormInput
                    headerText="date of birth"
                    textheaderCustomStyle={{ color: colors.grey }}
                    editable={false}
                    onFocus={() => {
                      setShowDatePicker(true);
                      setDateIsPicked(true);
                    }}
                    onBlur={handleBlur('date')}
                    value={dateIsPicked ? getDate(date) : ''}
                    placeholder="Select your birth day date"
                    error={
                      touched.date
                      && !dateIsPicked
                      && 'This Date is required'
                    }
                    inputCustomStyle={{ ...shadow }}
                    isNeedArrow
                  />
                  <FormInput
                    textheaderCustomStyle={{ color: colors.grey }}
                    headerText="Phone"
                    autoCompleteType="tel"
                    keyboardType="phone-pad"
                    set={(value) => numberFormatter(value, handleChange('phoneNumber'))}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                    placeholder="Phone Number"
                    error={touched.phoneNumber && errors.phoneNumber}
                    inputCustomStyle={{ ...shadow }}
                  />

                  <DefaultButton
                    title="Next"
                    onPress={handleSubmit}
                    showLoader={showLoader}
                    isLight={false}
                    isArrowNext
                    disabled={
                      !(
                        isValid
                          && dirty
                          && dateIsPicked
                          && (type === 'natural_person')
                      )
                    }
                    customStyles={{ marginTop: 15 }}
                  />
                  <Indent height={195} />
                </View>
              </ScrollView>
            </SafeAreaView>
          </>
        )}
      </Formik>
      {showDatePicker && (
        <DatePicker
          close={() => setShowDatePicker(false)}
          header={type === 'natural_person' ? 'Select your birth day date' : 'Set date of incorporation'}
          value={date}
          isWhite={true}
          onValueChange={(event, _date) => {
            if (Platform.OS === 'android') {
              setShowDatePicker(false);
              if (event.type === 'set') {
                setDate(_date);
              }
            } else {
              setDate(_date);
            }
          }}
          select={() => setShowDatePicker(false)}
        />
      )}
    </>
  );
}

KYCfirstStep.propTypes = {
  jumpToNextPage: PropTypes.func,
  showLoader: PropTypes.bool,
  setShowLoader: PropTypes.func,
  setFormErrors: PropTypes.func,
  type: PropTypes.string,
};

export default KYCfirstStep;
