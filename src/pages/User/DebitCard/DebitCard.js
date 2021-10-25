import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FooterBackground from '../../../components/FooterBackground/FooterBackground';

import styles from './DebitCard.styles';
import colors from '../../../../styles/colors';
import PageHeader from '../../../components/PageHeader/PageHeader';
import ChekMark from '../../../../assets/svgs/ChekMark';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import DebitCardBackground from '../../../../assets/svgs/DebitCardBackground';
import DebitCardImage from '../../../../assets/images/DebitCards.png';

const DebitCard = () => (
  <LinearGradient
    style={{ height: '100%', width: '100%', minHeight: '100%' }}
    colors={[colors.lightBlue, colors.darkBlue]}
    start={{ x: 0.0, y: 0.10 }}
    end={{ x: 1.0, y: 0.10 }}
  >
    <DebitCardBackground
      style={{
        opacity: 0.8,
        position: 'absolute',
        left: '4%',
      }}
    />
    <ScrollView>
      <View style={styles.cardContainer}>
        <PageHeader
          text=""
          stylesMainblock={{ height: 0 }}
          isTrade
          rightType
          isDebitCard
        />
        <View style={styles.cardHeaderContainer}>
          <Text style={styles.cardHeaderText}>
            Your Rhino
            Debit Card!
          </Text>
          <View style={styles.cardImage}>
            <Image source={DebitCardImage} />
          </View>
        </View>
        <View style={styles.cardChecboxContainer}>
          <View style={styles.cardCheckbox}>
            <ChekMark />
            <Text style={styles.cardCheckboxText}>Instant Access to Your Credit Line</Text>
          </View>
          <View style={styles.cardCheckbox}>
            <ChekMark />
            <Text style={styles.cardCheckboxText}>Instant Cashback of up to 2%</Text>
          </View>
          <View style={styles.cardCheckbox}>
            <ChekMark />
            <Text style={styles.cardCheckboxText}>ID Theft Protection</Text>
          </View>
        </View>
        <DefaultButton
          title="Get Your Rhino Card"
          customStyles={{
            width: '90%',
            justifyContent: 'center',
            marginHorizontal: 20,
            fontWeight: 'bold',
            marginTop: 15,
            marginBottom: 40,
          }}
          onPress={() => { }}
        />
      </View>
    </ScrollView>
    <FooterBackground />
  </LinearGradient>
);

export default DebitCard;
