import { StyleSheet } from 'react-native';

import colors from '../../../../../styles/colors';

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },
    body: {
        paddingTop: 40,
        height: '100%',
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: colors.white
    },
    img: {
        height: 300,
        width: '100%'
    },
    mainHeader: {
        fontSize: 32,
        textAlign: 'center',
        maxWidth: 190,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    subHeader: {
        width: '90%',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 30,
    }

});
