import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import shadow from '../../../styles/mixins/shadowBlock';

export default StyleSheet.create({
    main: {
        ...shadow,
        width: '100%',
        height: 106,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    image: {
        width: 100,
        height: 50,
        marginLeft: 0,
        marginRight: 'auto',
    },
    textTop: {
        fontSize: 15,
        color: colors.lightBlue,
    },
    textBottom: {
        fontSize: 12,
        color: colors.grey,
    },
});
