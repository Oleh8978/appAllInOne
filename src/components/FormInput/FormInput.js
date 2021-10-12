import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import EyeImage from '../../../assets/svgs/Eye';
import ArrowDown from '../../../assets/svgs/ArrowDown';

import styles from './FormInput.styles';
import colors from '../../../styles/colors';

export default function FormInput({
  isHide = false,
  editable = true,
  autoCorrect = false,
  autoFocus = false,
  keyboardType = 'default',
  autoCompleteType,
  autoCapitalize = 'none',
  set = () => {},
  value = '',
  textContentType,
  placeholder,
  onBlur = () => {},
  onFocus = () => {},
  error = '',
  style = {},
  textheaderCustomStyle = {},
  maxLength = 1000000,
  headerText = '',
  inputCustomStyle = {},
  isNeedArrow = false,
  customContainer = {},
  isMax = false,
  setMax = () => {},
}) {
  const isHideFunctional = isHide || autoCompleteType === 'password';
  const [isInvisible, setIsInvisible] = useState(isHideFunctional);
  const [inFocus, setInFocus] = useState(false);
  const [inputFont, setInputFont] = useState('OpenSans-ExtraBold');

  useEffect(() => setInputFont(value.length ? 'OpenSans-Regular' : 'OpenSans-ExtraBold'), [value]);

  const _onFocus = (e) => {
    onFocus(e);
    setInFocus(true);
    setInputFont('OpenSans-Regular');
  };

  const _onBlur = (e) => {
    onBlur(e);
    setInFocus(false);
    if (value.length) {
      setInputFont('OpenSans-Regular');
    } else {
      setInputFont('OpenSans-ExtraBold');
    }
  };

  return (
    <View style={{ ...styles.inputWrapper, ...customContainer }}>
      <Text
        allowFontScaling={false}
        style={{
          ...styles.placeholder,
          color: colors.white,
          ...textheaderCustomStyle,
        }}
      >
        {headerText}
      </Text>
      <TextInput
        autoFocus={autoFocus}
        autoCorrect={autoCorrect}
        editable={editable}
        keyboardType={keyboardType}
        secureTextEntry={isInvisible && (inFocus || !!value.length)}
        autoCompleteType={autoCompleteType}
        autoCapitalize={autoCapitalize}
        textContentType={textContentType}
        placeholder={inFocus || value.length ? '' : placeholder}
        onChangeText={(text) => set(text)}
        value={value}
        style={{
          ...styles.input,
          fontFamily: inputFont,
          ...style,
          ...inputCustomStyle,
          paddingRight: isMax ? 40 : 15,
          borderColor: error ? colors.red : colors.grey,
          borderWidth: error ? 3 : 1
        }}
        placeholderTextColor={colors.grey}
        onFocus={_onFocus}
        onBlur={_onBlur}
        maxLength={maxLength}
      />
      {isMax
        && (
        <TouchableOpacity style={styles.maxButton} onPress={() => { setMax(); }}>
          <LinearGradient
            colors={[colors.lightBlue, colors.darkBlue]}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              borderRadius: 8,
              }}
          >
            <Text style={{ color: colors.white, fontSize: 10, textAlign: 'center' }}>
              Max
            </Text>
          </LinearGradient>
        </TouchableOpacity>
)}
      {isNeedArrow && <ArrowDown style={styles.arrowDown} />}
      {/* <Text allowFontScaling={false} style={styles.error}>{error}</Text> */}
      {isHideFunctional && (
        <TouchableOpacity
          style={styles.eyeWrapper}
          onPress={() => setIsInvisible((prev) => !prev)}
        >
          <EyeImage />
        </TouchableOpacity>
      )}
      {!editable && (
        <TouchableWithoutFeedback onPress={onFocus}>
          <View style={{ position: 'absolute', width: '100%', height: '100%' }} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

FormInput.propTypes = {
  editable: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoFocus: PropTypes.bool,
  keyboardType: PropTypes.string,
  autoCompleteType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  set: PropTypes.func,
  value: PropTypes.string,
  textContentType: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  style: PropTypes.object,
  maxLength: PropTypes.number,
};
