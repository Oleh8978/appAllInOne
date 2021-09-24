import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../../../constants/constants';
import colors from '../../../../styles/colors';

export default StyleSheet.create({
  imageTop: {
    width: '100%',
    height: 300,
    marginTop: 50,
  },
  textWrapper: {
    paddingHorizontal: '5%',
  },
  mainText: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.white,
    marginBottom: '5%',
  },
  textSubTitle: {
    color: colors.white,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  subText: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.white,
    marginBottom: 20,
  },
  timer: {
    position: 'absolute',
    left: 30,
    top: DEVICE_WIDTH <= 360 ? 9 : 10,
    zIndex: 1,
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    marginTop: 4,
    color: colors.darkBlue,
  },
});
