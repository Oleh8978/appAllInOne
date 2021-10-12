import React, {useState} from 'react';
import {View, ScrollView, Text, Platform, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../../components/Header/Header';
import FooterBackground from '../../../../components/FooterBackground/FooterBackground';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import Picker from '../../../../components/Picker/Picker';
import FormInput from '../../../../components/FormInput/FormInput';

import { CODE_SCREN_2FA } from '../../../../../constants/navigation/twoFactorAuth';

import { TWO_FACTOR_AUTH } from '../../../../../constants/navigation/authenticationScreens';

import CheckImage from '../../../../../assets/svgs/CheckImage';
import GreenRadioButtonChecked from '../../../../../assets/svgs/GreenRadioChecked';

import shadow from '../../../../../styles/mixins/shadowBorder';
import colors from '../../../../../styles/colors';
import styles from './ReciveFounds.styles';

const list = [
    {
        name: 'Debit card',
        value: 'Debit card',
        trnasfers: [
            'Rhino account',
            'External bank transfer'
        ]
    },
    {
        name: 'Test card',
        value: 'Test card',
        trnasfers: [
            'Rhino account',
            'External bank transfer',
            'Virtual bank transfer',
            'Test bank transfer'
        ]
    }
]

export default function ReciveFounds({navigation, route}) {
    const [isPickerOpened, setIsPickerOpened] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [pickedValue, setPickedValue] = useState(list[0].name);
    const [values, setValues] = useState(list[0].trnasfers)

    const checkMarkSetter = (value) => {
        setValues(list.filter( item => item.value === value)[0].trnasfers)
    }

    const moveForward = () => {
     navigation.navigate(TWO_FACTOR_AUTH, { screen: CODE_SCREN_2FA, params: { type: route.params.name === 'credit' ? 'credit' : 'loan'} })
    }

  return (
    <LinearGradient
     colors={[colors.darkGreen, colors.darkBlue]} 
     style={{height: '100%', width: '100%'}}
     start={{x: 0.0, y: 0.10}} end={{x: 1.0, y: 0.10}}
    >
        <Header 
         topText={ route.params.name === 'credit' ? 'Request credit Line' : 'Request for loan'}
         customStyles={{marginLeft: 60, marginRight: 'auto'}}
         navigation={navigation}
        />
        <ScrollView
         style={{...styles.mainBody}} 
         showsVerticalScrollIndicator={false} 
         showsHorizontalScrollIndicator={false}
         >  
           <View style={styles.topTextContainer}>
               <Text style={styles.topText}>
                   Where you want to receive  the founds ?
               </Text>
           </View>
           <View style={styles.bottomContainer}>
                {values.map(item => {
                    return (
                    <View key={item} style={styles.itemList}>
                        <GreenRadioButtonChecked/>
                        <Text style={styles.itemListTxt}>{item}</Text>
                    </View>)
                })}
                <View style={styles.agreementContainer}>
                    <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
                        {isChecked? <CheckImage /> : <></>}
                    </TouchableOpacity>
                    <Text>Make autorepeyments</Text>
                </View>
                <FormInput
                      textheaderCustomStyle={{ color: colors.grey }}
                      headerText="Autorepayments form"
                      editable={false}
                      onFocus={() => {
                        setIsPickerOpened(true);
                      }}
                      value={pickedValue}
                      placeholder="Select autorepayment"
                      isNeedArrow
                      inputCustomStyle={{ ...shadow }}
                    />
                    {Platform.OS === 'android' && (
                      <View style={styles.invisiblePicker}>
                        <Picker
                          close={() => setIsPickerOpened(false)}
                          header="Select autorepayment"
                          value={pickedValue}
                          onValueChange={(value) => {
                            checkMarkSetter(value)
                            setPickedValue(value);
                          }}
                          list={list}
                          select={() => setIsPickerOpened(false)}
                        />
                      </View>)}
           </View>
           <DefaultButton 
            title={'Next'} 
            isArrowNext 
            customStyles={{marginBottom: 90, marginTop: 'auto'}}
            onPress={()=>moveForward()}
            />
         </ScrollView>
         {isPickerOpened && (
            <Picker
                close={() => setIsPickerOpened(false)}
                header="Select autorepepayment"
                value={pickedValue}
                onValueChange={(value) => {
                    checkMarkSetter(value)
                    setPickedValue(value);
                  }}
                list={list}
                select={() => setIsPickerOpened(false)}
                isWhite
            />
         )}
        <FooterBackground/>
    </LinearGradient>
  );
}
