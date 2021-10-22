import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';


import colors from '../../../styles/colors';
import styles from './NotificationPlate.styles'

export default function NotificationPlate({ data }) {

  return (
    <View
      style={{
        ...styles.body
      }}
    >
        {data.image && <Image style={styles.image} source={data.image} />}
     <View 
        style={styles.row}
     >
         <Text 
          style={{
              ...styles.header,
              marginLeft: 0,
              marginRight: 'auto'
            }}
        >
            {data.name}
         </Text>
         <Text style={styles.header}>
            {data.amount1}
         </Text>
     </View>

     <View style={styles.row}>
        <Text 
         style={{
             ...styles.subHeader,
             marginRight: 'auto'
            }}
        >
            {data.name2}
        </Text>
        {data.amount2 && <Text style={styles.subHeader}>
            {data.amount2}
        </Text>}
     </View>

     {data.content && <View style={styles.row}>
        <Text 
         style={{
             ...styles.content,
            }}
        >
            {data.content}
        </Text>
     </View>}

     <View style={styles.rowRead}>
        <Text style={styles.time}>
            {data.date}
        </Text>

        {data.isRead && <View style={styles.radio}/>}

     </View>

    </View>
  ) 
}

