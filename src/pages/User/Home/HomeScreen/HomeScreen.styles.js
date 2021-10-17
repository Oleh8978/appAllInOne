import { StyleSheet } from 'react-native';
import colors from '../../../../../styles/colors';
import shadow from '../../../../../styles/mixins/shadowBlock';

export default StyleSheet.create({
    mainWrapper: {
        height: '100%',
        minHeight: '100%',
        width: '100%',
        marginBottom: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingRight: 0,
    },
    balanceClick: {
        ...shadow,
        width: '100%',
        minHeight: 50,
        marginTop: 20,
    },
    balanceClickOpened: {
        ...shadow,
        width: '100%',
        minHeight: 100,
        marginTop: 20,
        flexDirection: 'column',
    },
    balanceClickLeft: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        color: colors.lightBlue,
        marginLeft: 0,
        marginRight: 'auto',
    },
    blockOpened: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 0,
        marginBottom: 'auto',
    },
    priceChart: {
        flexDirection: 'column',
        // borderBottomWidth: 2,
        // borderBottomColor: colors.greyLight,
        paddingBottom: 30,
        height: 190,
    },
    priceChartText: {
        fontSize: 16,
        marginBottom: 10,
    },
    fontSizeItemChartContainer: {
        flexDirection: 'row',
    },
    ItemsChartContainer: {
        height: 196,
        minWidth: '100%',
        width: 200,
        flexDirection: 'row',
    },
    TextUserIdentity: {
        marginTop: 30,
        marginBottom: 10,
        fontSize: 16,
    },
    wrapperItemsSteps: {
        ...shadow,
        width: '100%',
        maxWidth: '100%',
        marginBottom: 0,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'baseline',
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 15,
    },
    containerItemSteps: {
        borderRadius: 10,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        padding: 10,
    },
});
