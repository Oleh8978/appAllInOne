import { StyleSheet } from 'react-native';

import shadow from '../../../styles/mixins/shadowBlock';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    card: {
        width: '100%',
        height: 67,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        ...shadow
    },
    leftContainer: {
        flexDirection: 'row'
    },
    leftText: {
        marginLeft: 0,
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    rightContainer: {
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 0,
    },
    topTextRight: {
        fontWeight: 'bold',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    bottomTextRight: {
        
    }
});
