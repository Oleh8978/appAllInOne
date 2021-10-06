import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function EMLogoText(props) {
  return (
    <Svg
      width={239}
      height={32}
      viewBox="0 0 239 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M38.695 18.374c4.027-1.196 6.328-3.86 6.328-8.222 0-6.214-4.717-9.688-12.272-9.688H0l5.944 5.713H33.25c3.989 0 5.178 2.624 5.178 4.67s-1.227 4.67-5.178 4.67H5.944V31.5h6.443V21.308h20.21c4.104 0 5.063 2.239 5.063 3.937V31.5h6.673V25.36c0-3.165-1.726-5.713-5.638-6.987zM92.807 31.537V18.876H66.882v12.661H60.44V.463h6.443v12.623h25.925V.463h6.443v31.074h-6.443zM122.414.464v31.074h-6.443V.464h6.443zM145.576 31.537h-6.443V.463h4.564c8.322 0 10.585 2.664 18.37 13.55 7.363 10.228 7.9 10.962 11.236 10.962h.039V.463h6.442v31.074h-4.563c-7.632 0-9.933-2.47-18.37-13.587-7.9-10.423-8.13-10.924-11.237-10.924h-.038v24.511zM238.307 16.02c0 12.043-6.941 15.98-21.668 15.98-14.726 0-21.667-3.976-21.667-15.98 0-12.044 6.941-16.02 21.667-16.02 14.727 0 21.668 3.937 21.668 16.02zm-6.596 0c0-8.686-4.986-9.882-15.072-9.882-10.124 0-15.071 1.196-15.071 9.881 0 8.686 4.947 9.844 15.071 9.844 10.125 0 15.072-1.197 15.072-9.844z"
        fill="#fff"
      />
    </Svg>
  );
}

export default EMLogoText;
