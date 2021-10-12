import React from 'react';

import { ScrollView, Text, View, Image } from 'react-native';

import Header from '../../../../components/Header/Header';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import { BORROW, BORROW_PAGES } from '../../../../../constants/navigation/userScreens';

import colors from '../../../../../styles/colors';
import styles from './Congrats.styles';

export default function Congrats({ navigation, route }) {

    const body = () => {

        if (route?.params?.type === 'credit') {
          return (
          <>
            <Image 
            source={require('../../../../../assets/images/CreditLine.png')} 
            style={{width: '100%', height: 300}} 
            />
            <Text style={styles.mainText}>
                Congradulations!
            </Text>
            <Text style={styles.subText}>
                Your money has been 
                successfully tranfered
            </Text>
           </>)
        }

        return  (
          <>
            <Image 
             source={require('../../../../../assets/images/LoanLine.png')} 
             style={{width: '100%', height: 300}} 
            />
            <Text style={styles.mainText}>
                Congradulations!
            </Text>
            <Text style={styles.subText}>
                Your Loan has been approved.
            </Text>
         </>)
    }

    const moveForward = () => {
        return navigation.navigate(BORROW,
            { screen: BORROW_PAGES })
    }
    
  return (
    <View style={{height: '100%' , width: '100%'}}>
      <Header
        isBlue={true}
        topText=""
        navigation={navigation}
      />
      <ScrollView style={styles.body}>
          <View style={styles.itemsContainer}>
            {body()}
            <DefaultButton 
             title={'OK'} 
             onPress={() => moveForward()} 
             customStyles={{marginTop: 'auto', marginBottom: 75 }}
            />
        </View>
      </ScrollView>
      <FooterBackground />
    </View>
  );
}
