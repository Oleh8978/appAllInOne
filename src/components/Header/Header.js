import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView, View, Text, TouchableOpacity,
} from 'react-native';

import ChevronLeftWhiteImage from '../../../assets/svgs/ChevronLeftWhite';
import ChevronLeftBlue from '../../../assets/svgs/ChevronLeftBlue';
import Bell from '../../../assets/svgs/Bell';

import colors from '../../../styles/colors';
import styles from './Header.styles';

export default function Header({
  navigation,
  topText,
  goBack = true,
  goBackFunction = () => navigation.goBack(),
  deviceMarginTop,
  customStyles,
  isBlue = false,
  mainCustomStyle,
  isBell = false,
}) {
  return (
    <SafeAreaView style={{ ...styles.wrapper, marginTop: deviceMarginTop, ...mainCustomStyle }}>
      <View style={styles.header}>
        {goBack && (
          <TouchableOpacity style={styles.backArrow} onPress={goBackFunction}>
            {isBlue ? <ChevronLeftBlue /> : <ChevronLeftWhiteImage />}
          </TouchableOpacity>
        )}
        <Text
          allowFontScaling={false}
          style={{
            ...styles.topText,
            color: colors.white,
            ...customStyles,
           }}
        >
          {topText}
        </Text>
        {
          isBell && (
          <View
            style={{ ...styles.bellContainer }}
          >
            <View style={{ ...styles.numberContainer }}>
              <Text style={{ ...styles.numberText }}>
                3
              </Text>
            </View>
            <Bell />
          </View>
)
        }
      </View>
    </SafeAreaView>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  topText: PropTypes.string,
  bottomText: PropTypes.string,
  goBack: PropTypes.bool,
  goBackFunction: PropTypes.func,
  deviceMarginTop: PropTypes.number,
};
