import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

import { DEVICE_WIDTH } from '../../../../constants/constants';

export default StyleSheet.create({
  kycPage: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white
  },
  progressBar: {
    height: 60,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '1%',
  },
  progressValue: {
    height: 6,
    width: '40%',
    marginRight: '0.5%',
    backgroundColor: '#6560E0',
  },
  stepContainer: {
    flexDirection: 'column',
    marginLeft: -12,
    marginRight: -10,
    marginTop: 17,
  },
  description: {
    fontSize: DEVICE_WIDTH <= 360 ? 17 : 21,
    marginTop: DEVICE_WIDTH <= 360 ? 20 : 50,
  },
  invisiblePicker: {
    position: 'absolute',
    width: '100%',
    opacity: 0,
  },
  documentWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  documentName: {
    fontSize: 20, position: 'relative', top: 15,
  },
  hr: {
    height: 1,
    width: '100%',
    backgroundColor: colors.greyLight,
    position: 'relative',
    top: 15,
    marginVertical: 7,
  },
  close: {
    position: 'absolute',
    right: -10,
    top: -10,
    zIndex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderColor: colors.purple,
    borderWidth: 1,
  },
  photoHeader: {
    position: 'relative',
    top: -10,
    width: '100%',
    maxWidth: '95%',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.purple,
  },
  agreementBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blackTransparent,
  },
  agreementWrapper: {
    height: '95%',
    width: '90%',
    minHeight: 500,
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingTop: 35,
    paddingBottom: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  agreementButton: {
    width: '100%',
    position: 'absolute',
    bottom: 1,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.greyLight,
  },
  headText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  topImage: {
    width: '100%',
    height: 330,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  kycUpload: {
    marginTop: -140,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 196,
    height: 50,
  },
  kycUploadContainer: {
    width: 'auto',
    marginBottom: 17,
  },
  sideText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
  }
});
