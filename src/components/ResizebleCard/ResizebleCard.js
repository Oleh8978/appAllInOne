import React, { useState } from 'react';
import {
 View, Text, TouchableOpacity, Image,
} from 'react-native';

import FormInput from '../FormInput/FormInput';
import DefaultButton from '../DefaultButton/DefaultButton';

import done from '../../../assets/images/done.png';

import Bitcoin from '../../../assets/svgs/Btc';
import EtherumCoin from '../../../assets/svgs/EtherumCoin';
import LiteCoin from '../../../assets/svgs/LiteCoin';
import USDCoin from '../../../assets/svgs/USDCoin';
import TrueUSDT from '../../../assets/svgs/TrueUSDT';

import {
    BORROW,
    RECIVE_FOUNDS,
} from '../../../constants/navigation/userScreens';

import colors from '../../../styles/colors';
import styles from './ResizebleCard.styles';

function ResizebleCard({ navigation, data, typeCard = '' }) {
    const [isOpened, setIsOpened] = useState(false);
    const [valueAmount, setValueAmount] = useState('');

    const coinImage = (type) => {
        switch (type) {
            case 'Bitcoin':
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

    const moveNext = () => {
        navigation.navigate(BORROW, { screen: RECIVE_FOUNDS, params: { value: `${valueAmount}`, name: typeCard.length !== 0 ? 'loan' : 'credit' } });
      };

    const onValueChnage = (data) => {
        setValueAmount(data);
    };

    const moveNext = () => {
        navigation.navigate(BORROW, { screen: RECIVE_FOUNDS, params: { value: `${valueAmount}`, name: typeCard.length !== 0 ? 'loan' : 'credit'} })
      }

    const onValueChnage = (data) => {
        setValueAmount(data)
    }


  return (
    <TouchableOpacity style={styles.containerStart} onPress={() => { setIsOpened(!isOpened); }}>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        {isOpened ? <Image source={done} style={{ width: 40, height: 40 }} /> : <></>}
        {!isOpened && <>{coinImage(data.type)}</>}
        <Text style={styles.typeCoin}>
          {data.type}
        </Text>
        <View style={styles.leftContainer}>
          <Text style={styles.textTop}>
            Available credit:
            {' '}
            {' '}
            <Text style={styles.textTopAmount}>
              $
              {data.AvailableCredit}
            </Text>
          </Text>
          <Text style={styles.textBottom}>
            {data.Short}
            {' '}
            {' '}
            <Text style={styles.textBottomAmount}>
              {data.amount}
              {' '}
              | $192.10
            </Text>
          </Text>
        </View>
      </View>
      {isOpened
                ? (
                  <View style={styles.bottomContainer}>
                    <Text>How much do you want to get?</Text>
                    <View style={styles.bottomContainerBottom}>
                      <FormInput
                        customContainer={{ width: '65%' }}
                        isMax
                        placeholder={`$${ String(data.AvailableCredit)}`}
                        value={valueAmount}
                        set={onValueChnage}
                        setMax={() => setValueAmount(String(data.AvailableCredit))}
                      />
                      <DefaultButton
                        customStyles={{
                             width: '32%',
                             marginLeft: 'auto',
                             marginLeft: 'auto',
                             marginTop: 25,
                             marginBottom: 'auto',
                             }}
                        title="Next"
                        onPress={() => { moveNext(); }}
                      />
                    </View>
                  </View>
)
                      : <></>}
    </TouchableOpacity>
  );
}

export default ResizebleCard;
