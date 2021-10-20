import { StyleSheet } from 'react-native';
import colors from '../../../../../styles/colors';

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },
    mainBody: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 25,
        marginBottom: -60,
        backgroundColor: colors.white,
        paddingTop: 15,
        paddingHorizontal: 15,
        flexDirection: 'column',
    },
    containerTop: {
        height: '100%',
        minHeight: 490,
        justifyContent: 'center',
        marginBottom: 'auto',
    },
    textMain: {
        textAlign: 'center',
        fontFamily: 'Gotham Pro', 
    },
    containerBottom: {
        marginTop: 'auto',
        marginBottom: 0,
    },
    agreementContainer: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
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
