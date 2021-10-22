import React, { useState } from 'react';
import {
 View, Text, TouchableOpacity, Image,
} from 'react-native';
import { openLink } from 'react-native-plaid-link-sdk';

import ArrowNext from '../../../assets/svgs/ArrovNext';
import CheckGreen from '../../../assets/svgs/CheckGreenImage';
import safe from '../../../assets/images/Safe.png';

import Bitcoin from '../../../assets/svgs/Btc';
import EtherumCoin from '../../../assets/svgs/EtherumCoin';
import LiteCoin from '../../../assets/svgs/LiteCoin';
import USDCoin from '../../../assets/svgs/USDCoin';
import TrueUSDT from '../../../assets/svgs/TrueUSDT';

import repayCredit from '../../../services/repayCredit';
import getPlaidAccounts from '../../../services/getPlaidAccounts';

import Store from '../../store/index';

import styles from './Card.styles';
import colors from '../../../styles/colors';

export default function Card({
    onPress = () => {},
    headerText,
    typeOfInfo = 'credit',
    data = {},
    token = '',
}) {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  console.log('Store.wallets.exchangeRates ', Store.wallets.exchangeRates)

  const repayCreditFunc = async (targetType, targetId, amount) => {
    await repayCredit(targetType, targetId, amount);
  };

  const sendPayment = async (targetType, targetId, amount) => {
    try {
      await openLink({
        tokenConfig: { token },
        onSuccess: async ({ publicToken }) => {
          try {
            const accounts = (await getPlaidAccounts(publicToken))?.map(
              (account) => ({
                name: account.name,
                value: account.account_id,
              }),
            );
            await repayCreditFunc(targetType, targetId, amount);
          } catch (e) {
            setError(e.message);
          }
        },
      });
    } catch (e) {
      setError(e);
    }
  };

  const coinImage = (type) => {
    switch (type) {
        case 'BTC':
            return <Bitcoin />;
        case 'Etherum':
            return <EtherumCoin />;
        case 'Litecoin':
            return <LiteCoin />;
        case 'USD Coin':
            return <USDCoin />;
        case 'TrueUSD':
            return <TrueUSDT />;
    }
  };

  const body = (data) => {
    if (Object.keys(data).length === 0) {
      return (
        <View style={{ ...styles.informationBody }}>
          <Text style={{ ...styles.informationBodyHeadTxtx }}>
            Grow your portfolio exponentially while keeping your crypto safe.
          </Text>
          <View style={styles.informationBodyBottom}>
            <View style={styles.informationBodyBottomLeft}>

              <View style={styles.checkRow}>
                <CheckGreen />
                <Text style={styles.checkText}>
                  Instant approval
                </Text>
              </View>

              <View style={styles.checkRow}>
                <CheckGreen />
                <Text style={styles.checkText}>
                  No credit checks
                </Text>
              </View>

              <View style={styles.checkRow}>
                <CheckGreen />
                <Text style={styles.checkText}>
                  {typeOfInfo === 'credit' ? 'No origination or hidden fees' : 'No minimum collateral required'}
                </Text>
              </View>

            </View>
            <View style={styles.informationBodyBottomRight}>
              <Image source={safe} style={{ ...styles.Image }} />
            </View>
          </View>
        </View>
        );
    }

    if (Object.keys(data).length !== 0) {
      return (
        <View style={{ ...styles.informationBody }}>
          <View style={styles.bottomBody}>
            <View style={styles.bodyBottomLeft}>

              <View style={styles.containerTop}>
                <Text style={styles.payOutText}>
                  {data.type === 'creditLine' ? 'To pay of: ' : 'Loan Avaliable'}
                </Text>
                <Text style={styles.amountText}>
                  $
                  {data.range.max}
                </Text>
              </View>

              <View style={{ ...styles.containerBottom, flexDirection: 'row', alignItems: 'center' }}>
                {coinImage('BTC')}
                <View
                  style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: 5,
                      }}
                >
                  <Text style={{ flexDirection: 'row', color: colors.grey }}>
                    {'BTC'}
                    {' '}
                    {`${parseFloat(Store.wallets.exchangeRates.USD).toFixed(6)}`}
                  </Text>
                  <Text style={{ color: colors.grey }}>
                    {'$'}
                    {`${parseFloat(Store.wallets.exchangeRates.BTC.sell).toFixed(2)}`}
                  </Text>
                </View>
              </View>

            </View>

            <View style={styles.bodyBottomRight}>

              <View style={{ ...styles.containerTop, height: 70 }}>
                <Text style={{ ...styles.payOutText, marginLeft: 'auto', marginRight: 0 }}>
                  Next Payment
                </Text>
                <Text style={{ ...styles.amountText, marginLeft: 'auto', marginRight: 0 }}>
                  $
                  25.59
                </Text>
                <Text
                  style={{ ...styles.payOutText,
                          marginLeft: 'auto',
                          marginRight: 0,
                          fontSize: 12,
                          marginTop: 5 }}
                >
                  30.10.2021
                </Text>
              </View>

              <View
                style={{ ...styles.containerBottom,
                       justifyContent: 'center',
                       height: 40 }}
              >
                {/* TO DO CHANGE DATA TYPES  */}
                <TouchableOpacity style={styles.button} onPress={() => sendPayment(data.type, 'BTC', 25.59)}>
                  <Text style={styles.buttonText}>
                    Repay
                  </Text>
                </TouchableOpacity>

              </View>

            </View>

          </View>
        </View>
      );
    }

    return <></>;
  };

  const header = () => {
    if (data.type === 'creditLine') {
      return <Text>Credit Line </Text>;
    }

    if (data.type === 'loan') {
      return (
        <Text>
          Loan
          {`${data.duration / 30 }`}
          {' '}
          months
        </Text>
);
    }

    if (!data.type && typeOfInfo === 'credit') {
      return <Text>Credit Line</Text>;
    }

    if (!data.type && typeOfInfo === 'loan') {
      return <Text>Loan</Text>;
    }
  };

  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <View style={styles.mainTop}>
        <Text style={styles.headerText}>
          {header()}
        </Text>
        <ArrowNext style={{ ...styles.mainTopArrow }} />
      </View>
      {body(data)}
    </TouchableOpacity>
  );
}
