import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowDown(props) {
  return (
    <Svg width={24} height={24} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M12 15L12.3536 15.3536L12 15.7071L11.6464 15.3536L12 15ZM18.3536 9.35355L12.3536 15.3536L11.6464 14.6464L17.6464 8.64645L18.3536 9.35355ZM11.6464 15.3536L5.64645 9.35355L6.35355 8.64645L12.3536 14.6464L11.6464 15.3536Z" fill="#848CA5" />
    </Svg>
  );
}

export default ArrowDown;
