import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../styles/colors';


export default function FooterBackground() {

  return (
    <LinearGradient 
      colors={[colors.lightBlue, colors.darkBlue]} 
      style={{
        height: 60, 
        width: '100%', 
        marginTop: 'auto', 
        marginBottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        }}
      />
  );
}
