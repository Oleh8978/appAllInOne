import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MenuLines(props) {
  return (
    <Svg width={40} height={40} {...props} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M8.33337 11.666H31.6667" stroke="white" stroke-width="2" stroke-linecap="round" />
      <Path d="M8.33337 20H25" stroke="white" stroke-width="2" stroke-linecap="round" />
      <Path d="M8.33337 28.334H18.3334" stroke="white" stroke-width="2" stroke-linecap="round" />
    </Svg>
  );
}

export default MenuLines;
