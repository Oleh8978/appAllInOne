import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';

import styles from './DeviderText.styles';

export default function DeviderText({
  textDevider,
  customStyle,
}) {
  return (
    <View style={styles.constainer}>
      <View style={styles.first}>
        <View style={styles.line} />
      </View>
      <View style={{ ...styles.second, ...customStyle }}>
        <Text allowFontScaling={false} style={styles.textStyle}>
          {textDevider}
        </Text>
      </View>
      <View style={styles.third}>
        <View style={styles.line} />
      </View>
    </View>
  );
}

DeviderText.propTypes = {
    textDevider: PropTypes.string,
};
