import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

export default StyleSheet.create({
    container: {
        width: '100%',
    },
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
        marginBottom: 20,
    },
    textContainerTop: {
        color: colors.white,
        fontSize: 32,
        fontFamily: 'Gotham Pro', 
    },
    containerBottom: {
        marginTop: 10,
        alignItems: 'center',
        maxWidth: 250,
    },
    textContainerBottom: {
        color: colors.white,
        fontSize: 15,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 15,
    },
});
