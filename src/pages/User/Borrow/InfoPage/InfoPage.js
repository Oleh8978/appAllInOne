import React, { useState } from 'react';
import {
View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../../components/Header/Header';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import CheckImage from '../../../../../assets/svgs/CheckImage';

import {
    BORROW,
    CREDIT,
    LOAN,
  } from '../../../../../constants/navigation/userScreens';

import colors from '../../../../../styles/colors';
import styles from './InfoPage.styles';

export default function InfoPage({
    route, navigation,
}) {
    const [isChecked, setIsChecked] = useState(false);
  console.log(route.params.type);
    const navigateForward = () => {
        if (route.params.type === 'credit') {
            return navigation.navigate(BORROW, { screen: CREDIT });
        }

        return navigation.navigate(BORROW, { screen: LOAN });
    };

  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <Header
        topText={route.params.type === 'credit' ? 'Credit Line' : ''}
        customStyles={{ marginLeft: 60, marginRight: 'auto' }}
        navigation={navigation}
      />
      <ScrollView
        style={{ ...styles.mainBody }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.containerTop}>
          <Text style={styles.textMain}>
            Full info about
            {route.params.type === 'credit' ? ' Credit' : ' Loan'}
          </Text>
        </View>
        <View style={styles.containerBottom}>
          <View style={styles.agreementContainer}>
            <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
              {isChecked ? <CheckImage /> : <></>}
            </TouchableOpacity>
            <Text>I have read, understood, and agree</Text>
          </View>
          <DefaultButton
            isArrowNext
            title="Open credit line "
            disabled={!isChecked}
            onPress={() => { navigateForward(); }}
          />
        </View>
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
