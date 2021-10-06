import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BlueCheckBoxCircleImage(props) {
  return (
    <Svg width={18} height={18} {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M0.666626 8.99996C0.666626 4.39996 4.39996 0.666626 8.99996 0.666626C13.6 0.666626 17.3333 4.39996 17.3333 8.99996C17.3333 13.6 13.6 17.3333 8.99996 17.3333C4.39996 17.3333 0.666626 13.6 0.666626 8.99996ZM2.33329 8.99996C2.33329 12.6833 5.31663 15.6666 8.99996 15.6666C12.6833 15.6666 15.6666 12.6833 15.6666 8.99996C15.6666 5.31663 12.6833 2.33329 8.99996 2.33329C5.31663 2.33329 2.33329 5.31663 2.33329 8.99996Z" fill="#6560E0" />
    </Svg>
  );
}

export default BlueCheckBoxCircleImage;
