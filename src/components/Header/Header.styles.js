import { StyleSheet } from 'react-native';
import { view } from '../../../styles/mixins';

import { DEVICE_WIDTH } from '../../../constants/constants';

export default StyleSheet.create({
  wrapper: {
    ...view,
    marginTop: 20,
    zIndex: 1,
  },
  header: {
    width: '100%',
    height: 40,
    marginBottom: 15,
  },
  backArrow: {
    width: 125,
    height: 125,
    position: 'absolute',
    top: 6,
    left: '3%',
    zIndex: 1,
  },
  topText: {
    fontFamily: 'Gotham Pro',
    textAlign: 'center',
    fontSize: DEVICE_WIDTH <= 375 ? 20 : 24,
    marginTop: 14,
  },
});
