import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import HTML from 'react-native-render-html';

import registerContact from '../../../../../services/registerContact';
import getUserAgreement from '../../../../../services/getUserAgreement';

import { getShortDate } from '../../../../../utilities/formatters/timeFormatter';
import primeTrustErrorFormatter from '../../../../../utilities/formatters/primeTrustErrorFormatter';
import postalCodeFormatter from '../../../../../utilities/formatters/postalCodeFormatter';
import numberFormatter from '../../../../../utilities/formatters/numberFormatter';

import { USA_STATES_LIST } from '../../../../../constants/constants';

import {
  streetValidator,
  cityValidator,
  postalCodeValidator,
  taxNumberValidator,
} from '../../../../../utilities/yupValidators';

import FormInput from '../../../../components/FormInput/FormInput';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import Indent from '../../../../components/Indent/Indent';
import Picker from '../../../../components/Picker/Picker';
import CloseImage from '../../../../../assets/svgs/Close';

import CheckImage from '../../../../../assets/svgs/CheckImage';

import { view } from '../../../../../styles/mixins';
import shadow from '../../../../../styles/mixins/shadowBorder';
import styles from '../KnowYourCustomer.styles';
import colors from '../../../../../styles/colors';

function KYCSecondStep({ type = 'natural_person', jumpToNextPage, showLoader, setShowLoader, setFormErrors, title, firstPageData }) {
  const [showRegionFormationPicker, setShowRegionFormationPicker] = useState(false);
  const [regionFormation, setRegionFormation] = useState(USA_STATES_LIST[0].value);

  const [showTaxStatePicker, setShowTaxStatePicker] = useState(false);
  const [taxState, setTaxState] = useState(USA_STATES_LIST[0].value);
  const [taxStateIsPicked, setTaxStateIsPicked] = useState(false);

  const [showAgreement, setShowAgreement] = useState(false);
  const [showStatePicker, setShowStatePicker] = useState(false);
  const [state, setState] = useState(USA_STATES_LIST[0].value);
  const [stateIsPicked, setStateIsPicked] = useState(false);
  const [agreedCheckpoint, setAgreedCheckpoint] = useState(false);
  const [userAgreement, setUserAgreement] = useState('');
  const [textFormedData, setTextFormedData] = useState({});
  const [isChecked, setIsChecked] = useState(false);
console.log('@@@ firstPageData', firstPageData);
  const openAgreement = async (values) => {
    try {
      setShowLoader(true);
      const KYCFormedData = {
          name: `${firstPageData.name} ${firstPageData.familyName}`,
          email: firstPageData.email || '',
          'date-of-birth': getShortDate(firstPageData.date),
          'tax-id-number': values.taxId,
          'tax-country': 'US',
          'tax-state': taxState,
          'primary-phone-number': {
            country: 'US',
            number: firstPageData.phoneNumber,
          },
          'primary-address': {
            country: 'US',
            region: state,
            city: values.city,
            'street-1': values.streetAddress,
            'postal-code': values.postalCode,
          },
        };
      setTextFormedData(KYCFormedData);
      const parseUserAgreement = (await getUserAgreement(KYCFormedData.name)).content
        // delete fonts cause weren't sure we have them
        .replace(/font-family:[.\w\s]*/g, '')
        // delete useless end of text
        .replace(/Agreed as of day[.\s\S\n]+between:/g, '')
        // change line break to space for right html rendering
        .replace(/(<.+>)([^<]*)(<\/.+>)/g, (m, p1, p2, p3) => `${p1}${p2.replace(/\n/g, ' ')}${p3}`);
      setUserAgreement(parseUserAgreement);
      setAgreedCheckpoint(false);
      setShowAgreement(true);
    } catch (e) {
      try {
        const errors = JSON.parse(/{.+}/.exec(e.message))?.errors;
        if (errors) {
          setFormErrors(errors.map(primeTrustErrorFormatter));
        } else {
          setFormErrors([{ message: e.message, id: Math.random() }]);
        }
      } catch (_e) {
        setFormErrors([{ message: _e.message, id: Math.random() }]);
      }
    }
    // uncomment only for test purposses to jump to next page
    // jumpToNextPage();
    setShowLoader(false);
  };

  const uploadText = async () => {
    setShowLoader(true);
    console.log('@formed data is ', textFormedData);
    try {
      await registerContact(textFormedData, type)
        .then(async () => {
          await jumpToNextPage();
        });
    } catch (e) {
      try {
        const errors = JSON.parse(/{.+}/.exec(e.message))?.errors;
        if (errors) {
          console.log('@1 error ', errors);
          setFormErrors(errors.map(primeTrustErrorFormatter));
        } else {
          console.log('@2 error ', e.message);
          setFormErrors([{ message: e.message, id: Math.random() }]);
        }
      } catch (_e) {
        console.log('@3 error ', _e.message);
        setFormErrors([{ message: _e.message, id: Math.random() }]);
      }
    }
    setShowLoader(false);
    setShowAgreement(false);
  };

  // console.log('@ userAgreement ', userAgreement)

  if (showAgreement === true) {
    return (
      <View style={{
        ...styles.agreementBackground,
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        top: -120,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        }}
      >
        <SafeAreaView
          style={{
         height: '100%',
         width: '100%',
         marginBottom: 0,
         borderTopLeftRadius: 20,
         borderTopRightRadius: 20,
         }}
        >
          <View
            style={{
           ...styles.agreementWrapper,
           height: 'auto',
           borderTopLeftRadius: 20,
           borderTopRightRadius: 20,
           }}
          >
            <ScrollView
              style={{
             borderTopLeftRadius: 20,
             borderTopRightRadius: 20,
             backgroundColor: colors.white,
             width: '100%',
             height: '100%',
             }}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                 width: '100%',
                 zIndex: 5,
               }}
              >
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => setShowAgreement(false)}
                >
                  <CloseImage />
                </TouchableOpacity>
              </View>
              <Image
                source={require('../../../../../assets/images/agreementHeader.png')}
                style={{
                 height: 200,
                 width: '100%',
                 borderTopLeftRadius: 20,
                 borderTopRightRadius: 20,
                 marginTop: -50,
                }}
              />
              <View
                style={{
                 marginTop: 30,
                 paddingHorizontal: 15,
                 paddingBottom: 200,
               }}
              >
                <HTML
                  source={{ html: userAgreement }}
                  classesStyles={{ pt__signature: { display: 'none' } }}
                />

                <View style={styles.agreementContainer}>
                  <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
                    {isChecked ? <CheckImage /> : <></>}
                  </TouchableOpacity>
                  <Text>
                    I,
                    {textFormedData.name}
                    {' '}
                    agree
                  </Text>
                </View>
                <DefaultButton
                  title="Submit"
                  disabled={!isChecked}
                  onPress={uploadText}
                />
              </View>

            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <>
      <Text style={{ ...styles.headText }}>{title}</Text>
      <Formik
        validationSchema={yup.object().shape({
          streetAddress: streetValidator,
          city: cityValidator,
          postalCode: postalCodeValidator,
          taxId: taxNumberValidator,
        })}
        initialValues={{
          taxState: '',
          state: '',
          city: '',
          streetAddress: '',
          postalCode: '',
          taxId: '',
        }}
        onSubmit={openAgreement}
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
                  <View style={view}>
                    <FormInput
                      textheaderCustomStyle={{ color: colors.grey }}
                      headerText="Taxt state"
                      editable={false}
                      onFocus={() => {
                        setShowTaxStatePicker(true);
                        setTaxStateIsPicked(true);
                      }}
                      set={handleChange('taxState')}
                      onBlur={handleBlur('taxState')}
                      value={taxStateIsPicked ? taxState : ''}
                      placeholder="Enter your tax state"
                      error={
                        touched.taxState
                        && !taxStateIsPicked
                        && 'Tax state is required'
                      }
                      inputCustomStyle={{ ...shadow }}
                      isNeedArrow
                    />
                    {Platform.OS === 'android' && (
                      <View style={styles.invisiblePicker}>
                        <Picker
                          close={() => setShowTaxStatePicker(false)}
                          header="State"
                          value={taxState}
                          isWhite
                          onValueChange={(value) => {
                            setTaxState(value);
                            setTaxStateIsPicked(true);
                          }}
                          list={USA_STATES_LIST}
                          select={() => setShowTaxStatePicker(false)}
                        />
                      </View>
                    )}
                  </View>
                  <View style={view}>
                    <FormInput
                      textheaderCustomStyle={{ color: colors.grey }}
                      headerText="State"
                      editable={false}
                      onFocus={() => {
                        setShowStatePicker(true);
                        setStateIsPicked(true);
                      }}
                      set={handleChange('state')}
                      onBlur={handleBlur('state')}
                      value={stateIsPicked ? state : ''}
                      placeholder="Select your state"
                      error={
                        touched.state
                        && !stateIsPicked
                        && 'State state is required'
                      }
                      isNeedArrow
                      inputCustomStyle={{ ...shadow }}
                    />
                    {Platform.OS === 'android' && (
                      <View style={styles.invisiblePicker}>
                        <Picker
                          close={() => setShowStatePicker(false)}
                          header="Pick your state"
                          value={state}
                          isWhite
                          onValueChange={(value) => {
                            setState(value);
                            setStateIsPicked(true);
                          }}
                          list={USA_STATES_LIST}
                          select={() => setShowStatePicker(false)}
                        />
                      </View>
                    )}
                  </View>
                  <FormInput
                    textheaderCustomStyle={{ color: colors.grey }}
                    headerText="City"
                    autoCapitalize="sentences"
                    set={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                    textContentType="addressCityAndState"
                    placeholder="Select your city"
                    error={touched.city && errors.city}
                    inputCustomStyle={{ ...shadow }}
                  />
                  <FormInput
                    textheaderCustomStyle={{ color: colors.grey }}
                    headerText="Street addresss"
                    autoCapitalize="sentences"
                    autoCompleteType="street-address"
                    set={handleChange('streetAddress')}
                    onBlur={handleBlur('streetAddress')}
                    value={values.streetAddress}
                    textContentType="fullStreetAddress"
                    placeholder="Enter your street address"
                    error={touched.streetAddress && errors.streetAddress}
                    inputCustomStyle={{ ...shadow }}
                  />
                  <FormInput
                    textheaderCustomStyle={{ color: colors.grey }}
                    headerText="post code"
                    keyboardType="number-pad"
                    set={(value) => postalCodeFormatter(value, handleChange('postalCode'))}
                    onBlur={handleBlur('postalCode')}
                    value={values.postalCode}
                    autoCompleteType="postal-code"
                    textContentType="postalCode"
                    placeholder="Enter your post code"
                    error={touched.postalCode && errors.postalCode}
                    maxLength={5}
                    inputCustomStyle={{ ...shadow }}
                  />
                  <FormInput
                    textheaderCustomStyle={{ color: colors.grey }}
                    headerText={'Social Security Number\Tax ID'}
                    isHide
                    keyboardType="number-pad"
                    set={(value) => numberFormatter(value, handleChange('taxId'))}
                    onBlur={handleBlur('taxId')}
                    value={values.taxId}
                    placeholder="Social Security Number\Tax ID"
                    error={touched.taxId && errors.taxId}
                    maxLength={9}
                    inputCustomStyle={{ ...shadow }}
                  />
                  <DefaultButton
                    title="Next Step"
                    onPress={handleSubmit}
                    showLoader={showLoader}
                    disabled={
                      !(
                        isValid
                          && dirty
                          && taxStateIsPicked
                          && stateIsPicked
                          && (type === 'natural_person')
                      )
                    }
                    customStyles={{ marginTop: 15, marginBottom: 150 }}
                  />
                  <Indent height={195} />
                </View>
              </ScrollView>
            </SafeAreaView>
          </>
        )}
      </Formik>
      {showRegionFormationPicker && (
      <Picker
        close={() => setShowRegionFormationPicker(false)}
        header="Pick your region formation"
        value={regionFormation}
        isWhite
        onValueChange={setRegionFormation}
        list={USA_STATES_LIST}
        select={() => setShowRegionFormationPicker(false)}
      />
      )}
      {showTaxStatePicker && (
        <Picker
          close={() => setShowTaxStatePicker(false)}
          header="Pick your tax state"
          value={taxState}
          isWhite
          onValueChange={setTaxState}
          list={USA_STATES_LIST}
          select={() => setShowTaxStatePicker(false)}
        />
      )}
      {showStatePicker && (
        <Picker
          close={() => setShowStatePicker(false)}
          header="Pick your state"
          value={state}
          isWhite
          onValueChange={setState}
          list={USA_STATES_LIST}
          select={() => setShowStatePicker(false)}
        />
      )}
      {/* {showAgreement && (
        <Modal
          animationType="slide"
          transparent
          onRequestClose={() => {
            setShowAgreement(false);
          }}
          customStyleBody={{
            width: '100%',
            height: '100%',
            paddingHorizontal: 0,
            marginBottom: 0,
            marginTop: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
          customStyleBackground={{
            backgroundColor: 'transparent',
          }}
          hasBackdrop={false}
        >

        </Modal>
      )} */}
    </>
  );
}

KYCSecondStep.propTypes = {
  jumpToNextPage: PropTypes.func,
  showLoader: PropTypes.bool,
  setShowLoader: PropTypes.func,
  setFormErrors: PropTypes.func,
  type: PropTypes.string,
};

export default KYCSecondStep;
