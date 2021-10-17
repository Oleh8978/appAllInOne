import React, { useState, useEffect } from 'react';
import {
View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../../components/Header/Header';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';
import ResizebleCard from '../../../../components/ResizebleCard/ResizebleCard';
import CardMonth from '../../../../components/CardMonth/CardMonth';

import getTargets from '../../../../../services/getTargets';

import getPresets from '../../../../../services/getPresets';
import getWallets from '../../../../../services/getWallets';

import styles from './Loan.styles';
import colors from '../../../../../styles/colors';

import KYCStatus from '../../../../../services/getKycStatus';

import {
  HOME,
  HOME_PAGE,
} from '../../../../../constants/navigation/userScreens';

const customHook = (navigation) => {
  const getKYCData = async () => {
    const data = await KYCStatus();

    if (data.tier !== 4) {
      navigation.navigate(HOME_PAGE, { screen: HOME });
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getKYCData();
    });
    return unsubscribe;
  }, [navigation]);
};

const data = [
  {
    id: 1,
    data: '6 month',
    type: false,
    days: '6m',
  },
  {
    id: 2,
    data: '12 month',
    type: false,
    days: '12m',
  },
  {
    id: 3,
    data: '24 month',
    type: false,
    days: '24m',
  },
];

const data2 = [
  {
    data: '25%',
    subData: '2% APR',
    type: 'current',
  },
  {
    data: '35%',
    subData: '8% APR',
    type: '',
  },
  {
    data: '50%',
    subData: '12% APR',
    type: '',
  },
];

export default function Loan({ navigation }) {
  customHook(navigation);
  const [wallets, setWallets] = useState([]);
  const [monthsData, setMonthsData] = useState([]);
  const [daysSelected, setDaysSelected] = useState('6m');
  const [loans, setLoans] = useState([]);

  const getDataWallets = async () => {
    const preset = await getPresets();
    const data = await getWallets();
    const arr = [];
    Object.values(preset).map((item) => {
      if (Object.values(preset).indexOf(item) !== 0) {
        if (Object.values(preset).indexOf(item) === 1) {
          arr.push({
            id: Object.values(preset).indexOf(item),
            data: `${String(Number(item.thresholds.initial) * 100) }%`,
            subData: `${String(Number(item.rates.default) * 100) }% APR`,
            type: true,
          });
        } else {
          arr.push({
            id: Object.values(preset).indexOf(item),
            data: `${String(Number(item.thresholds.initial) * 100) }%`,
            subData: `${String(Number(item.rates.default) * 100) }% APR`,
            type: false,
          });
        }
      }
    });
    setLoans(arr);
    setWallets(dataArrFormatter(data));
  };

  const dataArrFormatter = (obj) => {
    const arr = [];
    for (const [key, value] of Object.entries(obj)) {
      arr.push({ coin: key, data: value });
    }
    return arr;
  };

  useEffect(() => {
    getDataWallets();

    if (monthsData.length === 0) {
      data[0].type = true;
      setMonthsData(data);
    }
  }, []);

  const selectMonth = (item) => {
    if (item.id === 1) {
      monthsData.map((item) => item.type = false);
      monthsData[0].type = true;
    }

    if (item.id === 2) {
      monthsData.map((item) => item.type = false);
      monthsData[1].type = true;
    }

    if (item.id === 3) {
      monthsData.map((item) => item.type = false);
      monthsData[2].type = true;
    }

    if (item.id === 1) {
      loans.map((item) => item.type = false);
      setDaysSelected('6m');
      loans[0].type = true;
    }

    if (item.id === 2) {
      setDaysSelected('12m');
      loans.map((item) => item.type = false);
      loans[1].type = true;
    }

    if (item.id === 3) {
      setDaysSelected('24m');
      loans.map((item) => item.type = false);
      loans[2].type = true;
    }

    setLoans(loans);
    setMonthsData(monthsData);
  };

  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <Header
        navigation={navigation}
        topText="Request for loan"
      />
      <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.textHeader}>
          Choose term for loan
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {monthsData.map((item) => <CardMonth data={item} key={Math.random()} func={selectMonth} />)}
        </View>
        <Text style={styles.textHeader}>
          Your Loan-to-Value persentage:
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {loans.map((item) => <CardMonth data={item} key={Math.random()} func={selectMonth} />)}
        </View>
        <View style={styles.mainBottomPlate}>
          <Text style={styles.textHeader}>
            Choose collateral wallet:
          </Text>
          {wallets.map((item) => (
            <ResizebleCard
              data={item}
              key={Math.random()}
              navigation={navigation}
              duration={daysSelected}
              typeCard="loan"
            />
))}
        </View>
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
