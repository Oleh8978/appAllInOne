import { StyleSheet } from 'react-native';
import { authPageWrapper as wrapper } from '../../../../styles/mixins';
import colors from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    ...wrapper,
    backgroundColor: colors.darkBlue,
  },
  mainContainer: {
    marginTop: 'auto',
    marginBottom: 0,
    paddingHorizontal: 15,
  },
  main: {
    height: '100%',
    width: '100%',
    paddingBottom: 40,

  },
  logo: {
    marginBottom: 30,
  },
  textsWrapper: {
    marginBottom: 90,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Gotham Pro',
  },
  welcome: {
    fontFamily: 'Gotham Pro',
    textTransform: 'uppercase',
  },
  logoText: {
    marginTop: 7,
    marginBottom: 15,
  },
});
