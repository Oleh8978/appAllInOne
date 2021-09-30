import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function UploadImage(props) {
  return (
    <Svg width={24} height={24} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M12 3L12.7071 2.29289L12 1.58579L11.2929 2.29289L12 3ZM11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L11 16ZM18.7071 8.29289L12.7071 2.29289L11.2929 3.70711L17.2929 9.70711L18.7071 8.29289ZM11.2929 2.29289L5.29289 8.29289L6.70711 9.70711L12.7071 3.70711L11.2929 2.29289ZM11 3L11 16L13 16L13 3L11 3Z" fill="#392994"/>
        <Path d="M6 21H18" stroke="#392994" stroke-width="2" stroke-linecap="round"/>
    </Svg>
  );
}

export default UploadImage;
