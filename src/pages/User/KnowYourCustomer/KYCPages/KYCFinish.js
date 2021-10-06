import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
} from 'react-native';

import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import Indent from '../../../../components/Indent/Indent';

import { view } from '../../../../../styles/mixins';
import styles from '../KnowYourCustomer.styles';

function KYCFinish({ jumpToNextPage }) {
  return (
    <>
      <View style={view}>
        <Image style={{ ...styles.topImage }} source={require('../../../../../assets/images/wellDoneKyc.png')} />
        <Text allowFontScaling={false} style={{ ...styles.description, marginTop: 10, marginBottom: 8, fontSize: 32 }}>
          Well Done!
        </Text>
        <Text allowFontScaling={false} style={{ ...styles.description, marginTop: 0, marginBottom: 80, textAlign: 'center' }}>
          As soon as we verify your documents,
          {' '}
          {'\n'}
          {' '}
          we will send you a notification
        </Text>
      </View>
      <Indent height={10} />
      <DefaultButton
        title="Finish Verification"
        onPress={jumpToNextPage}
      />
    </>
  );
}

KYCFinish.propTypes = {
  jumpToNextPage: PropTypes.func,
};

export default KYCFinish;
