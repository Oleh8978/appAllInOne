import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DepositHome(props) {
  return (
    <Svg width={25} height={25} {...props} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M3.5 13V10C3.5 7.17157 3.5 5.75736 4.37868 4.87868C5.25736 4 6.67157 4 9.5 4H15.5C18.3284 4 19.7426 4 20.6213 4.87868C21.5 5.75736 21.5 7.17157 21.5 10V14C21.5 16.8284 21.5 18.2426 20.6213 19.1213C19.7426 20 18.3284 20 15.5 20H11.5" stroke="#6560E0"  strokeWidth={2}/>
      <Path d="M19.5 16H17.5C16.5572 16 16.0858 16 15.7929 15.7071C15.5 15.4142 15.5 14.9428 15.5 14C15.5 13.0572 15.5 12.5858 15.7929 12.2929C16.0858 12 16.5572 12 17.5 12H19.5C20.4428 12 20.9142 12 21.2071 12.2929C21.5 12.5858 21.5 13.0572 21.5 14C21.5 14.9428 21.5 15.4142 21.2071 15.7071C20.9142 16 20.4428 16 19.5 16Z" stroke="#6560E0" strokeWidth={2} />
      <Path d="M7.5 14L8.1 13.2L7.5 12.75L6.9 13.2L7.5 14ZM6.5 22C6.5 22.5523 6.94772 23 7.5 23C8.05228 23 8.5 22.5523 8.5 22L6.5 22ZM12.1 16.2L8.1 13.2L6.9 14.8L10.9 17.8L12.1 16.2ZM6.9 13.2L2.9 16.2L4.1 17.8L8.1 14.8L6.9 13.2ZM6.5 14L6.5 22L8.5 22L8.5 14L6.5 14Z" fill="#6560E0" strokeWidth={2}/>
    </Svg>
  );
}

export default DepositHome;
