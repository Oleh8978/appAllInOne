import React, { useState, useEffect } from 'react';
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
import styles from './DepositCard.styles';

function DepositCard({ navigation, data, typeCard = '', perst = 0, duration = '' }) {
    const [isOpened, setIsOpened] = useState(false);
    const [valueAmount, setValueAmount] = useState(0);

    useEffect(() => {

    }, []);

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
        navigation.navigate(BORROW, {
                                      screen: RECIVE_FOUNDS,
                                      params: {
                                               coin: data.coin,
                                               perst,
                                               amount: valueAmount,
                                               name: typeCard,
                                               duration,
                                              },
                                    });
      };

    const onValueChnage = (data) => {
        setValueAmount(data);
    };

    if (data.coin === 'USD') {
      return <></>;
    }

  return (
    <TouchableOpacity style={styles.containerStart} onPress={() => { setIsOpened(!isOpened); }}>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        {isOpened ? <Image source={done} style={{ width: 40, height: 40 }} /> : <></>}
        {!isOpened && <>{coinImage(data.type)}</>}
        <View 
         style={{
             flexDirection: 'column',
            }}
        >
            <Text 
             style={
                styles.typeCoin
                }
            >
                {data.type}
            </Text>
            <Text 
             style={{
                ...styles.typeCoin,
                fontWeight: '300',
                fontSize: 12
               }}
            >
                {data.text}
            </Text>
        </View>
        <View style={styles.leftContainer}>
          {isOpened ? <>
                       <FormInput
                            customContainer={{ 
                                width: 195,
                                marginTop: -20,
                                marginRight: -5 
                            }}
                            customMaxStyle={{
                                marginTop: -26,
                                marginRight: 5,
                            }}
                            isMax
                            placeholder={`${ data.price / 2} LTC`}
                            value={`${valueAmount ? String(valueAmount) : ''}`}
                            set={onValueChnage}
                            setMax={() => setValueAmount(data.price / 2)}
                        />
                      </> :
                      <>
                        <Text style={styles.textTop}>
                        <Text 
                        style={{
                            fontWeight: '300'
                            }}
                        >
                            BTC
                            {' '}
                        </Text>
                        {data.amount}
                    </Text>
                    <Text style={styles.textBottom}>
                        {`$ ${data.price}`}
                    </Text>
                </>
                }
        </View>
      </View>
      {/* {isOpened
                ? (
                  <View style={styles.bottomContainer}>
                    <Text style={{ fontFamily: 'Gotham Pro' }}>How much do you want to get?</Text>
                    <View style={styles.bottomContainerBottom}>
                      <FormInput
                        customContainer={{ width: '65%' }}
                        isMax
                        placeholder={`$${ data.price / 2}`}
                        value={`${String(valueAmount)}`}
                        set={onValueChnage}
                        // setMax={() => setValueAmount(data.data.estimate / 2)}
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
                      : <></>} */}
    </TouchableOpacity>
  );
}

export default DepositCard;
