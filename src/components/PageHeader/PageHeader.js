import * as React from 'react';
import {
View, Text, TouchableOpacity,
} from 'react-native';

import MenuLines from '../../../assets/svgs/MenuLines';
import Bell from '../../../assets/svgs/Bell';
import RhinoImage from '../../../assets/svgs/RhinoImage';
import HistoryClockImage from '../../../assets/svgs/HistoryClockImage';
import CreditCardImage from '../../../assets/svgs/CreditCardImage';
import DepositHome from '../../../assets/svgs/DepositHome';
import WithdrawHome from '../../../assets/svgs/WithdrawHome';
import FormInput from '../FormInput/FormInput';

import depositCrypto from '../../../services/depositCrypto';

import styles from './PageHeader.styles';
import colors from '../../../styles/colors';

function PageHeader({
  rightType = 'bell',
  isTrade = false,
  centerType = 'credit',
  credit = 0.00,
  menuFunc = () => {},
  rightFunct = () => {},
  text = 'Available credit',
  isHomeScreen = false,
  isEarn = false,
  isDebitCard = false,
  stylesMainblock = {},
}) {
  const onDeposit = async () => {
    await depositCrypto('BTC');
  };
  const centerBlock = (type) => {
    switch (type) {
      case 'credit':
        return (
          <View style={{ ...styles.centerBlockWrapper }}>
            <RhinoImage style={{ marginLeft: 'auto', marginRight: 'auto' }} />
            <Text style={{ ...styles.headerText }}>
              $
              {credit}
            </Text>
            <Text style={{ ...styles.subHeader }}>{text}</Text>
          </View>
              );
        case 'trade':
          return (
            <View style={{ ...styles.centerBlockWrapper }}>
              <RhinoImage style={{ marginLeft: 'auto', marginRight: 'auto' }} />
              <Text style={{ ...styles.subHeader }}>{text}</Text>
            </View>
          );
      default:
        return <></>;
    }
  };

  const rightBlock = (type) => {
    switch (type) {
      case 'bell':
        return (
          <TouchableOpacity onPress={rightFunct}>
            <Bell style={{ marginLeft: 'auto', marginRight: 0 }} />
          </TouchableOpacity>
        );
      default:
        return <></>;
    }
  };

  const bodyProvider = () => {
    if (isHomeScreen) {
      return (
        <View style={styles.mainBottom}>
          <TouchableOpacity
            style={styles.mainBottomLeft}
            onPress={() => { onDeposit(); }}
          >
            <DepositHome />
            <Text style={{ fontFamily: 'Gotham Pro' }}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainBottomRight}
            nPress={() => { console.log('chistory'); }}
          >
            <WithdrawHome />
            <Text style={{ fontFamily: 'Gotham Pro' }}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (isTrade) {
      return (<></>);
    }

    if (isEarn) {
      return (
        <View style={styles.mainBottom}>
          <TouchableOpacity
            style={{
          ...styles.mainBottomLeft,
          maxWidth: '100%',
          marginRight: 15,
          height: 72,
        }}
            onPress={() => { onDeposit(); }}
          >
            <DepositHome />
            <Text style={{ fontFamily: 'Gotham Pro' }}>Deposit</Text>
          </TouchableOpacity>
        </View>
);
    }

    return (
      <View style={styles.mainBottom}>
        <TouchableOpacity
          style={{ ...styles.mainBottomLeft, backgroundColor: colors.white }}
          onPress={() => { console.log('credit card'); }}
        >
          <CreditCardImage />
          <Text style={{ fontFamily: 'Gotham Pro' }}>Borrow</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{ ...styles.mainBottomRight, backgroundColor: 'rgba(256, 256, 256, 0.5)' }}
          nPress={() => { console.log('chistory'); }}
          disabled
        >
          <HistoryClockImage />
          <Text>Repay</Text>
        </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <View style={{ ...styles.main, ...stylesMainblock }}>

      <View style={styles.mainTop}>
        <View style={styles.leftBlock}>
          <TouchableOpacity onPress={menuFunc}>
            <MenuLines style={{ marginLeft: 0, marginRight: 'auto', display: `${isDebitCard ? 'none' : 'flex'}` }} />
          </TouchableOpacity>
        </View>
        <View style={styles.centerBlock}>
          {centerBlock(centerType)}
        </View>
        <View style={styles.rightBlock}>
          {rightBlock(rightType)}
        </View>
      </View>
      <>{bodyProvider()}</>
    </View>
  );
}

export default PageHeader;
