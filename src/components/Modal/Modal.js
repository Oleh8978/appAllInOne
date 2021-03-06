import React from 'react';
import {
  View, Text, KeyboardAvoidingView, ImageBackground, Image,
} from 'react-native';

import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
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
}) {
  return (
    <Modal
      testID="modal"
      swipeDirection={swipeDirection}
      isVisible
      onSwipeComplete={close}
      onBackdropPress={close}
      style={{ ...styles.filterModal, ...customStyleBackground }}
      propagateSwipe
    >
      <ContentWrapper keyboardNormalizer={keyboardNormalizer}>
        <View style={{
            ...styles.filterModalBody,
            ...customStyleBody,
            marginBottom: 5,
            marginTop: 'auto',
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
