import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'

import MenuLines from '../../../assets/svgs/MenuLines';
import Bell from '../../../assets/svgs/Bell';
import RhinoImage from '../../../assets/svgs/RhinoImage';
import HistoryClockImage from '../../../assets/svgs/HistoryClockImage';
import CreditCardImage from '../../../assets/svgs/CreditCardImage';

import styles from './PageHeader.styles';

function PageHeader({
  rightType = 'bell',
  centerType = 'credit',
  credit = 0.56,
  menuFunc = () => {},
  rightFunct = () => {}
}) {

  const centerBlock = (type) => {
    switch(type) {
      case 'credit' :
        return (
              <View style={{...styles.centerBlockWrapper}}>
                <RhinoImage style={{marginLeft: 'auto', marginRight: 'auto'}}/>
                <Text style={{...styles.headerText}}>${credit}</Text>
                <Text style={{...styles.subHeader}}>Available credit</Text>
              </View>
              )
      default:
        return <></>
    }
  }

  const rightBlock = (type) => {
    switch(type) {
      case 'bell' :
        return (
          <TouchableOpacity onPress={rightFunct}>
            <Bell style={{marginLeft: 'auto', marginRight: 0}}/>
          </TouchableOpacity>
        )
      default:
        return <></>
    }
  }

  return (
  <View style={styles.main}>

    <View style={styles.mainTop}>
      <View style={styles.leftBlock}>
        <TouchableOpacity onPress={menuFunc}>
          <MenuLines style={{marginLeft: 0, marginRight: 'auto'}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.centerBlock}>
        {centerBlock(centerType)}
      </View>
      <View style={styles.rightBlock}>
        {rightBlock(rightType)}
      </View>
    </View>

    <View style={styles.mainBottom}>
      <TouchableOpacity 
        style={styles.mainBottomLeft}
        onPress={() => {console.log('credit card')}}
      >
        <CreditCardImage />
        <Text>Borrow</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.mainBottomRight}
        nPress={() => {console.log('chistory')}}
      >
        <HistoryClockImage />
        <Text>Repay</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

export default PageHeader;
