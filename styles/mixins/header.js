import { Platform } from 'react-native';
import colors from '../colors';

export default {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  paddingBottom: 20,
  paddingVertical: Platform.OS === 'android' ? 20 : 40,
};
