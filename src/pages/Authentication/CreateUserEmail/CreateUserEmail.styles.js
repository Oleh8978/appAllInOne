import colors from '../../../../styles/colors';
import { formWrapper } from '../../../../styles/mixins';

export default {
  formWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    position: 'relative',
    top: -20,
  },
  imageTop: {
    width: '100%',
    height: 300,
    marginTop: 50,
  },
  form: {
    ...formWrapper,
    justifyContent: 'space-between',
    flex: 1,
  },
  formBody: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 3,
    padding: 15,
  },
  textFooter: {
    color: colors.white,
  },
};
