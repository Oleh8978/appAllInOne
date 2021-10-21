import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';
import shadow from '../../../../styles/mixins/shadowBlock';

export default StyleSheet.create({
    mainWrapper: {
        height: '100%',
        minHeight: '100%',
        width: '100%',
        marginBottom: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.white,
        paddingHorizontal: 0,
        paddingRight: 0,
    },

});
