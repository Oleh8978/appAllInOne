import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../components/Header/Header';
import FooterBackground from '../../../components/FooterBackground/FooterBackground';
import NotificationPlate from '../../../components/NotificationPlate/NotificationPlate';

import styles from './Notifications.styles';
import colors from '../../../../styles/colors';

import fakeImg from '../../../../assets/images/FakeNotif.png';

const data = [
    {
        image: undefined,
        name: 'Received Referral Bonus',
        amount1: '+0.01BTC',
        name2: 'John Doe',
        amount2: '+$75.00',
        isRead: false,
        date: 'Today at 12:22',

    },
    {
        image: fakeImg,
        name: "Don't forget to pay",
        amount1: undefined,
        name2: 'Monthly loan payment $20,00',
        amount2: undefined,
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        isRead: true,
        date: '2 hours ago',
    },
];

export default function NotificationsPage({ navigation }) {
  return (
    <LinearGradient
      colors={[colors.darkGreen, colors.darkBlue]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0.0, y: 0.10 }}
      end={{ x: 1.0, y: 0.10 }}
    >
      <Header
        topText="Notifications"
        navigation={navigation}
        customStyles={{
            width: 270,
            fontSize: 20,
            lineHeight: 19,
            marginTop: 17,
            }}
        isBell
      />
      <ScrollView style={styles.mainWrapper}>
        <TouchableOpacity
          style={styles.pressButton}
        >
          <Text style={styles.texLeft}>
            Mark all as read
          </Text>
        </TouchableOpacity>
        <View style={{
                ...styles.itemsWrapper,
            }}
        >
          {data.map((item) => <NotificationPlate data={item} />)}
        </View>
      </ScrollView>
      <FooterBackground />
    </LinearGradient>
  );
}
