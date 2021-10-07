import { StyleSheet } from 'react-native';

import { DEVICE_WIDTH } from '../../../constants/constants';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  input: {
    width: '100%',
    marginVertical: DEVICE_WIDTH <= 360 ? 1 : 3,
    color: colors.black,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 15,
    height: 48,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: 'OpenSans-ExtraBold',
  },
  inputWrapper: {
    width: '100%',
    position: 'relative',
    paddingTop: 10,
  },
  eyeWrapper: {
    position: 'absolute',
    bottom: 14,
    right: 15,
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 15,
    backgroundColor: 'red',
  },
  error: {
    position: 'absolute',
    bottom: -13,
    right: 0,
    fontSize: 11,
    color: colors.red,
  },
  arrowDown: {
    position: 'absolute',
    right: 11,
    top: 45,
  },
  maxButton: {
    height: 20,
    width: 35,
    marginRight: 15,
    marginLeft: 'auto',
    marginTop: -35,
  }
});
