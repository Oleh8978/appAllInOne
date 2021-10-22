import React, {
    useEffect, useState, useCallback, useReducer,
  } from 'react';

import {
 View, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './BalanceDetailsComponent.styles';
import colors from '../../../styles/colors';

const BalanceDetailsComponent = ({ data }) => {
    const [clikced, setClicked] = useState(false);

    const typeOfButton = (type) => {
        switch (type) {
            case 'Earn':
                return (
                  <TouchableOpacity
                    onPress={() => {}}
                    style={styles.button}
                  >
                    <Text style={styles.buttonTxt}>
                      Open
                    </Text>
                  </TouchableOpacity>
);
            case 'Borrow':
                return (
                  <TouchableOpacity
                    onPress={() => {}}
                    style={styles.button}
                  >
                    <Text style={styles.buttonTxt}>
                      Open
                    </Text>
                  </TouchableOpacity>
                );
            case 'Debit Card':
                return (
                  <TouchableOpacity
                    onPress={() => {}}
                    style={styles.buttonGetContainer}
                  >
                    <LinearGradient style={styles.buttonGet} colors={[colors.lightBlue, colors.darkBlue]}>
                      <Text style={styles.buttonTxtGreen}>
                        Get
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
            case 'Bonus':
                return (
                  <TouchableOpacity
                    onPress={() => {}}
                    style={styles.buttonGetContainer}
                  >
                    <LinearGradient style={styles.buttonGet} colors={[colors.lightBlue, colors.darkBlue]}>
                      <Text style={styles.buttonTxtGreen}>
                        Get
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
        }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.textOne}>
          {data.name}
        </Text>

        {data.balance ? (
          <Text style={styles.textTwo}>
            {data.balance}
          </Text>
) : <View style={styles.textTwo} />}

        <View style={styles.lastOne}>
          {typeOfButton(data.name)}
        </View>
      </View>
    );
};

export default BalanceDetailsComponent;
