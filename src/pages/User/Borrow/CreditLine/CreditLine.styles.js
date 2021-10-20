import { StyleSheet } from 'react-native';
import colors from '../../../../../styles/colors';
import shadow from '../../../../../styles/mixins/shadowBorder';

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },
    mainBody: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 100,
        marginBottom: -60,
        backgroundColor: colors.white,
        paddingTop: 15,
        paddingHorizontal: 15,
        flexDirection: 'column',
    },
    mainTopHeader: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Gotham Pro', 
    },
    mainTopPlate: {
        ...shadow,
        shadowColor: colors.darkBlue,
        shadowOpacity: 0.22,
        shadowRadius: 5.22,
        elevation: 6,
        marginTop: 15,
        borderRadius: 20,
        height: 70,
        width: '100%',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
    mainTopPlateHeader: {
        color: colors.darkBlue,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Gotham Pro', 
    },
    mainTopPlateSubHeader: {
        color: colors.darkBlue,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Gotham Pro', 
    },
    mainBottomPlate: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    mainBottomPlateHeader: {
        fontSize: 20,
        marginLeft: 0,
        marginRight: 'auto',
        marginTop: 20,
        fontFamily: 'Gotham Pro', 
    },

});
