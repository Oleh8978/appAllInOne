import { StyleSheet } from 'react-native';

import shadow from '../../../../../styles/mixins/shadowBlock';
import colors from '../../../../../styles/colors';

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },
    mainWrapper: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 15,
        marginBottom: -60,
        backgroundColor: colors.white,
        paddingTop: 15,
        paddingHorizontal: 15,
        flexDirection: 'column',
    },
    imageTop: {
        height: 90,
        position: 'absolute',
        right: 0,
    },
    underHeader: {
        flexDirection: 'column',
    },
    underHeaderTopText: {
        marginTop: 10,
        color: colors.white,
        fontSize: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Gotham Pro', 
    },
    underHeaderBottomText: {
        fontSize: 14,
        color: colors.white,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Gotham Pro', 
    },
    mainBottomRight: {
        width: '100%',
        height: 72,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    card: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        flexDirection: 'row',
        ...shadow,
    },
    leftText: {
        marginLeft: 0,
        marginRight: 'auto',
    },
    rightContainer: {
        flexDirection: 'column',
    },
    topTextRight: {
        fontWeight: 'bold',
    },
    bottomTextRight: {

    },
    transactionsHeader: {
        marginTop: 15,
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Gotham Pro', 
    },
    mainBottom: {
        marginTop: 70,
        height: 80,
        width: '100%',
        flexDirection: 'row',
    },
    mainBottomLeft: {
        marginLeft: 15,
        marginRight: 'auto',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        maxWidth: 167,
        maxHeight: 70,
    },
    mainBottomRight: {
        marginLeft: 0,
        marginRight: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        maxWidth: 167,
        maxHeight: 70,
    },
});
