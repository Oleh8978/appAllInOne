import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    minHeight: '100%',
  },
  cardHeaderContainer: {
    alignItems: 'center',
  },
  cardHeaderText: {
    marginTop: 55,
    width: '50%',
    lineHeight: 45,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Gotham Pro',
    fontWeight: 'bold',
    fontSize: 30,
  },
  cardImage: {
    top: '-2%',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardChecboxContainer: {
    width: '100%',
    marginHorizontal: 50,
  },
  cardCheckbox: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  cardCheckboxText: {
    marginLeft: 15,
    flexDirection: 'row',
    fontFamily: 'Gotham Pro',
    fontSize: 14,
    color: colors.white,
  },
});
