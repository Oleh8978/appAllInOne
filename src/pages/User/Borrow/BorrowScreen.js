import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import {
  TWO_FACTOR_AUTH,
} from '../../../../constants/navigation/authenticationScreens';

import {
    BORROW_PAGES,
    CREDIT,
    LOAN,
    INFO,
    RECIVE_FOUNDS,
    INFO_CREDIT,
    INFO_LOAN
  } from '../../../../constants/navigation/userScreens';


import Borrow from './BorrowPages/Borrow';
import CreditLine from './CreditLine/CreditLine';
import Loan from './Loan/Loan';
import InfoPage from './InfoPage/InfoPage';
import ReciveFounds from './ReciveFounds/ReciveFounds';
import TwoFA from '../../Authentication/2FA/index';
import CreditLineInfo from './CreditLineInfo/CreditLineInfo';
import LoanInfo from './LoanInfo/LoanInfo';

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
      <Stack.Screen name={RECIVE_FOUNDS} component={ReciveFounds} />
      <Stack.Screen name={TWO_FACTOR_AUTH} component={TwoFA} />
      <Stack.Screen name={INFO_CREDIT} component={CreditLineInfo} />
      <Stack.Screen name={INFO_LOAN} component={LoanInfo} />
    </Stack.Navigator>
  );
}
