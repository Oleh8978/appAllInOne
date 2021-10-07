import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PageHeader from '../../../../components/PageHeader/PageHeader';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';
import Card from '../../../../components/Card/Card';

import  CurlyLineImage from '../../../../../assets/svgs/CurlyLineImage';

import {
  BORROW,
  INFO
} from '../../../../../constants/navigation/userScreens';

import styles from './Borrow.styles';
import colors from '../../../../../styles/colors';


export default function Borrow({navigation}) {

  const navigate1 = () => {
    navigation.navigate(BORROW, {screen: INFO, params: { type: 'credit' } })
  }

  const navigate2 = () => {
    navigation.navigate(BORROW, {screen: INFO, params: { type: 'loan' } })
  }

  return (
    <LinearGradient 
     colors={[colors.darkGreen, colors.darkBlue]} 
     style={{height: '100%', width: '100%'}}
     start={{x: 0.0, y: 0.10}} end={{x: 1.0, y: 0.10}}
     >
       <CurlyLineImage style={{...styles.imageTop}}/>
       <PageHeader/>
       <ScrollView style={styles.mainWrapper}>
          <Card headerText={'Credit Line'} onPress={() => navigate1()}/>
          <Card headerText={'Credit Line'} typeOfInfo='loan' onPress={() => navigate2()}/>
       </ScrollView>
      <FooterBackground/>
    </LinearGradient>
  );
}
