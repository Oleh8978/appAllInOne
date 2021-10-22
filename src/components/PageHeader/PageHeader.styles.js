import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    main: {
        width: '100%',
        height: 200,
        flexDirection: 'column',
        marginTop: 65,
    },
    mainTop: {
        width: '100%',
        flexDirection: 'row',
    },
    mainBottom: {
        marginTop: 70,
        height: 80,
        width: '100%',
        flexDirection: 'row',
    },
    mainBottomLeft: {
        marginLeft: 15,
        marginRight: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        // maxWidth: 167,
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
    leftBlock: {
        flex: 1,
    },
    centerBlock: {
        flex: 1,
    },
    rightBlock: {
        flex: 1,
    },
    centerBlockWrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    headerText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 30,
        lineHeight: 33,
        color: colors.white,
        fontFamily: 'Gotham Pro',
    },
    subHeader: {
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 17,
        color: colors.white,
        fontFamily: 'Gotham Pro',
    },
    bellContainer: {
        width: 40,
        height: 40,
        marginTop: -2,
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
