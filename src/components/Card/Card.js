import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import ArrowNext from '../../../assets/svgs/ArrovNext';
import CheckGreen from '../../../assets/svgs/CheckGreenImage';
import safe from '../../../assets/images/Safe.png';

import Bitcoin from '../../../assets/svgs/Btc';
import EtherumCoin from '../../../assets/svgs/EtherumCoin';
import LiteCoin from '../../../assets/svgs/LiteCoin';
import USDCoin from '../../../assets/svgs/USDCoin';
import TrueUSDT from '../../../assets/svgs/TrueUSDT';

import styles from './Card.styles';
import colors from '../../../styles/colors';


export default function Card({
    onPress = () => {},
    headerText,
    typeOfInfo = 'credit',
    data = {}
}) {

  const coinImage = (type) => {
    switch (type) {
        case 'Bitcoin':
            return <Bitcoin/>
        case 'Etherum':
            return <EtherumCoin/>
        case 'Litecoin':
            return  <LiteCoin />
        case 'USD Coin':
            return <USDCoin/>
        case 'TrueUSD':
            return <TrueUSDT />
    }
  }

  const body = (data) => {

    if (Object.keys(data).length === 0) {
      return (
        <View style={{...styles.informationBody}}>
          <Text style={{...styles.informationBodyHeadTxtx}}>
            Grow your portfolio exponentially while keeping your crypto safe.
          </Text>
          <View style={styles.informationBodyBottom}>
            <View style={styles.informationBodyBottomLeft}>

              <View style={styles.checkRow}>
                <CheckGreen/>
                <Text style={styles.checkText}>
                  Instant approval
                </Text>
              </View>
              
              <View style={styles.checkRow}>
                <CheckGreen/>
                <Text style={styles.checkText}>
                  No credit checks
                </Text>
              </View>
              
              <View style={styles.checkRow}>
                <CheckGreen/>
                <Text style={styles.checkText}>
                  {typeOfInfo === 'credit' ? 'No origination or hidden fees' : 'No minimum collateral required'}
                </Text>
              </View>

            </View>
            <View style={styles.informationBodyBottomRight}>
              <Image source={safe} style={{...styles.Image}} />
            </View>
          </View>
        </View>
        )
    }

    if (Object.keys(data).length !== 0) {
      return (
        <View style={{...styles.informationBody}}>
          <View style={styles.bottomBody}>
            <View style={styles.bodyBottomLeft}>

                <View style={styles.containerTop}>
                  <Text style={styles.payOutText}>
                    {data.type === 'credit' ? 'To pay of: ' : 'Loan Avaliable'}
                  </Text>
                  <Text style={styles.amountText}>
                    ${data.amount}
                  </Text>
                </View>

                <View style={{...styles.containerBottom, flexDirection: 'row', alignItems: 'center'}}>
                    {coinImage(data.cryptoAmount.type)}
                    <View 
                    style={{
                      flexDirection: 'column', 
                      justifyContent: 'center',
                      marginLeft: 5,
                      }}
                    >
                      <Text style={{flexDirection: 'row', color: colors.grey}}>
                        {data.cryptoAmount.short}{' '}
                        {data.cryptoAmount.amount}
                      </Text>
                      <Text style={{color: colors.grey}}>
                        {'$'}
                        {data.cryptoAmount.equality}
                      </Text>
                    </View>
                </View>

            </View>

            <View style={styles.bodyBottomRight}>

              <View style={{...styles.containerTop, height: 70}}>
                <Text style={{...styles.payOutText, marginLeft: 'auto', marginRight: 0}}>
                      Next Payment
                </Text>
                <Text style={{...styles.amountText, marginLeft: 'auto', marginRight: 0}}>
                    ${data.nextPayment.amount}
                </Text>
                <Text 
                  style={{...styles.payOutText, 
                          marginLeft: 'auto', 
                          marginRight: 0, 
                          fontSize: 12,
                          marginTop: 5
                        }}
                >
                    {data.nextPayment.date}
                </Text>
              </View>

              <View 
               style={{...styles.containerBottom, 
                       justifyContent: 'center', 
                       height: 40
                       }}
              >
                <TouchableOpacity style={styles.button}>
                       <Text style={styles.buttonText}>
                         Repay
                       </Text>
                </TouchableOpacity>

              </View>

            </View>


          </View>
        </View>
      )
    }
 
    return <></>
    
  }

  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
        <View style={styles.mainTop}>
            <Text style={styles.headerText}>
              {Object.keys(data).length === 0 ? headerText : data.header}
            </Text>
            <ArrowNext style={{...styles.mainTopArrow}}/>
        </View>
        {body(data)}
    </TouchableOpacity>
  );
}
