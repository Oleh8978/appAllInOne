import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowUpImage(props) {
  return (
    <Svg width={24} height={24} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M12 9L11.2929 8.29289L12 7.58579L12.7071 8.29289L12 9ZM5.29289 14.2929L11.2929 8.29289L12.7071 9.70711L6.70711 15.7071L5.29289 14.2929ZM12.7071 8.29289L18.7071 14.2929L17.2929 15.7071L11.2929 9.70711L12.7071 8.29289Z" fill="#6560E0" />
    </Svg>
  );
}

export default ArrowUpImage;
