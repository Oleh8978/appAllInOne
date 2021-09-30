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

import DefaultButton from '../../../../components/DefaultButton/DefaultButton';

import { DEVICE_WIDTH, ID_DOCUMENTS_LIST } from '../../../../../constants/constants';

import KYCImageDoc from '../../../../../assets/svgs/KYCImageDoc';
import styles from '../KnowYourCustomer.styles';

function KYCtheThirdStep({ jumpToNextPage, showLoader, setShowLoader, setFormErrors, title, onPress}) {


  const uploadUpButton = () => {
    console.log('pop up opened')
  }

  const buttonFunction = (item) => {
      console.log('item ', item)
    onPress(item)
    jumpToNextPage()
  }

  const sidesCounter = (side) => {
      if (side === 'front') {
          return <Text style={{...styles.sideText}}>Front side</Text>
      }

      if (side === 'back') {
          return <Text style={{...styles.sideText}}>Back side</Text>
      }

      return <></>
  }

  return (
    <>
         <Text style={{...styles.headText}}>{title}</Text>
         {ID_DOCUMENTS_LIST.map( item => {
             return <DefaultButton 
                    title={item.name}
                    isArrowNext 
                    customStyles={{marginTop: 15}}
                    onPress={() => buttonFunction(item)}
                    key={item.value}
                    />})}
        {/* // <>
        //  <Text style={{...styles.headText}}>{selectedType.name === 'Other' ? 'Please upload selected documents' : `Upload photos of your ${selectedType.name}:`}</Text>
         <View style={{...styles.kycUploadContainer}}>
             <KYCImageDoc />
             <DefaultButton 
                    title={'Upload'}
                    isUpload 
                    customStyles={{marginTop: 15}}
                    onPress={uploadUpButton}
                    customStyles={{...styles.kycUpload}}
            />
            <>{sidesCounter('front')}</>
         </View>
        </>} */}
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
