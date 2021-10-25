import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ChekMark(props) {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 18a9 9 0 007.51-13.961l-7.155 7.95a2 2 0 01-2.687.262L3.4 9.8a1 1 0 111.2-1.6l3.268 2.451 7.346-8.161A9 9 0 109 18z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 18a9 9 0 007.51-13.961l-7.155 7.95a2 2 0 01-2.687.262L3.4 9.8a1 1 0 111.2-1.6l3.268 2.451 7.346-8.161A9 9 0 109 18z"
        fill="#38E39F"
      />
    </Svg>
  );
}

export default ChekMark;
