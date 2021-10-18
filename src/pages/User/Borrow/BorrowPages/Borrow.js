import React, { useEffect, useState } from 'react';
import {
View, ScrollView, Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PageHeader from '../../../../components/PageHeader/PageHeader';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';
import Card from '../../../../components/Card/Card';

import CurlyLineImage from '../../../../../assets/svgs/CurlyLineImage';

import getTargets from '../../../../../services/getTargets';
import createPlaidToken from '../../../../../services/createPlaidToken';
import KYCStatus from '../../../../../services/getKycStatus';
import Store from '../../../../store/index';

import {
  BORROW,
  INFO,
  INFO_LOAN,
  INFO_CREDIT,
  HOME,
  HOME_PAGE,
  KNOW_YOUR_CUSTOMER,
} from '../../../../../constants/navigation/userScreens';
import { USER } from '../../../../../constants/navigation/navigators';

import styles from './Borrow.styles';
import colors from '../../../../../styles/colors';

const customHook = (navigation) => {
  const getKYCData = async () => {
    const data = await KYCStatus();
    console.log('data ', data.tier)
    if (Number(data.tier) !== 4) {
      navigation.navigate(HOME_PAGE, { screen: KNOW_YOUR_CUSTOMER });
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getKYCData();
    });
    return unsubscribe;
  }, [navigation]);
};

export default function Borrow({ navigation }) {
  customHook(navigation);
  const [receivedBorrow, setReceivedBorrow] = useState([]);
  const [creditUtilized, setCreditUtilized] = useState(0);
  const [plaidToken, setPlaidToken] = useState('');
  const [error, setError] = useState('');

  const fetchData = async () => {
    const data = await getTargets();
    setReceivedBorrow(data.targets);
    setCreditUtilized(data.utilized);
  };

  useEffect(() => {
    (async () => {
      try {
        setPlaidToken((await createPlaidToken()).token);
      } catch (e) {
        setError(e);
      }
    })();
  }, []);

  // if (tier !== null && tier.tier !== 4) {
  //   navigation.navigate(BORROW, { screen: INFO, params: { type: typeLine } });
  // }

  useEffect(() => {
      fetchData();
  }, []);

  const isAnyCredit = () => {
    if (receivedBorrow && receivedBorrow.filter((item) => item.type === 'creditLine').length > 0) {
      return {
        available: creditUtilized,
        text: 'Credit utilized',
      };
    }
    return {
      available: 0,
      text: 'Available credit',
    };
  };

  const moveForward = (typeLine) => {
    navigation.navigate(BORROW, { screen: INFO, params: { type: typeLine } });
  };

  const moveForwardLineInfo = (type) => {
    navigation.navigate(BORROW, { screen: type === 'loan' ? INFO_LOAN : INFO_CREDIT });
  };

  const openLoan = {
    type: 'openLoan',
  };

  const openCredit = {
    type: 'openCredit',
  };

  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <CurlyLineImage style={{ ...styles.imageTop }} />
      <PageHeader text={isAnyCredit().text} credit={isAnyCredit().available} />
      { receivedBorrow && receivedBorrow.length === 0 || !receivedBorrow
       ? (
         <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>
           <Card typeOfInfo="credit" onPress={() => moveForward('credit')} />
           <Card typeOfInfo="loan" onPress={() => moveForward('loan')} />
         </ScrollView>
       ) : (
         <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>

           <View style={styles.topContainer}>
             <Text style={styles.headerText}>
               Active credits and loans
             </Text>
             {receivedBorrow && receivedBorrow.map((item) => (
               <Card
                 data={item}
                 onPress={() => moveForwardLineInfo(item.type)}
                 key={Math.random()}
                 token={plaidToken}
               />
))}
           </View>

           <View style={styles.bottomContainer}>
             <Text style={styles.headerText}>
               Add more credit lines or loans
             </Text>
             <Card headerText="Credit Line" onPress={() => moveForward('credit')} />
             <Card headerText="Loan" typeOfInfo="loan" onPress={() => moveForward('loan')} />
           </View>

         </ScrollView>
       )}
      <FooterBackground />
    </LinearGradient>
  );
}
