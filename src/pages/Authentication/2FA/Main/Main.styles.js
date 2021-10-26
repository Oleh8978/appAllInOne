import { StyleSheet } from 'react-native';

import colors from '../../../../../styles/colors';

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
    },
    body: {
        paddingRight: 15,
        paddingLeft: 15,
    },
    img: {
        marginTop: 30,
        width: '100%',
        height: 300,
    },
    headerMain: {
        fontSize: 32,
        textAlign: 'center',
        lineHeight: 38,
        fontWeight: '400'
    },
    subHeader: {
        marginTop: 10,
        textAlign: 'center',
        maxWidth: '90%',
        fontSize: 15,
        lineHeight: 21,
        marginBottom: 20,
        fontFamily: 'Gotham Pro',
    },
    skipContainer: {
        marginTop: 35,
        paddingRight: 19,
    },
    skipText: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 18,
        color: colors.lightBlue,
        fontFamily: 'Gotham Pro',
    },
});
