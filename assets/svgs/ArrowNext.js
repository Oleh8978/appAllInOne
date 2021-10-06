import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowNext(props) {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M15.5 12L16.2071 11.2929L16.9142 12L16.2071 12.7071L15.5 12ZM10.2071 5.29289L16.2071 11.2929L14.7929 12.7071L8.79289 6.70711L10.2071 5.29289ZM16.2071 12.7071L10.2071 18.7071L8.79289 17.2929L14.7929 11.2929L16.2071 12.7071Z" fill="#392994" />
    </Svg>
  );
}

export default ArrowNext;