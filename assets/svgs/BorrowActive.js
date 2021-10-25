import * as React from 'react';
import Svg, {
  G,
  Circle,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BorrowActive(props) {
  return (
    <Svg
      width={107}
      height={116}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d_759:22775)">
        <Circle
          cx={57.5}
          cy={46.5}
          r={27.5}
          fill="url(#prefix__paint0_linear_759:22775)"
        />
      </G>
      <Mask
        id="prefix__a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={30}
        y={19}
        width={55}
        height={55}
      >
        <Circle cx={57.5} cy={46.5} r={27.5} fill="#fff" />
        <Circle
          cx={57.5}
          cy={46.5}
          r={27.5}
          fill="url(#prefix__paint1_linear_759:22775)"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          d="M53.833 35.5a4.278 4.278 0 100-8.555 4.278 4.278 0 000 8.556z"
          fill="#fff"
        />
        <Path
          d="M53.833 35.5a4.278 4.278 0 100-8.555 4.278 4.278 0 000 8.556z"
          fill="#38E39F"
        />
        <Path
          d="M56.997 31.224a3.195 3.195 0 01-3.208 3.208 3.195 3.195 0 01-3.209-3.208 3.195 3.195 0 013.209-3.208c1.782.044 3.208 1.47 3.208 3.208z"
          fill="#26AF79"
        />
        <Path
          d="M53.833 33.807c-.579 0-.935-.223-1.114-.445-.445-.446-.445-1.07-.445-1.159h1.114c0 .312.178.446.445.446.312 0 .446-.134.446-.446s-.178-.446-.446-.446c-.044 0-.668 0-1.114-.445a1.533 1.533 0 01-.445-1.114c0-.045 0-.669.445-1.159a1.533 1.533 0 011.114-.445c.624 0 1.56.445 1.56 1.56h-1.114c0-.313-.178-.446-.49-.446-.223 0-.267.089-.312.089-.134.134-.134.356-.134.356 0 .223.09.312.09.357.133.133.356.133.356.133 1.158 0 1.56.936 1.604 1.56 0 .09 0 .713-.446 1.159-.222.222-.579.445-1.114.445z"
          fill="#fff"
        />
        <Path
          d="M53.833 33.807c-.579 0-.935-.223-1.114-.445-.445-.446-.445-1.07-.445-1.159h1.114c0 .312.178.446.445.446.312 0 .446-.134.446-.446s-.178-.446-.446-.446c-.044 0-.668 0-1.114-.445a1.533 1.533 0 01-.445-1.114c0-.045 0-.669.445-1.159a1.533 1.533 0 011.114-.445c.624 0 1.56.445 1.56 1.56h-1.114c0-.313-.178-.446-.49-.446-.223 0-.267.089-.312.089-.134.134-.134.356-.134.356 0 .223.09.312.09.357.133.133.356.133.356.133 1.158 0 1.56.936 1.604 1.56 0 .09 0 .713-.446 1.159-.222.222-.579.445-1.114.445z"
          fill="#38E39F"
        />
        <Path d="M54.368 28.549h-1.114v.668h1.114v-.668z" fill="#fff" />
        <Path d="M54.368 28.549h-1.114v.668h1.114v-.668z" fill="#38E39F" />
        <Path
          d="M60.556 44.667a3.667 3.667 0 100-7.333 3.667 3.667 0 000 7.333z"
          fill="#fff"
        />
        <Path
          d="M60.556 44.667a3.667 3.667 0 100-7.333 3.667 3.667 0 000 7.333z"
          fill="#38E39F"
        />
        <Path
          d="M63.267 41a2.739 2.739 0 01-2.75 2.75 2.739 2.739 0 01-2.75-2.75 2.739 2.739 0 012.75-2.75c1.528.038 2.75 1.26 2.75 2.75z"
          fill="#26AF79"
        />
        <Path
          d="M60.556 43.217c-.497 0-.802-.191-.955-.382-.382-.382-.382-.917-.382-.993h.955c0 .267.152.382.382.382.267 0 .382-.115.382-.382 0-.268-.153-.382-.382-.382-.039 0-.573 0-.955-.382a1.314 1.314 0 01-.382-.955c0-.038 0-.573.382-.993.153-.153.458-.382.955-.382.534 0 1.336.382 1.336 1.337h-.955c0-.267-.152-.382-.42-.382-.19 0-.229.076-.267.076-.115.115-.115.306-.115.306 0 .19.077.267.077.305.114.115.305.115.305.115.993 0 1.337.802 1.375 1.337 0 .076 0 .61-.382.993-.19.19-.496.382-.954.382z"
          fill="#fff"
        />
        <Path
          d="M60.556 43.217c-.497 0-.802-.191-.955-.382-.382-.382-.382-.917-.382-.993h.955c0 .267.152.382.382.382.267 0 .382-.115.382-.382 0-.268-.153-.382-.382-.382-.039 0-.573 0-.955-.382a1.314 1.314 0 01-.382-.955c0-.038 0-.573.382-.993.153-.153.458-.382.955-.382.534 0 1.336.382 1.336 1.337h-.955c0-.267-.152-.382-.42-.382-.19 0-.229.076-.267.076-.115.115-.115.306-.115.306 0 .19.077.267.077.305.114.115.305.115.305.115.993 0 1.337.802 1.375 1.337 0 .076 0 .61-.382.993-.19.19-.496.382-.954.382z"
          fill="#38E39F"
        />
        <Path d="M61.014 38.709h-.955v.573h.955v-.573z" fill="#fff" />
        <Path d="M61.014 38.709h-.955v.573h.955v-.573z" fill="#38E39F" />
        <Path
          d="M49.556 49.555a4.889 4.889 0 100-9.778 4.889 4.889 0 000 9.778z"
          fill="#fff"
        />
        <Path
          d="M49.556 49.555a4.889 4.889 0 100-9.778 4.889 4.889 0 000 9.778z"
          fill="#38E39F"
        />
        <Path
          d="M53.171 44.667a3.651 3.651 0 01-3.666 3.666 3.651 3.651 0 01-3.667-3.666A3.651 3.651 0 0149.505 41c2.037.05 3.666 1.68 3.666 3.667z"
          fill="#26AF79"
        />
        <Path
          d="M49.556 47.62c-.663 0-1.07-.254-1.274-.509-.509-.51-.509-1.222-.509-1.324h1.273c0 .357.204.51.51.51.356 0 .509-.153.509-.51 0-.356-.204-.51-.51-.51-.05 0-.763 0-1.273-.508a1.753 1.753 0 01-.509-1.274c0-.05 0-.763.51-1.324.203-.203.61-.509 1.273-.509.712 0 1.782.51 1.782 1.782h-1.273c0-.356-.204-.509-.56-.509-.255 0-.306.102-.357.102-.153.153-.153.407-.153.407 0 .255.102.357.102.408.153.153.408.153.408.153 1.324 0 1.782 1.07 1.833 1.782 0 .102 0 .815-.51 1.324-.254.255-.661.51-1.273.51z"
          fill="#fff"
        />
        <Path
          d="M49.556 47.62c-.663 0-1.07-.254-1.274-.509-.509-.51-.509-1.222-.509-1.324h1.273c0 .357.204.51.51.51.356 0 .509-.153.509-.51 0-.356-.204-.51-.51-.51-.05 0-.763 0-1.273-.508a1.753 1.753 0 01-.509-1.274c0-.05 0-.763.51-1.324.203-.203.61-.509 1.273-.509.712 0 1.782.51 1.782 1.782h-1.273c0-.356-.204-.509-.56-.509-.255 0-.306.102-.357.102-.153.153-.153.407-.153.407 0 .255.102.357.102.408.153.153.408.153.408.153 1.324 0 1.782 1.07 1.833 1.782 0 .102 0 .815-.51 1.324-.254.255-.661.51-1.273.51z"
          fill="#38E39F"
        />
        <Path d="M50.167 41.611h-1.273v.764h1.273v-.764z" fill="#fff" />
        <Path d="M50.167 41.611h-1.273v.764h1.273v-.764z" fill="#38E39F" />
        <Path
          d="M63.903 57.716c6.847-.817 9.923-3.892 6.703-5.561-2.303-1.195-5.817-.24-7.282.677-1.39.87-2.127 1.489-5.717 2.232-1.827.379-3.38 1.093-3.445 2.218-.053.891.98 2.168 3.147 1.64 3.05-.742 3.89-.882 6.594-1.206z"
          fill="url(#prefix__paint2_linear_759:22775)"
        />
        <Path
          d="M64.006 56.139c-2.218.597-5.655 1.68-8.715 2.459-2.243.57-5.337.338-7 .163-3.664-.383-4.62 2.946-2.967 3.136 2.924.335 6.063.285 9.202.144 2.401-.108 5.322-1.183 7.62-1.67 5.448-1.159 4.177-4.855 1.86-4.232z"
          fill="url(#prefix__paint3_linear_759:22775)"
        />
        <Path
          d="M61.646 56.553c-2.185.715-4.901 2.496-8.047 2.79-2.303.216-5.984.628-7.65.472-3.668-.342-4.59 2.998-2.934 3.169 2.929.302 6.497.04 9.635-.138 2.4-.135 7.442-2.329 9.597-3.3 4.48-2.021 1.817-3.784-.6-2.993z"
          fill="url(#prefix__paint4_linear_759:22775)"
        />
        <Path
          d="M70.715 53.208c-4.453-.416-7.59 1.999-10.247 3.662-1.046.654-2.93 1.344-5.853 2.322-2.066.69-3.977.624-5.181 1.002-3.962 1.243-4.194 4.038-2.052 3.509 3.574-.883 6.408-.68 8.344-1.134 3.134-.736 4.659-1.077 5.648-1.281 4.82-.996 7.6-1.377 9.282-1.536 5.74-.542 3.128-6.258.059-6.544z"
          fill="url(#prefix__paint5_linear_759:22775)"
        />
        <Path
          d="M107.049 44.744c-7.455 5.092-25.553 7.81-34.998 7.606-1.17-.025-1.883 2.734-1.863 4.309.034 2.636.753 5.679 1.888 5.771 4.722.382 28.756-2.487 38.129-9.672 1.705-2.3-1.887-8.88-3.156-8.014z"
          fill="url(#prefix__paint6_linear_759:22775)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_759:22775"
          x1={28.896}
          y1={27.617}
          x2={61.07}
          y2={78.899}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#6560E0" />
          <Stop offset={1} stopColor="#392994" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_759:22775"
          x1={35.234}
          y1={10.671}
          x2={112.684}
          y2={78.97}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.061} stopColor="#615BDA" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear_759:22775"
          x1={60.59}
          y1={55.421}
          x2={45.932}
          y2={56.386}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5AF78" />
          <Stop offset={0.403} stopColor="#F9BA92" />
          <Stop offset={0.748} stopColor="#FCC3A9" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear_759:22775"
          x1={55.941}
          y1={59.246}
          x2={38.576}
          y2={63.55}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ED9268" />
          <Stop offset={0.748} stopColor="#FCB797" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear_759:22775"
          x1={56.554}
          y1={59.369}
          x2={31.779}
          y2={65.723}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5AF78" />
          <Stop offset={0.748} stopColor="#FCC1A6" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear_759:22775"
          x1={71.36}
          y1={55.93}
          x2={44.783}
          y2={63.967}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5AF78" />
          <Stop offset={0.748} stopColor="#FCC1A6" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint6_linear_759:22775"
          x1={69.375}
          y1={47.454}
          x2={75.305}
          y2={68.945}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#6560E0" />
          <Stop offset={1} stopColor="#392994" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default BorrowActive;
