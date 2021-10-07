import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import ArrowNext from '../../../assets/svgs/ArrovNext';
import CheckGreen from '../../../assets/svgs/CheckGreenImage';
import safe from '../../../assets/images/Safe.png';

import styles from './Card.styles';
import colors from '../../../styles/colors';


export default function Card({
    onPress = () => {},
    headerText,
    typeBody = 'information',
    typeOfInfo = 'credit'
}) {

  const body = (type) => {
    switch(type) {
      case 'information': 
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
      default:
        return <></>
    }
  }

  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
        <View style={styles.mainTop}>
            <Text style={styles.headerText}>{headerText}</Text>
            <ArrowNext style={{...styles.mainTopArrow}}/>
        </View>
        {body(typeBody)}
    </TouchableOpacity>
  );
}
