import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { observer } from 'mobx-react-lite';
import LinearGradient from 'react-native-linear-gradient';

import Store from '../../../store';

import { AUTHENTICATION } from '../../../../constants/navigation/navigators';
import {
  DASHBOARD,
  WALLETS,
  TRANSACTIONS,
  ACCOUNT,
  BORROW,
  HOME,
  HOME_PAGE,
  EARN_PAGE
} from '../../../../constants/navigation/userScreens';
import TradeActive from '../../../../assets/svgs/TradeActive';
import TradeInactive from '../../../../assets/svgs/TradeInactive';
import EarnInactive from '../../../../assets/svgs/EarnInactive';
import EarnActive from '../../../../assets/svgs/EarnActive';
import HomeInactive from '../../../../assets/svgs/HomeInactive';
import HomeActive from '../../../../assets/svgs/HomeActive';
import DebitcardActive from '../../../../assets/svgs/DebitcardActive';
import DebitcardInactive from '../../../../assets/svgs/DebitcardInactive';
import BorrowActive from '../../../../assets/svgs/BorrowActive';
import BorrowInactive from '../../../../assets/svgs/BorrowInactive';

import AccountScreen from '../AccountScreen/AccountScreen';
import TransactionsScreen from '../TransactionsScreen/TransactionsScreen';
import WalletsScreen from '../WalletsScreen/WalletsScreen';
import BorrowPages from '../Borrow/BorrowScreen';
import HomePages from '../Home/Home';
import DebitCard from '../DebitCard/DebitCard';
import Trade from '../Trade/Trade';
import Earn from '../Earn/index';

import FooterBackground from '../../../components/FooterBackground/FooterBackground';

import Loader from '../../../components/Loader/Loader';

import DashboardImage from '../../../../assets/svgs/Dashboard';
import DashboardActiveImage from '../../../../assets/svgs/DashboardActive';
import WalletsImage from '../../../../assets/svgs/Wallets';
import WalletsActiveImage from '../../../../assets/svgs/WalletsActive';
import TransactionsImage from '../../../../assets/svgs/Transactions';
import TransactionsActiveImage from '../../../../assets/svgs/TransactionsActive';
import AccountImage from '../../../../assets/svgs/Account';
import AccountActiveImage from '../../../../assets/svgs/AccountActive';

import tabStyles from './index.styles';
import DashboardScreen from '../DashboardScreen/DashboardScreen';
import colors from '../../../../styles/colors';

const Tab = createBottomTabNavigator();

