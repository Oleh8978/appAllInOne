import React, { useState, useEffect } from 'react';
import {
    View, ScrollView, Text, TouchableOpacity,
    } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../components/Header/Header';

import styles from './Notifications.styles';
import colors from '../../../../styles/colors';

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
            isbBell
        />

      </LinearGradient>
  );
}


