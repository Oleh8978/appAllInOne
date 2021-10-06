import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';

import styles from './DeviderText.styles';

export default function DividerText({
  textDivider,
  customStyle,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <View style={styles.line} />
      </View>
      <View style={{ ...styles.second, ...customStyle }}>
        <Text allowFontScaling={false} style={styles.textStyle}>
          {textDivider}
        </Text>
      </View>
      <View style={styles.third}>
        <View style={styles.line} />
      </View>
    </View>
  );
}

DividerText.propTypes = {
    textDivider: PropTypes.string,
};