export default observer(({ navigation }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [gotRates, setGotRates] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // Store.user signIn must be the first!
        await Store.user.signIn()
          .then(async () => {
            if (Store.user.tier < 1) {
              return navigation.navigate(AUTHENTICATION);
            }
          });
      } catch (e) {
        await Store.application.addError(e);
        navigation.navigate(AUTHENTICATION);
      }
      setShowLoader(false);
    })();
  }, []);

  useEffect(() => {
    setGotRates(!!Object.keys(Store.wallets.exchangeRates).length);
  }, [Store.wallets.exchangeRates]);

  if (showLoader && !gotRates) {
    return (
      <LinearGradient
        colors={[colors.lightBlue, colors.darkBlue]}
        style={{ height: '100%', width: '100%' }}
      >
        <Loader
          color={colors.grey}
          isAbsolute
          size="large"
        />
      </LinearGradient>
    );
  }

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            position: 'absolute',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            borderTopColor: 'transparent',
            backgroundColor: 'transparent',
            top: '92%',
          },
          activeTintColor: colors.white,
          inactiveTintColor: colors.white,
          showLabel: true,
        }}
        initialRouteName={HOME_PAGE}
      >
        {/* <Tab.Screen
        name={DASHBOARD}
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? (
            <View style={tabStyles.activeTab}>
              <DashboardActiveImage />
            </View>
          ) : (
            <View style={tabStyles.tab}>
              <DashboardImage />
            </View>
          )),
        }}
      /> */}
        {/* <Tab.Screen
        name={WALLETS}
        component={WalletsScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? (
            <View style={tabStyles.activeTab}>
              <WalletsActiveImage />
            </View>
          ) : (
            <View style={tabStyles.tab}>
              <WalletsImage />
            </View>
          )),
        }}
      /> */}
        {/*
      <Tab.Screen
        name={TRANSACTIONS}
        component={TransactionsScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? (
            <View style={tabStyles.activeTab}>
              <TransactionsActiveImage />
            </View>
          ) : (
            <View style={tabStyles.tab}>
              <TransactionsImage />
            </View>
          )),
        }}
      />
      <Tab.Screen
        name={ACCOUNT}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? (
            <View style={tabStyles.activeTab}>
              <AccountActiveImage />
            </View>
          ) : (
            <View style={tabStyles.tab}>
              <AccountImage />
            </View>
          )),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: ACCOUNT }],
              })}
            />
          ),
        }}
      /> */}
        <Tab.Screen
          name="Trade"
          component={Trade}
          options={{
              tabBarIcon: ({ focused }) => (focused ? (
                <View style={tabStyles.activeTab}>
                  <Image source={require('../../../../assets/images/TradeActive.png')} style={{ width: 90, height: 90 }} />
                </View>
              ) : (
                <View style={tabStyles.tab}>
                  <Image source={require('../../../../assets/images/TradeInactive.png')} style={{ width: 60, height: 60 }} />
                </View>
              )),
            }}
        />
        <Tab.Screen
          name={EARN_PAGE}
          component={Earn}
          options={{
              tabBarIcon: ({ focused }) => (focused ? (
                <View style={tabStyles.activeTab}>
                  <Image source={require('../../../../assets/images/EarnActive.png')} style={{ width: 90, height: 90 }} />
                </View>
              ) : (
                <View style={tabStyles.tab}>
                  <Image source={require('../../../../assets/images/EarnInactive.png')} style={{ width: 60, height: 60 }} />
                </View>
              )),
            }}
        />
        <Tab.Screen
          name={HOME_PAGE}
          component={HomePages}
          options={{
            tabBarIcon: ({ focused }) => (focused ? (
              <View style={tabStyles.activeTab}>
                <HomeActive />
              </View>
            ) : (
              <View style={tabStyles.tab}>
                <HomeInactive />
              </View>
            )),
          }}
        />
        <Tab.Screen
          name="Debit card"
          component={DebitCard}
          options={{
            tabBarIcon: ({ focused }) => (focused ? (
              <View style={tabStyles.activeTab}>
                <DebitcardActive />
              </View>
            ) : (
              <View style={tabStyles.tab}>
                <DebitcardInactive />
              </View>
            )),
          }}
        />
        <Tab.Screen
          name="Debit card"
          component={DebitCard}
          options={{
              tabBarIcon: ({ focused }) => (focused ? (
                <View style={tabStyles.activeTab}>
                  <Image source={require('../../../../assets/images/DebitCardActive.png')} style={{ width: 90, height: 90 }} />
                </View>
              ) : (
                <View style={tabStyles.tab}>
                  <Image source={require('../../../../assets/images/DebitCardInactive.png')} style={{ width: 60, height: 60 }} />
                </View>
              )),
            }}
        />
        <Tab.Screen
          name={BORROW}
          component={BorrowPages}
          options={{
            tabBarIcon: ({ focused }) => (focused ? (
              <View style={tabStyles.activeTab}>
                {/* <TransactionsActiveImage /> */}
                <BorrowActive />
              </View>
            ) : (
              <View style={tabStyles.tab}>
                <BorrowInactive />
              </View>
            )),
          }}
        />
      </Tab.Navigator>

    </>
  );
});

observer.propTypes = {
  Component: PropTypes.element,
};
