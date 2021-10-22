import { StyleSheet } from 'react-native';
import colors from '../../../../../styles/colors';
import shadow from '../../../../../styles/mixins/shadowBlock';
import roundedLayer from '../../../../../styles/mixins/roundedLayer';

export default StyleSheet.create({
    mainWrapper: {
        ...roundedLayer,
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
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 16,
        color: colors.lightBlue,
        marginLeft: 0,
        marginTop: 3,
        marginRight: 'auto',
        // fontFamily: 'Gotham Pro',
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
        // fontFamily: 'Gotham Pro',
        fontWeight: '600'
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
        fontWeight: '600'
        // fontFamily: 'Gotham Pro',
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
    kycTextTop: {
        marginLeft: 0,
        marginTop: 'auto',
        marginBottom: 0,
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 15,
        fontWeight: '600'
    },
    KYCTextBottom: {
        marginLeft: 0,
        marginBottom: 0,
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 15,
        fontWeight: '600'
    }
});
