import React, {
  useState, useEffect, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Linking,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { observer } from 'mobx-react-lite';

import Store from '../../../../store';
import uploadScan from '../../../../../services/uploadScan';
import primeTrustErrorFormatter from '../../../../../utilities/formatters/primeTrustErrorFormatter';

import { ID_DOCUMENTS_LIST } from '../../../../../constants/constants';
import { UPLOADED_DOCUMENT_TYPE, ID_OTHER_UPLOADED } from '../../../../../constants/storageKeys';

import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import Indent from '../../../../components/Indent/Indent';
import Modal from '../../../../components/Modal/Modal';
import FormInput from '../../../../components/FormInput/FormInput';
import Score from '../../../../components/Score/Score';

// import KYCUploadImage from '../../../../../assets/svgs/KYCUpload';
import KYCImageDoc from '../../../../../assets/svgs/KYCImageDoc';
import CloseImage from '../../../../../assets/svgs/CloseBlue';

import { view } from '../../../../../styles/mixins';
import styles from '../KnowYourCustomer.styles';
import colors from '../../../../../styles/colors';

function KYCScan({ jumpToNextPage, showLoader, setShowLoader, setFormErrors, selectedType }) {
  const [documents, setDocuments] = useState([]);
  // for the plate with image
  const [numberOfUpload, setNumberOfUpload] = useState(0);
  // for the 1,2 documents
  const [document1, setDocument1] = useState(undefined);
  const [document2, setDocument2] = useState(undefined);

  const [documentsQuantity, setDocumentsQuantity] = useState(1); // max 2
  const [needUploadTwoPhoto, setNeedUploadTwoPhoto] = useState(false);
  const [documentType, setDocumentType] = useState(ID_DOCUMENTS_LIST[0].value);
  const [documentTypeName, setDocumentTypeName] = useState(ID_DOCUMENTS_LIST[0].name);
  const [documentSize, setDocumentSize] = useState([[324, 213], [324, 213]]); // size for styles
  const [otherDocumentName, setOtherDocumentName] = useState(''); // only for Other document type
  const [otherDocumentContent, dispatchOtherDocumentContent] = useReducer((state, action) => {
    switch (action.type) {
      case 'identity':
        return { ...state, identity: !state.identity };
      case 'identity-photo':
        return { ...state, 'identity-photo': !state['identity-photo'] };
      case 'proof-of-address':
        return { ...state, 'proof-of-address': !state['proof-of-address'] };
      case 'eject':
        return {
          identity: false,
          'identity-photo': false,
          'proof-of-address': false,
        };
      default: return state;
    }
  }, {
    identity: false,
    'identity-photo': false,
    'proof-of-address': false,
  });

  const [showDocumentTypePicker, setShowDocumentTypePicker] = useState(false);
  const [showUploadWayPicker, setShowUploadWayPicker] = useState(false);
  const [showOtherDocumentNameInput, setShowOtherDocumentNameInput] = useState(false);
  const [showOtherDocumentContentPicker, setShowOtherDocumentContentPicker] = useState(false);

  const [openCameraLoader, setOpenCameraLoader] = useState(false);
  const [openGalleryLoader, setOpenGalleryLoader] = useState(false);

  useEffect(() => {
    const severalPhoto = documentType === 'drivers_license' || documentType === 'government_id';
    const newDocumentsQuantity = (1 + +severalPhoto) - documents.length;

    setNeedUploadTwoPhoto(severalPhoto);
    setDocumentsQuantity(newDocumentsQuantity);
    setDocumentTypeName(ID_DOCUMENTS_LIST.find((_document) => _document.value === documentType).name);
  }, [documentType, documents.length]);

  useEffect(() => {
    // if (showLoader) {
    //   const { address, photo, id } = Store.user.status;
    //   const scanStatus = {
    //     address: address === 'ok' || address === 'verified' || address === 'pending',
    //     photo: photo === 'ok' || photo === 'verified' || photo === 'pending',
    //     id: id === 'ok' || id === 'verified' || id === 'pending',
    //   };
    //
    //   (async () => {
    //     if (scanStatus.photo && scanStatus.id) {
    //       await jumpToNextPage();
    //     } else if (scanStatus.address || scanStatus.photo || await AsyncStorage.getItem(ID_OTHER_UPLOADED) === 'true') {
    //       const additionalDocuments = Object.keys(scanStatus)
    //         .reduce((accumulator, key) => (!scanStatus[key] ? `${accumulator}${accumulator ? ', ' : ''}${key}` : accumulator), '')
    //         .replace(/,$/, '');
    //       await Store.application.addNotification(`We have received your ${await AsyncStorage.getItem(UPLOADED_DOCUMENT_TYPE) || 'document'}, now we need documents with ${additionalDocuments}`);
    //       setDocuments([]);
    //       setOtherDocumentName('');
    //       setDocumentType(ID_DOCUMENTS_LIST[0].value);
    //       setDocumentTypeName(ID_DOCUMENTS_LIST[0].name);
    //     }
    //     setShowLoader(false);
    //   })();
    // }
  }, [Store.user.status]);

  const uploadID = async () => {
    setShowLoader(true);
    try {
      const uploadedDocuments = {
        front: {
          uri: documents[0].path,
          name: `${documents[0].localIdentifier}_document.jpg`,
          type: 'image/jpeg',
        },
      };

      if (needUploadTwoPhoto) {
        uploadedDocuments.back = {
          uri: documents[1].path,
          name: `${documents[1].localIdentifier}_document.jpg`,
          type: 'image/jpeg',
        };
      }
      if (documentType === 'other') {
        uploadedDocuments['other-type'] = otherDocumentName;
        dispatchOtherDocumentContent({ type: 'eject' });
      }

      await uploadScan(uploadedDocuments, documentType, otherDocumentContent);
      if (otherDocumentContent.identity) {
        await AsyncStorage.setItem(ID_OTHER_UPLOADED, 'true');
      }
      await AsyncStorage.setItem(UPLOADED_DOCUMENT_TYPE, documentType === 'other' ? otherDocumentName : documentType);
      await Store.user.KYCApprove();
      await jumpToNextPage();
    } catch (e) {
      try {
        const errors = JSON.parse(/{.+}/.exec(e.message))?.errors;
        if (errors) {
          setFormErrors(errors.map(primeTrustErrorFormatter));
        } else {
          setFormErrors([{ message: e.message, id: Math.random() }]);
        }
      } catch (_e) {
        setFormErrors([{ message: _e.message, id: Math.random() }]);
      }
    }
    // uncomment for the test purposes to move to finish page
    // jumpToNextPage();
    setShowLoader(false);
  };

  const documentsHandler = (_documents) => {
    const cutDocuments = [...documents, ...[_documents].flat()].slice(0, 2);

    const newSizes = cutDocuments.map((_document) => {
      const ratio = _document.width / _document.height;
      if (ratio < 1) {
        return [Math.floor(300 * ratio), 300];
      }
      return [300, Math.floor(300 / ratio)];
    });

    if (numberOfUpload === 1) {
      setDocument1(cutDocuments[0]);
      setShowUploadWayPicker(false);
    }

    if (numberOfUpload === 2) {
      setDocument2(cutDocuments[1]);
      setShowUploadWayPicker(false);
    }

    setDocumentSize(newSizes);
    setDocuments(cutDocuments);
  };

  const cameraPicker = async () => {
    try {
      setOpenCameraLoader(true);
      await ImagePicker.openCamera({ mediaType: 'photo' })
        .then(documentsHandler);
    } catch (e) {
      setOpenCameraLoader(false);
      setFormErrors([{ message: e.message, id: Math.random() }]);
      if (e.message === 'User did not grant camera permission.') {
        return Alert.alert(
          'To upload ID',
          'Open settings and allow "Rhino Global" to access your Camera',
          [
            {
              text: 'Later',
              style: 'cancel',
            },
            {
              text: 'Open Settings',
              onPress: async () => Linking.openSettings(),
            },
          ],
          { cancelable: false },
        );
      }
    }
    setOpenCameraLoader(false);
  };

  const documentPicker = async () => {
    try {
      setOpenGalleryLoader(true);
      await ImagePicker.openPicker({
        multiple: false,
        mediaType: 'photo',
        maxFiles: documentsQuantity, // iOS only
      })
        .then(documentsHandler);
    } catch (e) {
      setOpenGalleryLoader(false);
      setFormErrors([{ message: e.message, id: Math.random() }]);
      if (e.message === 'User did not grant library permission.') {
        return Alert.alert(
          'To upload ID',
          'Open settings and allow "Rhino Global" to access your Gallery',
          [
            {
              text: 'Later',
              style: 'cancel',
            },
            {
              text: 'Open Settings',
              onPress: async () => Linking.openSettings(),
            },
          ],
          { cancelable: false },
        );
      }
    }
    setOpenGalleryLoader(false);
  };

  const deleteDocument = (i) => {
    if (!showLoader) {
      setDocumentSize(documentSize.filter((_document, j) => j !== i));
      setDocuments(documents.filter((_document, j) => j !== i));
      setShowUploadWayPicker(false);
      setOtherDocumentName('');
      i === 0 ? setDocument1(undefined) : setDocument2(undefined);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginBottom: 230 }}>
        <View style={{ view }}>
          <Text style={{ ...styles.headText }}>{selectedType.name === 'Other' ? 'Please upload selected documents' : `Upload photos of your ${selectedType.name}:`}</Text>
          {document1 === undefined ? (
            <View style={{ ...styles.kycUploadContainer, marginBottom: 40 }}>
              <KYCImageDoc style={{ width: '100%' }} />
              <DefaultButton
                title="Upload"
                isUpload
                customStyles={{ marginTop: 15 }}
                onPress={() => { setShowUploadWayPicker(true); setNumberOfUpload(1); }}
                customStyles={{ ...styles.kycUpload }}
              />
              <Text allowFontScaling={false} style={styles.photoHeader}>Front side</Text>
            </View>
) : (
  <>
    <View style={{ marginbottom: 15 }}>
      <TouchableWithoutFeedback onPress={() => deleteDocument(0)}>
        <View style={styles.close}>
          <CloseImage />
        </View>
      </TouchableWithoutFeedback>
      <Image
        source={{ uri: document1.path }}
        style={{
                        width: '100%',
                        height: documentSize[0][1],
                        maxWidth: '100%',
                        marginBottom: 45,
                      }}
      />
      <Text allowFontScaling={false} style={{ ...styles.photoHeader, position: 'absolute', top: documentSize[0][1] + 10 }}>Front side</Text>
    </View>
  </>
)}

          {document2 === undefined
                ? (
                  <View style={{ ...styles.kycUploadContainer }}>
                    <KYCImageDoc style={{ width: '100%' }} />
                    <DefaultButton
                      title="Upload"
                      isUpload
                      customStyles={{ marginTop: 15 }}
                      onPress={() => { setShowUploadWayPicker(true); setNumberOfUpload(2); }}
                      customStyles={{ ...styles.kycUpload }}
                    />
                    <Text allowFontScaling={false} style={styles.photoHeader}>Back side</Text>
                  </View>
)
                : (
                  <>
                    <View style={{ marginbottom: 15 }}>
                      <TouchableWithoutFeedback onPress={() => deleteDocument(1)}>
                        <View style={styles.close}>
                          <CloseImage />
                        </View>
                      </TouchableWithoutFeedback>
                      <Image
                        source={{ uri: document2.path }}
                        style={{
                        width: '100%',
                        height: documentSize[0][1],
                        maxWidth: '100%',
                        marginBottom: 45,
                      }}
                      />
                      <Text allowFontScaling={false} style={{ ...styles.photoHeader, position: 'absolute', top: documentSize[0][1] + 10 }}>Back side</Text>
                    </View>
                  </>
              )}
          <>
          </>
        </View>
        <View style={view}>
          {!(documents.length === needUploadTwoPhoto + 1)
            ? (
              <></>
            )
            : (
              <DefaultButton
                title="Next page"
                onPress={uploadID}
                showLoader={showLoader}
              />
            )}
        </View>
        {showUploadWayPicker && (
          <Modal
            close={() => setShowUploadWayPicker(false)}
            isNeedLine={false}
            customStyleBody={{ backgroundColor: 'transparrent' }}
          >
            <View style={{ backgroundColor: colors.white,
                borderRadius: 10,
                width: '100%',
                marginLeft: 20,
                marginRight: 20,
                opacity: 0.8 }}
            >
              <DefaultButton
                title="Take Photo"
                onPress={cameraPicker}
                showLoader={openCameraLoader}
                customStyles={{ backgroundColor: 'transparrent', marginTop: 0 }}
              />
              <DefaultButton
                customStyles={{ marginTop: 10 }}
                title="Choose From Library"
                onPress={documentPicker}
                showLoader={openGalleryLoader}
                customStyles={{ backgroundColor: 'transparrent' }}
              />
            </View>

            <DefaultButton
              customStyles={{ marginTop: 10 }}
              title="Cancel"
              onPress={() => { setShowUploadWayPicker(false); }}
              showLoader={openGalleryLoader}
              customStyles={{
                backgroundColor: colors.white,
                borderRadius: 10,
                opacity: 0.8,
                marginTop: 10,
              }}
            />
            <Indent height={20} />
          </Modal>
        )}
        {showOtherDocumentNameInput && (
          <Modal
            header="Write document name"
            close={() => {
              setShowOtherDocumentNameInput(false);
              setOtherDocumentName('');
            }}
            keyboardNormalizer
          >
            <FormInput
              style={{ marginTop: -20 }}
              set={setOtherDocumentName}
              value={otherDocumentName}
              autoFocus
            />
            <Indent height={20} />
            <DefaultButton
              title="Submit"
              showLoader={openGalleryLoader}
              onPress={() => {
                setShowOtherDocumentNameInput(false);
                setShowOtherDocumentContentPicker(true);
              }}
              disabled={!otherDocumentName.length}
            />
            <Indent height={20} />
          </Modal>
        )}
        {showOtherDocumentContentPicker && (
          <Modal
            header="Select all that apply to the content of the document"
            close={() => {
              setShowOtherDocumentContentPicker(false);
              dispatchOtherDocumentContent({ type: 'eject' });
            }}
          >
            <Indent height={20} />
            <Score
              text="Name"
              isSelected={otherDocumentContent.identity}
              onPress={() => dispatchOtherDocumentContent({ type: 'identity' })}
            />
            <Score
              text="Photo"
              isSelected={otherDocumentContent['identity-photo']}
              onPress={() => dispatchOtherDocumentContent({ type: 'identity-photo' })}
            />
            <Score
              text="Proof of address"
              isSelected={otherDocumentContent['proof-of-address']}
              onPress={() => dispatchOtherDocumentContent({ type: 'proof-of-address' })}
            />
            <DefaultButton
              title="Submit"
              onPress={() => {
                setShowUploadWayPicker(true);
                setShowOtherDocumentContentPicker(false);
              }}
              disabled={
                !(otherDocumentContent.identity
                    || otherDocumentContent['identity-photo']
                    || otherDocumentContent['proof-of-address'])
              }
            />
            <Indent height={20} />
          </Modal>
        )}
      </View>
    </ScrollView>
  );
}

KYCScan.propTypes = {
  jumpToNextPage: PropTypes.func,
  showLoader: PropTypes.bool,
  setShowLoader: PropTypes.func,
  setFormErrors: PropTypes.func,
};

export default observer(KYCScan);
