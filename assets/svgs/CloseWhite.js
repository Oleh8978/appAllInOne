import * as React from 'react';
import Svg, {
  Path, Mask, G,
} from 'react-native-svg';

function Close(props) {
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
        d="M18.7 17.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L12 13.4l-5.3 5.3c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5.3-5.3-5.3-5.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L13.4 12l5.3 5.3z"
        fill="#FFFFFF"
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={5}
        y={5}
        width={14}
        height={14}
      >
        <Path
          d="M18.7 17.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L12 13.4l-5.3 5.3c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5.3-5.3-5.3-5.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L13.4 12l5.3 5.3z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill="#FFFFFF" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default Close;
