import * as React from 'react';
import Svg, {
  Path, Mask, G,
} from 'react-native-svg';

function ChevronLeftBlue(props) {
  return (
    <Svg width={40} height={40} {...props} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M6.66663 20L5.95952 19.2929L5.25241 20L5.95952 20.7071L6.66663 20ZM31.6666 21C32.2189 21 32.6666 20.5523 32.6666 20C32.6666 19.4477 32.2189 19 31.6666 19V21ZM15.9595 9.29289L5.95952 19.2929L7.37373 20.7071L17.3737 10.7071L15.9595 9.29289ZM5.95952 20.7071L15.9595 30.7071L17.3737 29.2929L7.37373 19.2929L5.95952 20.7071ZM6.66663 21H31.6666V19H6.66663V21Z" fill="#392994"/>
    </Svg>
  );
}

export default ChevronLeftBlue;
