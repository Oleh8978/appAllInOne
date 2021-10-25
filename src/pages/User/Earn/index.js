import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
    EARN_MAIN,
    EARN_DEPOSIT
  } from '../../../../constants/navigation/userScreens';

import Earn from './Main/Earn';
import Deposit from './Deposit/Deposit';

const Stack = createStackNavigator();

export default function BorrowPages() {
  return (
    <Stack.Navigator
      initialRouteName={EARN_MAIN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={EARN_MAIN} component={Earn} />
      <Stack.Screen name={EARN_DEPOSIT} component={Deposit} />
    </Stack.Navigator>
  );
}
