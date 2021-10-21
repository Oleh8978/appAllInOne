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
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 15,
        fontFamily: 'Gotham Pro',
    },
    mainBottomPlate: {
        marginBottom: 100,
    },
});
