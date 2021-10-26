import React, { useState, useEffect } from 'react';
import {
View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import { TWO_FACTOR_AUTH } from '../../../../../constants/navigation/authenticationScreens';

import { KNOW_YOUR_CUSTOMER, NOTIFICATION_PAGE } from '../../../../../constants/navigation/userScreens';

import { MAIN_SCREN_2FA } from '../../../../../constants/navigation/twoFactorAuth';

import PageHeader from '../../../../components/PageHeader/PageHeader';
import BalanceDetailsComponent from '../../../../components/BalanceDetailsComponent/BalanceDetailsComponent';
import CardChard from '../../../../components/CardChart/CardChart';
import PosibilityCard from '../../../../components/posibilityCard/posibilityCard';

import CurlyLineImage from '../../../../../assets/svgs/CurlyLineImage';
import ArrowDown from '../../../../../assets/svgs/ArrowDown';
import ArrowUpImage from '../../../../../assets/svgs/ArrowUpImage';
import CheckImage from '../../../../../assets/svgs/CheckImage';

import store from '../../../../store';

import styles from './HomeScreen.styles';
import colors from '../../../../../styles/colors';

const dataToBeRemoved = [
  {
    name: 'Earn',
    balance: '$0.00',
    button: 'Open',
  },
  {
    name: 'Borrow',
    balance: '$0.00',
    button: 'Open',
  },
  {
    name: 'Debit Card',
    balance: undefined,
    button: 'Get',
  },
  {
    name: 'Bonus',
    balance: '$75.00',
    button: 'Get',
  },
];

const priceChartToBeRemoved = [
  {
    type: 'BTC',
    name: 'Bitcoin',
    price: '$50,018.00',
    percentage: '+0,5%',
  },
  {
    type: 'ETH',
    name: 'Etherum',
    price: '$190.21',
    percentage: '+2,5%',
    percentage: '+57.7%',
  },
];

const dataPosibilities = [
  {
    image: require('../../../../../assets/images/EarnMoney.png'),
    name: 'Start Earning',
    text: 'Start earning up to 12% APR, paid out daily!',
  },
  {
    image: require('../../../../../assets/images/BorrowMoney.png'),
    name: 'Borrow Cash',
    text: 'Borrow cash or Stablecoins from 6.9% APR, without selling your crypto.',
  },
  {
    image: require('../../../../../assets/images/RhinoCard.png'),
    name: 'Rhino Card',
    text: 'Free Rhino Card with Instant Access to Your Credit Line',
  },
  {
    image: require('../../../../../assets/images/ReferFriends.png'),
    name: 'Refer Friend',
    text: 'Get $20 in BTC for every friend you refer ',
  },
];

export default function HomeScreen({ navigation }) {
  const [credit, setCredit] = useState('42.000');
  const [isBalanceOpened, setIsBalanceOpened] = useState(false);

    const TWOFA = () => {
        navigation.navigate(TWO_FACTOR_AUTH);
    };

    const KYC = () => {
        navigation.navigate(KNOW_YOUR_CUSTOMER);
    };

  return (
    <LinearGradient
      style={{ height: '100%', width: '100%', minHeight: '100%' }}
      colors={[
        colors.lightBlue,
        colors.darkBlue,
        colors.darkBlue,
        colors.darkBlue,
      ]}
    >
      <PageHeader
        text="Available Balance"
        credit={credit}
        isHomeScreen
        navigation={navigation}
        rightFunct={() => navigation.navigate(NOTIFICATION_PAGE)}
      />
      <ScrollView
        style={styles.mainWrapper}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      >
        <View style={{ marginLeft: 0, marginRight: 15 }}>
          {isBalanceOpened === true
            ? (
              <TouchableOpacity
                onPress={() => setIsBalanceOpened(!isBalanceOpened)}
                style={styles.balanceClickOpened}
              >
                <View style={styles.blockOpened}>
                  <Text style={styles.balanceClickLeft}>
                    Balance Details
                  </Text>
                  <ArrowUpImage />
                </View>
                <View style={{ marginTop: 16 }}>
                  {dataToBeRemoved.map((item) => <BalanceDetailsComponent data={item} key={Math.random()} />)}
                </View>
              </TouchableOpacity>
            )
          : (
            <TouchableOpacity
              onPress={() => setIsBalanceOpened(!isBalanceOpened)}
              style={styles.balanceClick}
            >
              <Text style={styles.balanceClickLeft}>
                Balance Details
              </Text>
              <ArrowDown />
            </TouchableOpacity>
            )}
        </View>
        <View style={styles.priceChart}>
          <Text style={styles.priceChartText}>
            Price Charts
          </Text>
          <ScrollView
            style={styles.ItemsChartContainer}
            nestedScrollEnabled
            horizontal
          >
            {priceChartToBeRemoved.map((item) => <CardChard data={item} key={Math.random()} />)}
          </ScrollView>
        </View>
        <View
          style={{
               borderBottomColor: colors.greyLight,
               borderBottomWidth: 2,
               marginRight: 20,
               height: 2,
              }}
        />
        <Text style={styles.TextUserIdentity}>
          Complete steps below and get $20 in BTC!
        </Text>
        <ScrollView
          style={{
             flexDirection: 'row',
             height: 120,
            }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={{ ...styles.wrapperItemsSteps, width: 115, height: 114 }} onPress={() => KYC()}>
            <LinearGradient
              colors={Number(store.user.KYCProgress) <= 2 ? [
                 colors.lightBlue,
                 colors.darkBlue,
                //  colors.white,
                //  colors.white,
               ] : [colors.white, colors.white]}
              style={styles.containerItemSteps}
            >
              <View style={{
                  width: 20,
                  height: 20,
                  borderRadius: 2,
                  borderWidth: 1,
                  borderColor: Number(store.user.KYCProgress) >= 2 ? colors.lightBlue : colors.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  marginRight: 0,
                  }}
              >
                {Number(store.user.KYCProgress) >= 2 && <CheckImage />}
              </View>
              <Text
                style={{
                  ...styles.kycTextTop,
                  color: Number(store.user.KYCProgress) >= 2 ? colors.lightBlue : colors.white,
                  }}
              >
                KYC
              </Text>
              <Text
                style={{
                  ...styles.KYCTextBottom,
                  color: Number(store.user.KYCProgress) >= 2 ? colors.lightBlue : colors.white,
                  }}
              >
                verefication
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.wrapperItemsSteps, width: 115, height: 114 }}>
            <LinearGradient
              colors={[
                 colors.lightBlue,
                 colors.darkBlue,
                //  colors.white,
                //  colors.white,
               ]}
              style={styles.containerItemSteps}
            >
              <View style={{
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: colors.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  marginRight: 0,
                  }}
              >
                {/* <CheckImage /> */}
              </View>
              <Text
                style={{
                  marginLeft: 0,
                  marginTop: 'auto',
                  marginBottom: 0,
                  marginRight: 'auto',
                  fontWeight: 'bold',
                  fontSize: 15,
                  fontFamily: 'Gotham Pro',
                  color: colors.white,
                  }}
              >
                Bank
              </Text>
              <Text
                style={{
                  marginLeft: 0,
                  marginBottom: 0,
                  marginRight: 'auto',
                  fontWeight: 'bold',
                  fontSize: 15,
                  fontFamily: 'Gotham Pro',
                  color: colors.white,
                  }}
              >
                connection
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.wrapperItemsSteps, width: 115, height: 114 }} onPress={() => TWOFA()}>
            <LinearGradient
              colors={[
                 colors.lightBlue,
                 colors.darkBlue,
                //  colors.white,
                //  colors.white,
               ]}
              style={styles.containerItemSteps}
            >
              <View style={{
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  borderColor: colors.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  marginRight: 0,
                  borderRadius: 2,
                  }}
              >
                {/* <CheckImage/> */}
              </View>
              <Text
                style={{
                  marginLeft: 0,
                  marginTop: 'auto',
                  marginBottom: 0,
                  marginRight: 'auto',
                  fontWeight: 'bold',
                  fontSize: 15,
                  fontFamily: 'Gotham Pro',
                  color: colors.white,
                  }}
              >
                2-step
              </Text>
              <Text
                style={{
                  marginLeft: 0,
                  marginBottom: 0,
                  marginRight: 'auto',
                  fontWeight: 'bold',
                  fontSize: 15,
                  fontFamily: 'Gotham Pro',
                  color: colors.white,
                  }}
              >
                verefication
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
               borderBottomColor: colors.greyLight,
               borderBottomWidth: 2,
               marginTop: 30,
               marginRight: 20,
               height: 2,
              }}
        />
        <View style={{
            marginTop: 30,
            marginRight: 20,
            height: 900,
          }}
        >
          {dataPosibilities.map((item) => <PosibilityCard data={item} key={Math.random()} />)}
        </View>
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
