import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TWO_FACTOR_AUTH } from '../../../../constants/navigation/authenticationScreens';

import {
    HOME,
    KNOW_YOUR_CUSTOMER,
    NOTIFICATION_PAGE,
  } from '../../../../constants/navigation/userScreens';

import Home from './HomeScreen/HomeScreen';
import TwoFactorAuthentication from '../../Authentication/2FA/index';
import KnowYourCustomer from '../KnowYourCustomer/KnowYourCustomer';
import NotificationsPage from '../NotificationPage/Notifications';


const Stack = createStackNavigator();

export default function BorrowPages() {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={TWO_FACTOR_AUTH} component={TwoFactorAuthentication} />
      <Stack.Screen name={KNOW_YOUR_CUSTOMER} component={KnowYourCustomer} /> */}
      <Stack.Screen name={NOTIFICATION_PAGE} component={NotificationsPage} />
    </Stack.Navigator>
  );
}
