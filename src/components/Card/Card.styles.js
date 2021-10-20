import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    main: {
        marginTop: 20,
        width: '100%',
        height: 200,
        flexDirection: 'column',
        borderRadius: 10,
        borderColor: colors.darkBlue,
        borderWidth: 1,
    },
    mainTop: {
        width: '100%',
        flexDirection: 'row',
        padding: 15,
    },
    headerText: {
        color: colors.darkBlue,
        fontSize: 18,
        flex: 1,
        fontFamily: 'Gotham Pro'
    },
    informationBody: {
        flexDirection: 'column',
    },
    informationBodyHeadTxtx: {
        marginHorizontal: 15,
    },
    informationBodyBottom: {
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    informationBodyBottomLeft: {
        flexDirection: 'column',
        marginTop: 20,
    },
    informationBodyBottomRight: {
        justifyContent: 'center',
        flex: 1,
    },
    Image: {
        width: 100,
        height: 100,
        marginRight: 15,
        marginLeft: 'auto',
    },
    checkRow: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    checkText: {
        marginTop: 5,
    },
    bottomBody: {
        height: 120,
        marginTop: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    bodyBottomLeft: {
        flex: 1,
        flexDirection: 'column',
    },
    bodyBottomRight: {
        flex: 1,
        flexDirection: 'column',
    },
    containerTop: {
        flexDirection: 'column',
        height: 50,
    },
    containerBottom: {
        flexDirection: 'column',
        height: 60,
    },
    payOutText: {
        fontSize: 15,
        color: colors.grey,
    },
    amountText: {
        color: colors.darkBlue,
        fontSize: 20,
    },
    button: {
        width: 100,
        height: 30,
        borderRadius: 8,
        backgroundColor: colors.lightBlue,
        marginRight: 0,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 13,
        color: colors.white,
    },
});
