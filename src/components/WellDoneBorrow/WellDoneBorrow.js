import React from 'react';

import { ScrollView, Text, View, Image } from 'react-native';

import Header from '../../../../components/Header/Header';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import CreditImage from '../../../../../assets/images/Credit.png'

import colors from '../../../../../styles/colors';
import styles from './Congrats.styles';

export default function Congrats({ navigation, rout }) {
    
  return (
    <View style={{height: '100%' , width: '100%'}}>
      <Header
        isBlue={true}
        topText=""
        navigation={navigation}
      />
      <ScrollView style={styles.body}>
          <Image src={CreditImage} style={{width: 300, height: 300}} />
      <DefaultButton title={'OK'}/>
      </ScrollView>
      <FooterBackground />
    </View>
  );
}
