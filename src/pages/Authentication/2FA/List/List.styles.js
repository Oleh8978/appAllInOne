import { StyleSheet } from 'react-native';

import colors from '../../../../../styles/colors';

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },
    body: {
        marginTop: 40,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: colors.white,
        paddingRight: 15,
        paddingLeft: 15,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 32,
        marginTop: 35,
        maxWidth: 230,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    subHeader: {
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '90%',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 15,

    },

});
