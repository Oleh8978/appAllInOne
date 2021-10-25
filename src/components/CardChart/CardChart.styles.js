import { StyleSheet } from 'react-native';

import boxshadow from '../../../styles/mixins/shadowBlock';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        ...boxshadow,
        width: 150,
        height: 120,
        flexDirection: 'column',
        borderRadius: 10,
        marginRight: 15,
        padding: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
    },
    firstRow: {
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 40,
        marginRight: 0,
        marginLeft: 20,
    },
    textUnder: {
        marginTop: 12,
        fontSize: 15,
        lineHeight: 21,
        // fontFamily: 'Gotham Pro',
        fontWeight: '600',
    },
    containerBottom: {
        flexDirection: 'row',
        width: '100%',
    },
    leftText: {
        marginRight: 'auto',
        fontFamily: 'Gotham Pro',
    },
    rightText: {
        fontSize: 15,
        color: colors.lightGreen,
        marginTop: 3,
        fontSize: 15,
        lineHeight: 21,
        // fontFamily: 'Gotham Pro',
    },
    rightText: {
        marginTop: 5,
        fontSize: 14,
        lineHeight: 17,
        color: colors.greenText,
        fontFamily: 'Gotham Pro',
    },

});
