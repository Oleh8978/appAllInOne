import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BlueCheckBoxCheckedImage(props) {
  return (
    <Svg width={20} height={20} {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 1.66663C5.39996 1.66663 1.66663 5.39996 1.66663 9.99996C1.66663 14.6 5.39996 18.3333 9.99996 18.3333C14.6 18.3333 18.3333 14.6 18.3333 9.99996C18.3333 5.39996 14.6 1.66663 9.99996 1.66663ZM9.99996 16.6666C6.32496 16.6666 3.33329 13.675 3.33329 9.99996C3.33329 6.32496 6.32496 3.33329 9.99996 3.33329C13.675 3.33329 16.6666 6.32496 16.6666 9.99996C16.6666 13.675 13.675 16.6666 9.99996 16.6666ZM8.33329 11.8083L13.825 6.31663L15 7.49996L8.33329 14.1666L4.99996 10.8333L6.17496 9.65829L8.33329 11.8083Z" fill="#6560E0" />
    </Svg>
  );
}

export default BlueCheckBoxCheckedImage;
