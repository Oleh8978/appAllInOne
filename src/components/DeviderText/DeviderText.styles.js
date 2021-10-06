import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import { DEVICE_WIDTH } from '../../../constants/constants';

export default StyleSheet.create({
  constainer: {
      flexDirection: 'row',
      maxWidth: DEVICE_WIDTH <= 360 ? 290 : 360,
  },
  first: {
      flex: 1,
      justifyContent: 'center',
  },
  second: {
      paddingHorizontal: 5,
  },
  third: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
      color: colors.white,
      fontSize: 15,
  },
  line: {
      width: '100%',
      height: 1,
      backgroundColor: colors.white,
  },
});
