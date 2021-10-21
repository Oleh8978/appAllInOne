import { StyleSheet } from 'react-native';
import { blockHeader } from '../../../styles/mixins';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  header: {
    ...blockHeader,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  currencyLogo: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  type: {
    fontFamily: 'Gotham Pro',
    color: colors.black,
  },
  arrow: {
    position: 'absolute',
    right: '5%',
  },
  topValue: {
    fontSize: 18,
    color: colors.purple,
    fontFamily: 'Gotham Pro',
  },
  topValueCurrency: {
    fontSize: 11,
    color: colors.purple,
    fontFamily: 'Gotham Pro',
  },
  bottomValue: {
    fontSize: 12,
    color: colors.grey,
    fontFamily: 'Gotham Pro',
  },
});
