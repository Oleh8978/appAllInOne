import { StyleSheet } from 'react-native';
import colors from '../../../../../styles/colors';
import shadow from '../../../../../styles/mixins/shadowBorder';

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },
    mainBody: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 30,
        marginBottom: -60,
        backgroundColor: colors.white,
        paddingTop: 15,
        paddingHorizontal: 15,
        flexDirection: 'column',
    },
    topTextContainer: {
        width: 190,
    },
    topText: {
        fontSize: 20,
    },
    bottomContainer: {
        width: '100%',
        minHeight: '100%',
        flexDirection: 'column',
        paddingTop: 15,
        marginBottom: '75%',
    },
    itemList: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemListTxt: {
        marginLeft: 3,
    },
    checkBoxContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10,
        paddingLeft: 4,
    },
    agreementContainer: {
        width: '100%',
        height: 40,
        marginBottom: 0,
        paddingLeft: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: colors.darkBlue,
        width: 15,
        height: 15,
        marginRight: 5,
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: 2,
    },
});
