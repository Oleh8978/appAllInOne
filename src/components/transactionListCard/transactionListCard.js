import React from 'react';

import {
 ScrollView, Text, View, Image,
} from 'react-native';

import ReciveTransation from '../../../assets/svgs/ReciveTransaction';
import RepaymantTransaction from '../../../assets/svgs/RepaymantTransaction';
import WithDrawTransaction from '../../../assets/svgs/withDrawTransaction';

import styles from './transactionListCard.styles';
import colors from '../../../styles/colors';

export default function Congrats({ data }) {
  const typeTransaction = (type) => {
    switch (type) {
      case 'Interest':
        return <ReciveTransation style={{ marginLeft: 5 }} />;
      case 'Withdraw':
        return <WithDrawTransaction style={{ marginLeft: 5 }} />;
      case 'Repayment':
        return <RepaymantTransaction style={{ marginLeft: 5 }} />;
      default:
        return <></>;
    }
  };

  return (
    <View style={{ ...styles.card }}>
      <View style={styles.leftContainer}>
        {typeTransaction(data.typeTr)}
        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
          <Text style={styles.topTextRight}>
            {data.amount}
          </Text>
          <Text style={styles.bottomTextRight}>
            {data.equality}
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text
          style={{ ...styles.topTextRight,
                 fontWeight: 'normal',
                 marginLeft: 'auto',
                 marginRight: 0 }}
        >
          {data.time}
        </Text>
        <Text
          style={{ ...styles.bottomTextRight,
                 fontWeight: 'normal',
                 marginLeft: 'auto',
                 marginRight: 0,
                 color: colors.grey }}
        >
          {data.typeTr}
        </Text>
      </View>
    </View>
  );
}
