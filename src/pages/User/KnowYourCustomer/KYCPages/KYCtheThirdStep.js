import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import DefaultButton from '../../../../components/DefaultButton/DefaultButton';

import { ID_DOCUMENTS_LIST } from '../../../../../constants/constants';

import styles from '../KnowYourCustomer.styles';

function KYCtheThirdStep({ jumpToNextPage, showLoader, setShowLoader, setFormErrors, title, onPress }) {
  const buttonFunction = (item) => {
    onPress(item);
    jumpToNextPage();
  };

  return (
    <>
      <Text style={{ ...styles.headText }}>{title}</Text>
      {ID_DOCUMENTS_LIST.map((item) => (
        <DefaultButton
          title={item.name}
          isArrowNext
          customStyles={{ marginTop: 15 }}
          onPress={() => buttonFunction(item)}
          key={item.value}
        />
))}
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
