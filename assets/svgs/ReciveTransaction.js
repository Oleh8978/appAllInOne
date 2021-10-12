import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function ReciveTransation(props) {
  return (
    <Svg width={40} height={40} {...props} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect width="40" height="40" rx="10" fill="#F3F2FD"/>
        <Path d="M22.2512 12H17.751C14.569 12 12.9779 12 11.9894 13.0042C11.0009 14.0085 11.0009 15.6248 11.0009 18.8573V21.1431C11.0009 24.3757 11.0009 25.992 11.9894 26.9962C12.9779 28.0005 14.569 28.0005 17.751 28.0005H22.2512C25.4333 28.0005 27.0243 28.0005 28.0128 26.9962C29.0014 25.992 29.0014 24.3757 29.0014 21.1431V18.8573C29.0014 15.6248 29.0014 14.0085 28.0128 13.0042C27.0243 12 25.4333 12 22.2512 12Z" stroke="#6560E0" stroke-width="2"/>
        <Path d="M15.001 16H18.001" stroke="#6560E0" stroke-width="2" stroke-linecap="round"/>
        <Path d="M27.0013 24H25.0012C24.0584 24 23.587 24 23.2941 23.7071C23.0012 23.4142 23.0012 22.9428 23.0012 21.9999C23.0012 21.0571 23.0012 20.5857 23.2941 20.2928C23.587 19.9999 24.0584 19.9999 25.0012 19.9999H27.0013C27.9442 19.9999 28.4156 19.9999 28.7084 20.2928C29.0013 20.5857 29.0013 21.0571 29.0013 21.9999C29.0013 22.9428 29.0013 23.4142 28.7084 23.7071C28.4156 24 27.9442 24 27.0013 24Z" stroke="#6560E0" stroke-width="2"/>
    </Svg>
  );
}

export default ReciveTransation;