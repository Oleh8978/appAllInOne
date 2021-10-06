import React, {useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Code from './Code/Code';
import Main from './Main/Main';
import List from './List/List';

import {
  MAIN_SCREN_2FA,
  CODE_SCREN_2FA,
  LIST_SCREN_2FA
} from '../../../../constants/navigation/twoFactorAuth';


const Stack = createStackNavigator();

export default function TwoFactorAuthentication({naviagtion}) {

  return (
      <Stack.Navigator
        initialRouteName={MAIN_SCREN_2FA}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={MAIN_SCREN_2FA} component={Main} />
        <Stack.Screen name={LIST_SCREN_2FA} component={List} />
        <Stack.Screen name={CODE_SCREN_2FA} component={Code} />
       
      </Stack.Navigator>
  );
}
