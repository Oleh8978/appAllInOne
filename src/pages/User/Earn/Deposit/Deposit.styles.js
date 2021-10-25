import { StyleSheet } from 'react-native';
import colors from '../../../../../styles/colors';
import boxShadow from '../../../../../styles/mixins/shadow';

export default StyleSheet.create({
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
    topText: {
        marginTop: 20,
        fontWeight: '500',
        fontSize: 20
    },
    rowButtons: {
        marginTop: 10,
        height: 72,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowItemContainer: {
        ...boxShadow,
        flex: 1,
    },
    rowItem: {
        marginRight: 9,
        height: 72,
        minHeight: 72,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText: {
        fontSize: 15,
        color: colors.lightBlue,
        fontWeight: '500'
    },
    coinsContainer: {
        flexDirection: 'column',
        height: '100%',
    }
});
