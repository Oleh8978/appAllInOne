import * as React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';

function FakeBTCChart(props) {
  return (
    <Svg width={65} height={27} {...props} viewBox="0 0 65 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M0 1H13.9902C15.4397 1 16.8163 1.63552 17.7565 2.73872L23.3153 9.26129C24.2554 10.3645 25.632 11 27.0815 11H31.1455C32.7876 11 34.3227 11.8146 35.2432 13.1743L42.4542 23.8257C43.3748 25.1855 44.9099 26 46.5519 26H51.687C53.0631 26 54.3771 25.427 55.3134 24.4185L64 15.0625" stroke="url(#paint0_linear_1:22054)" strokeWidth={0.989691}/>
    <Defs>
    <LinearGradient id="paint0_linear_1:22054" x1="-2" y1="4.5" x2="64" y2="4.5" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#6560E0" stopOpacity="0"/>
    <Stop offset="0.354167" stopColor="#F7931A"/>
    <Stop offset="0.671875" stopColor="#F7931A"/>
    <Stop offset="0.994792" stopColor="#392994" stopOpacity="0"/>
    </LinearGradient>
    </Defs>
    </Svg>
  );
}

export default FakeBTCChart;
