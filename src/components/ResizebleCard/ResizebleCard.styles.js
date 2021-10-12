import { StyleSheet } from 'react-native';

import shadow from '../../../styles/mixins/shadowBorder';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  containerStart: {
    ...shadow,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    width: '100%',
    minHeight: 70,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  typeCoin: {
      marginLeft: 3,
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 14,
  },
  leftContainer: {
      marginRight: 0,
      marginLeft: 'auto',
      flexDirection: 'column',
  },
  textTop: {
      fontSize: 14,
  },
  textTopAmount: {
      fontSize: 14,
      fontWeight: 'bold',
  },
  textBottom: {
      marginLeft: 'auto',
      marginRight: 0,
  },
  bottomContainer: {
      marginTop: 10,
      width: '100%',
      flexDirection: 'column',
  },
  bottomContainerBottom: {
      flexDirection: 'row',
  },
});
