import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { DEVICE_WIDTH } from '../../../constants/constants';

import { view } from '../../../styles/mixins';
import styles from './Footer.styles';

export default function Footer({
  textFooter,
  onPress,
  customStyle,
  customStyleContainer,
}) {
  const marginBottom = DEVICE_WIDTH <= 360 ? 8 : 15;

  return (
    <SafeAreaView style={{ ...view, marginBottom, ...customStyle }}>
      <TouchableOpacity
        onPress={onPress}
        style={{ ...styles.button, ...customStyleContainer }}
      >
        <Text allowFontScaling={false} style={styles.textStyle}>
          {textFooter}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

Footer.propTypes = {
  textFooter: PropTypes.string,
};
