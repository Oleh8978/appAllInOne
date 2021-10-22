import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CheckGreenImage(props) {
  return (
    <Svg width={24} height={24} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="white" stroke-width="2" stroke-linecap="round" />
      <Path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="#38E39F" stroke-width="2" stroke-linecap="round" />
    </Svg>
  );
}

export default CheckGreenImage;
