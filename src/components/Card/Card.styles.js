import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    main: {
        marginTop: 20,
        width: '100%',
        height: 200,
        flexDirection: 'column',
        borderRadius: 10,
        borderColor: colors.darkBlue,
        borderWidth: 1,
        elevation: 10,
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowColor: colors.lightBlue,
        shadowOpacity: 0.15,
    },
    mainTop: {
        width: '100%',
        flexDirection: 'row',
        padding: 15,
    },
    headerText: {
        color: colors.darkBlue,
        fontSize: 18,
        flex: 1,
    },
    informationBody: {
        flexDirection: 'column'
    },
    informationBodyHeadTxtx: {
        marginHorizontal: 15,
    },
    informationBodyBottom: {
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    informationBodyBottomLeft: {
        flexDirection: 'column',
        marginTop: 20,
    },
    informationBodyBottomRight: {
        justifyContent: 'center',
        flex: 1,
    },
    Image: {
        width: 100,
        height: 100,
        marginRight: 15,
        marginLeft: 'auto'
    },
    checkRow: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    checkText: {
        marginTop: 5
    }
});
