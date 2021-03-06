import * as React from 'react';
import Svg, {
  Path, Mask, G,
} from 'react-native-svg';

function Copy(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 16c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v1c0 .6.4 1 1 1s1-.4 1-1V4c0-1.7-1.3-3-3-3H4C2.3 1 1 2.3 1 4v9c0 1.7 1.3 3 3 3h1zm15-8h-9c-1.7 0-3 1.3-3 3v9c0 1.7 1.3 3 3 3h9c1.7 0 3-1.3 3-3v-9c0-1.7-1.3-3-3-3zm1 12c0 .6-.4 1-1 1h-9c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v9z"
        fill="#fff"
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={22}
        height={22}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 16c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v1c0 .6.4 1 1 1s1-.4 1-1V4c0-1.7-1.3-3-3-3H4C2.3 1 1 2.3 1 4v9c0 1.7 1.3 3 3 3h1zm15-8h-9c-1.7 0-3 1.3-3 3v9c0 1.7 1.3 3 3 3h9c1.7 0 3-1.3 3-3v-9c0-1.7-1.3-3-3-3zm1 12c0 .6-.4 1-1 1h-9c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v9z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default Copy;
