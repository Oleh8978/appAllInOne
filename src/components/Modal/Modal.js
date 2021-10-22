import React from 'react';
import {
  View, Text, KeyboardAvoidingView, ImageBackground, Image,
} from 'react-native';

import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import colors from '../../../styles/colors';
import styles from './Modal.styles';

const ContentWrapper = ({ keyboardNormalizer, children }) => (keyboardNormalizer
  ? (
    <KeyboardAvoidingView behavior="position">
      {children}
    </KeyboardAvoidingView>
  )
  : <>{children}</>);

export default function ModalWrapper({
  children,
  close,
  header,
  swipeDirection = 'down',
  keyboardNormalizer = false,
  customStyleBackground = {},
  customStyleBody = {},
  isNeedLine = true,
  isWhite = false,
  hasBackdrop = true,
}) {
  return (
    <Modal
      testID="modal"
      swipeDirection={swipeDirection}
      propagateSwipe
      isVisible
      onSwipeComplete={close}
      onBackdropPress={close}
      style={{ ...styles.filterModal, ...customStyleBackground }}
      propagateSwipe
      hasBackdrop={hasBackdrop}
    >
      <ContentWrapper keyboardNormalizer={keyboardNormalizer}>
        <View style={{
            ...styles.filterModalBody,
            ...customStyleBody,
            marginBottom: 5,
            marginTop: 'auto',
            backgroundColor: isWhite ? colors.white : 'transparent',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            }}
        >
          <View style={styles.sliderWrapper}>
            {isNeedLine ? <View style={styles.slider} /> : <></>}
          </View>
          {header ? <Text allowFontScaling={false} style={styles.modalHeader}>{header}</Text> : null}
          {children}
        </View>
      </ContentWrapper>
    </Modal>
  );
}

ModalWrapper.ModalWrapper = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  swipeDirection: PropTypes.string,
  keyboardNormalizer: PropTypes.bool,
};
