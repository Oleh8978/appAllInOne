import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView, View, Text, Image,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import statusBar from '../../../utilities/statusBar';
import Header from '../../components/Header/Header';

import DefaultButton from '../../components/DefaultButton/DefaultButton';

import { view } from '../../../styles/mixins';
import styles from './WellDone.styles';
import colors from '../../../styles/colors';

export default function WellDone({ route, navigation }) {
  useFocusEffect(() => statusBar('light'));

  return (
    <LinearGradient colors={[colors.lightBlue, colors.darkBlue]} style={{ ...view, height: '100%', justifyContent: 'flex-start' }}>
      <SafeAreaView style={styles.wrapper}>
        <Header
          topText=""
          navigation={navigation}
        />
        <View style={view}>
          <Image source={require('../../../assets/images/wellDoneImg.png')} style={styles.imageTop} />
          <Text allowFontScaling={false} style={styles.wellDoneText}>
            Well Done!
          </Text>
          <Text allowFontScaling={false} style={styles.wellDoneTextBottom}>
            New password has been saved
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <DefaultButton
            customStyles={{ marginVertical: 0, top: -20 }}
            title="Next"
            isArrowNext
            onPress={route.params.onPress}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

WellDone.propTypes = {
  route: PropTypes.shape(PropTypes.object),
};
