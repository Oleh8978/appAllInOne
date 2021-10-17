import React from 'react';
import PropTypes from 'prop-types';

import {
  Text, TouchableOpacity, View,
} from 'react-native';

import Loader from '../Loader/Loader';

import ArrowNext from '../../../assets/svgs/ArrowNext';
import EmailImage from '../../../assets/svgs/EmailImage';
import UploadImage from '../../../assets/svgs/UploadImage';

import colors from '../../../styles/colors';
import styles from './DefaultButton.styles';

import { DEVICE_WIDTH } from '../../../constants/constants';

export default function DefaultButton({
  title,
  onPress,
  isLight = false,
  disabled,
  customStyles,
  textStyles,
  isArrowNext = false,
  showLoader = false,
  isSmall = false,
  isEmail = false,
  isUpload = false,
}) {
  const press = async () => {
    if (onPress && !showLoader) {
      await onPress();
    }
  };

  const buttonColor = () => {
    if (disabled) {
      return colors.lightGreen;
    }

    if (!disabled && isLight === true) {
      return colors.white;
    }

    if (!disabled && isLight === false) {
      return colors.darkGreen;
    }
  };

  const rightBodyProvider = () => {
    if (isArrowNext && showLoader === false) {
      return (<ArrowNext />);
    }

    if (showLoader) {
      return (
        <View style={styles.loader}>
          <Loader />
        </View>
);
    }

    if (isUpload) {
      return <UploadImage />;
    }

    return <></>;
  };

  const leftBodyProvider = () => {
    if (isEmail) {
      return <EmailImage style={{ marginTop: 1, marginRight: -1 }} />;
    }
    return <></>;
  };

  const textColor = disabled ? colors.lightBlue : colors.darkBlue;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        width: '100%',
        backgroundColor: buttonColor(),
        ...customStyles,
      }}
      onPress={press}
      disabled={disabled}
    >
      {leftBodyProvider()}
      <Text
        allowFontScaling={false}
        style={{
          color: textColor,
          fontWeight: 'bold',
          fontSize:
            DEVICE_WIDTH <= 375 ? (isSmall ? 12 : 16) : isSmall ? 16 : 18,
          ...textStyles,
        }}
      >
        {title}
      </Text>
      {rightBodyProvider()}
    </TouchableOpacity>
  );
}
DefaultButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isLight: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyles: PropTypes.object,
  textStyles: PropTypes.object,
  showLoader: PropTypes.bool,
  isSmall: PropTypes.bool,
  ArrowNext: PropTypes.bool,
};
