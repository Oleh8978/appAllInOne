import React, { useEffect, useState } from 'react';
import {
View, ScrollView, Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../../components/Header/Header';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import KeyboardNormalizer from '../../../../HOCs/KeyboardNormalizerFolding';

import getPresets from '../../../../../services/getPresets';
import getWallets from '../../../../../services/getWallets';
import KYCStatus from '../../../../../services/getKycStatus';

import ResizebleCard from '../../../../components/ResizebleCard/ResizebleCard';
import colors from '../../../../../styles/colors';

import styles from './CreditLine.styles';

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

function CreditLine({ navigation }) {
  customHook(navigation);
  const [wallets, setWallets] = useState([]);
  const [creditLine, setCreditLIne] = useState({
    creditLinePerc: 0,
    aprValue: 0,
  });

  const getDataWallets = async () => {
    const preset = await getPresets();
    const data = await getWallets();
    setCreditLIne({
      creditLinePerc: preset.creditLine.thresholds.initial,
      aprValue: preset.creditLine.rates.default,
    });
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
  }, []);

  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <Header
        topText="Request credit Line"
        customStyles={{ marginLeft: 60, marginRight: 'auto' }}
        navigation={navigation}
      />
      <ScrollView
        style={{ ...styles.mainBody }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.mainTopHeader}>
          Your Loan-to-Value persentage:
        </Text>
        <View style={styles.mainTopPlate}>
          <Text style={styles.mainTopPlateHeader}>
            {creditLine.creditLinePerc * 100}
            %
          </Text>
          <Text style={styles.mainTopPlateSubHeader}>
            {creditLine.aprValue * 100}
            % APR
          </Text>
        </View>
        <View style={styles.mainBottomPlate}>
          <Text style={styles.mainBottomPlateHeader}>
            Choose collateral wallet:
          </Text>
          {wallets.map((item) => (
            <ResizebleCard
              data={item}
              key={Math.random()}
              navigation={navigation}
              typeCard="credit"
              perst={creditLine.creditLinePerc}
            />
))}
        </View>
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}

export default KeyboardNormalizer(CreditLine);
