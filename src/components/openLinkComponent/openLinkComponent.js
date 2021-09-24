import React, { useCallback } from "react";
import { Text, Linking, TouchableOpacity } from "react-native";

import colors from '../../../styles/colors';

const OpenURLButton = ({ url, text, customStyleBtn, customStyleTxt }) => {
  const handlePress = useCallback(async () => {

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } 

  }, [url]);

  return (<TouchableOpacity onPress={handlePress} style={{...customStyleBtn}}>
            <Text style={{color: colors.white, ...customStyleTxt}}>{text}</Text>
          </TouchableOpacity>);
};

export default OpenURLButton;