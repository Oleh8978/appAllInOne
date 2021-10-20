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
        paddingRight: 15,
        paddingLeft: 15,
        flex: 1,
    },
    mainText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 32,
        color: colors.darkBlue,
        fontFamily: 'Gotham Pro', 
    },
    subText: {
        marginTop: 10,
        fontSize: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        fontFamily: 'Gotham Pro', 
    },
    itemsContainer: {
        width: '100%',
        height: '100%',
        minHeight: '100%',
        justifyContent: 'space-between',
    },
});
