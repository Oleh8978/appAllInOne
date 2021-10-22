import React from 'react';

import {
 ScrollView, Text, View, Image,
} from 'react-native';

import Header from '../../../../components/Header/Header';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import {
 BORROW, BORROW_PAGES, HOME, HOME_PAGE,
} from '../../../../../constants/navigation/userScreens';
import { USER } from '../../../../../constants/navigation/navigators';

import colors from '../../../../../styles/colors';
import styles from './Congrats.styles';

export default function Congrats({ navigation, route }) {
  console.log('route?.params?.type ', route?.params?.type);
    const body = () => {
        if (route?.params?.type === 'credit') {
          return (
            <>
              <Image
                source={require('../../../../../assets/images/CreditLine.png')}
                style={{ width: '100%', height: 300 }}
              />
              <Text style={styles.mainText}>
                Congradulations!
              </Text>
              <Text style={styles.subText}>
                Your money has been
                successfully tranfered
              </Text>
            </>
);
        }

        if (route?.params?.type === 'loan') {
          return (
            <>
              <Image
                source={require('../../../../../assets/images/LoanLine.png')}
                style={{ width: '100%', height: 300 }}
              />
              <Text style={styles.mainText}>
                Congradulations!
              </Text>
              <Text style={styles.subText}>
                Your Loan has been approved.
              </Text>
            </>
          );
        }

        return (
          <>
            <Image
              source={require('../../../../../assets/images/LoanLine.png')}
              style={{ width: '100%', height: 300 }}
            />
            <Text style={styles.mainText}>
              Congratulations!
            </Text>
            <Text style={styles.subText} />
          </>
        );
    };

    const moveForward = () => {
      if (route?.params?.type === 'loan' || route?.params?.type === 'credit') {
        return navigation.navigate(BORROW,
          { screen: BORROW_PAGES });
      }

      return navigation.navigate(USER,
        { screen: HOME_PAGE,
          params: {
          screen: HOME,
        } });
    };

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <Header
        isBlue
        topText=""
        navigation={navigation}
      />
      <ScrollView style={styles.body}>
        <View style={styles.itemsContainer}>
          {body()}
          <DefaultButton
            title="OK"
            onPress={() => moveForward()}
            customStyles={{ marginTop: 'auto', marginBottom: 75 }}
          />
        </View>
      </ScrollView>
      <FooterBackground />
    </View>
  );
}
