import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        width: '100%',
        minWidth: '100%',
        flexDirection: 'row',
        alignContent: 'space-between',
        marginTop: 8,
    },
    textOne: {
        flex: 1,
        fontWeight: 'bold',
    },
    textTwo: {
        flex: 1,
    },
    lastOne: {
        flex: 1,
    },
    button: {
        marginLeft: 'auto',
        marginRight: 0,
        borderWidth: 2,
        borderRadius: 6,
        borderColor: colors.lightBlue,
        width: 57,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTxt: {
        color: colors.dark,
    },
    buttonTxtGreen: {
        color: colors.darkGreen,
    },
    buttonGet: {
        marginLeft: 'auto',
        marginRight: 0,
        borderRadius: 6,
        width: 58,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkBlue,
        borderColor: colors.lightBlue,
    },
});
