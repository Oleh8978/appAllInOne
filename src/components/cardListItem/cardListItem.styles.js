import { StyleSheet } from 'react-native';
import shadow from '../../../styles/mixins/shadowBlock';

export default StyleSheet.create({
    card: {
        ...shadow,
        width: '100%',
        height: 67,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftText: {
        marginLeft: 0,
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontFamily: 'Gotham Pro'
    },
    rightContainer: {
        flexDirection: 'column',
    },
    topTextRight: {
        fontWeight: 'bold',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontFamily: 'Gotham Pro'
    },
    bottomTextRight: {
        fontFamily: 'Gotham Pro'
    },
});
