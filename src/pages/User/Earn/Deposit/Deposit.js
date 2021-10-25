import React, { useEffect, useState } from 'react';
import {
View, ScrollView, Text, Image, TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../../components/Header/Header';
import DepositCard from '../../../../components/DepositCard/DepositCard';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';

import styles from './Deposit.styles';
import colors from '../../../../../styles/colors';

const typeDeposits = [
    {
       type: 'Flexible',
       isActive: false,
    },
    {
        type: '1 Month',
        isActive: false,
    },
    {
        type: '3 Month',
        isActive: false,
    },
]

const coinsToDeposit = [
    {
        type: 'Bitcoin',
        amount: '1.000000',
        price: 50018.21,
        text: 'Up to 8%'
    },
    {
        type: 'Etherum',
        amount: '1.000000',
        price: 50018.21,
        text: 'Up to 8%'
    },
]

export default function Earn({ navigation }) {
    const [buttons, setButtons] = useState(typeDeposits)

    const listColorSetter = (item) => {
        const newData = [...buttons]
        newData.map(item => {
            return item.isActive = false
        })
        newData[buttons.indexOf(item)].isActive = !newData[buttons.indexOf(item)].isActive
        setButtons(newData)
    }

  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <Header
        topText={'Deposit'}
        navigation={navigation}
        customStyles={{marginLeft: 60, fontSize: 20,}}
      />
      <ScrollView style={styles.mainWrapper} showsVerticalScrollIndicator={false}>
       <Text style={styles.topText}>
        Choose how long you want to deposit your funds.
       </Text>
       <View style={styles.rowButtons}>
           {buttons.map( item => {
               return (
                <TouchableOpacity 
                  key={item.type}
                  style={styles.rowItemContainer}
                  onPress={()=>listColorSetter(item)}
                >
                    <LinearGradient 
                     colors={item.isActive === true ? 
                        [
                        colors.lightBlue,
                        colors.darkBlue,
                     ]
                     : [
                         colors.white,
                         colors.white,
                     ]
                    }
                     style={styles.rowItem}
                    >
                        <Text 
                         style={{
                             ...styles.cardText,
                             color: item.isActive ? colors.white : colors.lightBlue
                         }}
                        >
                            {item.type}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                )
           })}
       </View>
       <Text 
        style={{
            ...styles.topText,
            marginTop: 30
            }}
        >
        How much cryptocurrency do you want to deposit?
       </Text>
       <View 
        style={{
            ...styles.coinsContainer
            }}
        >
            {
                coinsToDeposit.map(item => {
                    return (<DepositCard 
                             key={item.type} 
                             data={item}
                            />)
                })
            }
       </View>
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
