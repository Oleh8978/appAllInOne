import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    main: {
        width: '100%',
        height: 200,
        flexDirection: 'column',
        marginTop: 65,
    },
    mainTop: {
        width: '100%',
        flexDirection: 'row',
    },
    mainBottom: {
        marginTop: 70,
        height: 80,
        width: '100%',
        flexDirection: 'row',
    },
    mainBottomLeft: {
        marginLeft: 15,
        marginRight: 'auto',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        maxWidth: 167,
        maxHeight: 70,
    },
    mainBottomRight: {
        marginLeft: 0,
        marginRight: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        maxWidth: 167,
        maxHeight: 70,
    },
    leftBlock: {
        flex: 1,
    },
    centerBlock: {
        flex: 1,
    },
    rightBlock: {
        flex: 1,
    },
    centerBlockWrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    headerText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 32,
        color: colors.white,
    },
    subHeader: {
        textAlign: 'center',
        color: colors.white,
    },
});
