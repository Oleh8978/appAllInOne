import { StyleSheet } from 'react-native';
import colors from '../../../../../styles/colors';

export default StyleSheet.create({
    imageTop: {
        height: 90,
        position: 'absolute',
        right: 0,
    },
    mainWrapper: {
        height: '100%',
        width: '100%',
        paddingBottom: 40,
        marginBottom: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.whitePurpule,
        paddingHorizontal: 20,
    },
    topContainer: {
        marginTop: 20,
        paddingBottom: 40,
        borderBottomColor: colors.greyLight,
        borderBottomWidth: 1,
    },
    bottomContainer: {
        marginTop: 20,
        paddingBottom: 90,
    },
    headerText: {
        fontSize: 16,
    },
});
