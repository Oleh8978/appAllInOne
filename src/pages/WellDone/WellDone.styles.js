import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
  imageTop: {
    width: '100%',
    height: 300,
  },
  wellDoneText: {
    marginTop: 60,
    fontSize: 36,
    color: colors.white,
  },
  wellDoneTextBottom: {
    fontSize: 15,
    color: colors.white,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
});
