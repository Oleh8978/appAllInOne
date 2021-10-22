import { StyleSheet } from 'react-native';

import boxshadow from '../../../styles/mixins/shadowBlock';
import colors from '../../../styles/colors';

export default StyleSheet.create({
 body: {
    ...boxshadow,
    borderRadius: 20,
    marginTop: 15,
    minHeight: 90,
    padding: 15,
    flexDirection: 'column',
 },
 row: {
    flexDirection: 'row',
    width: '100%',
 },
 header: {
     fontFamily: 'Gotham Pro',
     fontSize: 15,
     fontWeight: 'normal',
 },
 subHeader: {
     fontWeight: 'normal',
     fontFamily: 'Gotham Pro',
     marginTop: 5,
     fontSize: 12,
 },
 rowRead: {
     marginTop: 17,
    flexDirection: 'row',
    width: '100%',
 },
 time: {
     color: colors.greyText,
     fontSize: 12,
     fontFamily: 'Gotham Pro',
 },
 radio: {
    width: 12,
    height: 12,
    borderRadius: 34,
    marginLeft: 'auto',
    backgroundColor: colors.lightBlue,
 },
 image: {
     width: 185,
     height: 187,
 },
 content: {
     marginTop: 20,
     fontFamily: 'Gotham Pro',
     fontSize: 15,
     lineHeight: 21,
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
