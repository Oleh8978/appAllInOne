import * as React from 'react';
import Svg, {
 Path, Rect, G,
} from 'react-native-svg';

function KYCImageDoc(props) {
  return (
    <Svg width={345} height={216} {...props} viewBox="0 0 345 216" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G opacity="0.1">
        <Rect x="0.5" y="0.5" width="344" height="215" rx="7.5" stroke="#6560E0"/>
        <Path d="M0 208C0 212.418 3.58172 216 8 216H337C341.418 216 345 212.418 345 208V174H0V208Z" fill="#6560E0"/>
        <Rect x="129" y="40" width="182" height="10" rx="5" fill="#6560E0"/>
        <Rect x="129" y="58" width="89" height="10" rx="5" fill="#6560E0"/>
        <Rect x="129" y="83" width="182" height="10" rx="5" fill="#6560E0"/>
        <Rect x="129" y="101" width="182" height="10" rx="5" fill="#6560E0"/>
        <Rect x="129" y="119" width="111" height="10" rx="5" fill="#6560E0"/>
        <Rect x="37" y="40" width="70" height="95" rx="8" fill="#6560E0"/>
        </G>
    </Svg>

  );
}

export default KYCImageDoc;