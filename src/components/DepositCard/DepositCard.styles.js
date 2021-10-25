import { StyleSheet } from 'react-native';

import shadow from '../../../styles/mixins/shadowBorder';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  containerStart: {
    ...shadow,
    marginTop: 15,
    borderRadius: 10,
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
      fontWeight: '700'
  },
  leftContainer: {
      marginTop: -10,
      marginRight: 0,
      marginLeft: 'auto',
      flexDirection: 'column',
  },
  textTop: {
      marginTop: 10,
      fontSize: 14,
      fontWeight: '500'
  },
  textTopAmount: {
      fontSize: 14,
      fontWeight: 'bold',
      fontFamily: 'Gotham Pro',
  },
  textBottom: {
      marginTop: 5,
      marginLeft: 'auto',
      marginRight: 0,
      fontSize: 12
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
