import { StyleSheet } from 'react-native';
import { view } from '../../../styles/mixins';

import { DEVICE_WIDTH } from '../../../constants/constants';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  wrapper: {
    ...view,
    marginTop: 20,
    zIndex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
  },
  backArrow: {
    width: 125,
    height: 125,
    position: 'absolute',
    top: 17,
    left: '3%',
    zIndex: 1,
  },
  topText: {
    fontFamily: 'Gotham Pro',
    textAlign: 'center',
    fontSize: DEVICE_WIDTH <= 375 ? 20 : 24,
    marginTop: 14,
  },
  bellContainer: {
    width: 40,
    height: 40,
    marginTop: 7,
    marginLeft: 'auto',
    marginRight: 22,
    flexDirection: 'column',
  },
  numberContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderRadius: 20,
    marginBottom: -14,
    marginLeft: 22,
    marginRight: 0,
    elevation: 6,
    zIndex: 6,
    backgroundColor: colors.errorColor,
  },
  numberText: {
    color: colors.white,
    fontFamily: 'Gotham Pro',
    fontWeight: 'normal',
    fontSize: 12,
  },
});
