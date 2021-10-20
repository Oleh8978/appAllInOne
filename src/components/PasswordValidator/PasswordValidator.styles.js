import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    marginLeft: 0,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 45,
    marginTop: 15,
    marginBottom: 10,
  },
  wrapper: {
    flexDirection: 'column',
  },
  requirmentWrapper: {
    flexDirection: 'row',
  },
  passwordRequirement: {
    fontFamily: 'Gotham Pro',
    color: colors.white,
    fontSize: 13,
    paddingBottom: 1,
  },
});
