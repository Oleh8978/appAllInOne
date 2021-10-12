import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function CreditCardImage(props) {
  return (
    <Svg width={25} height={24} {...props} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect x="3.5" y="6" width="18" height="13" rx="2" stroke="#6560E0" stroke-width="2" />
      <Path d="M7.5 15H7.51" stroke="#6560E0" stroke-width="2" stroke-linecap="round" />
      <Path d="M4.5 11H21.5" stroke="#6560E0" stroke-width="2" stroke-linecap="round" />
    </Svg>
  );
}

export default CreditCardImage;
