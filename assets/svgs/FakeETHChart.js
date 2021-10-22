import * as React from 'react';
import Svg, {
 Path, Defs, Stop, LinearGradient,
} from 'react-native-svg';

function FakeETHChart(props) {
  return (
    <Svg width={65} height={27} {...props} viewBox="0 0 65 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M0 26H13.9902C15.4397 26 16.8163 25.3645 17.7565 24.2613L23.3153 17.7387C24.2554 16.6355 25.632 16 27.0815 16H31.1455C32.7876 16 34.3227 15.1854 35.2432 13.8257L42.4542 3.1743C43.3748 1.81455 44.9099 1 46.5519 1H51.687C53.0631 1 54.3771 1.57303 55.3134 2.5815L64 11.9375" stroke="url(#paint0_linear_1:22065)" strokeWidth="0.989691" />
      <Defs>
        <LinearGradient id="paint0_linear_1:22065" x1="-2" y1="22.5" x2="64" y2="22.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6560E0" stopOpacity="0" />
          <Stop offset="0.354167" stopColor="#6560E0" />
          <Stop offset="0.671875" stopColor="#6560E0" />
          <Stop offset="0.994792" stopColor="#392994" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default FakeETHChart;
