import { StyleSheet } from 'react-native';

import colors from '../../../styles/colors';
import shadow from '../../../styles/mixins/shadowBlock';

export default StyleSheet.create({
    card: {
        flex: 1,
        height: 72,
        borderRadius: 10,
        marginLeft: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        ...shadow,
    },
    TopText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: colors.darkBlue,
        fontFamily: 'Gotham Pro',
    },
});
