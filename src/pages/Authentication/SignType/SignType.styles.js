import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  buttonsItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  signUpText: {
    color: colors.black,
    fontSize: 18,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontFamily: 'Gotham Pro',
  },
  formWrapper: {
    height: 175,
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  buttonContainer: {
    paddingHorizontal: 15,
    width: '100%',
  },
});
