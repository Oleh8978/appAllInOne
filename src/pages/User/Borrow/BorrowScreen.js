import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
    BORROW_PAGES,
    CREDIT,
    LOAN,
    INFO
  } from '../../../../constants/navigation/userScreens';


import Borrow from './BorrowPages/Borrow';
import CreditLine from './CreditLine/CreditLine';
import Loan from './Loan/Loan';
import InfoPage from './InfoPage/InfoPage';

const Stack = createStackNavigator();

export default function BorrowPages() {
  return (
    <Stack.Navigator
      initialRouteName={BORROW_PAGES}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={BORROW_PAGES} component={Borrow} />
      <Stack.Screen name={CREDIT} component={CreditLine} />
      <Stack.Screen name={LOAN} component={Loan} />
      <Stack.Screen name={INFO} component={InfoPage} />
    </Stack.Navigator>
  );
}
