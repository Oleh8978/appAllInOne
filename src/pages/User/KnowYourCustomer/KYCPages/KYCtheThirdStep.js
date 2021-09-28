import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
View,
ScrollView,
SafeAreaView,
Platform,
Modal,
TouchableOpacity,
TouchableWithoutFeedback,
Text,
} from 'react-native';

import styles from '../KnowYourCustomer.styles';

function KYCtheThirdStep({ type = 'natural_person', jumpToNextPage, showLoader, setShowLoader, setFormErrors, title }) {

  return (
    <>
    <Text style={{...styles.headText}}>{title}</Text>
     
    </>
  );
}

KYCtheThirdStep.propTypes = {
  jumpToNextPage: PropTypes.func,
  showLoader: PropTypes.bool,
  setShowLoader: PropTypes.func,
  setFormErrors: PropTypes.func,
  type: PropTypes.string,
};

export default KYCtheThirdStep;
