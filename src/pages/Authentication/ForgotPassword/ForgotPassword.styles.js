import { StyleSheet } from 'react-native';
import { authPageWrapper as wrapper } from '../../../../styles/mixins';
import colors from '../../../../styles/colors';

export default StyleSheet.create({
    imageTop: {
        width: '100%',
        height: 300,
        marginTop: 50,
    },
    textContainer: {
        width: '100%',
        maxWidth: 345,
        marginHorizontal: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainerTop: {
        color: colors.white,
        fontSize: 32,
    },
    containerBottom: {
        marginTop: 10,
        marginBottom: 30,
        alignItems: 'center',
        maxWidth: 230,
    },
    textContainerBottom: {
        color: colors.white,
        fontSize: 15,
    },
});
