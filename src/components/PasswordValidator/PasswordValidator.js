import React from 'react';
import { View, Text } from 'react-native';

import RadioButtomImageInactive from '../../../assets/svgs/RadioButtonInactiveImage';
import RadioButtomImageActive from '../../../assets/svgs/RadioButtonImage';

import colors from '../../../styles/colors';
import styles from './PasswordValidator.styles';

function PasswordValidator({ validators }) {
  return (
    <View style={styles.container}>

      <View style={styles.wrapper}>

        <View style={styles.requirmentWrapper}>
          {validators.length ? <RadioButtomImageActive style={{ marginTop: 1, marginRight: 1 }} /> : <RadioButtomImageInactive style={{ marginTop: 1, marginRight: 1 }} />}
          <Text style={{ ...styles.passwordRequirement }}>
            8 characters
          </Text>
        </View>

        <View style={styles.requirmentWrapper}>
          {validators.number ? <RadioButtomImageActive style={{ marginTop: 1, marginRight: 1 }} /> : <RadioButtomImageInactive style={{ marginTop: 1, marginRight: 1 }} />}
          <Text style={{ ...styles.passwordRequirement }}>
            1 number
          </Text>
        </View>

      </View>

      <View style={{ ...styles.wrapper, marginLeft: 15 }}>

        <View style={styles.requirmentWrapper}>
          {validators.upperCaseLetter ? <RadioButtomImageActive style={{ marginTop: 1, marginRight: 1 }} /> : <RadioButtomImageInactive style={{ marginTop: 1, marginRight: 1 }} />}
          <Text style={{ ...styles.passwordRequirement }}>
            1 uppercase letter
          </Text>
        </View>

        <View style={styles.requirmentWrapper}>
          {validators.lowercaseLetter ? <RadioButtomImageActive style={{ marginTop: 1, marginRight: 1 }} /> : <RadioButtomImageInactive style={{ marginTop: 1, marginRight: 1 }} />}
          <Text style={{ ...styles.passwordRequirement }}>
            1 lowercase letter
          </Text>
        </View>

      </View>

    </View>
  );
}

export default PasswordValidator;
