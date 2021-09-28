import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import Store from '../../../store';
import statusBar from '../../../../utilities/statusBar';

import {
  KNOW_YOUR_CUSTOMER,
  ACCOUNT,
} from '../../../../constants/navigation/userScreens';

import KeyboardNormalizer from '../../../HOCs/KeyboardNormalizerScrolling';
import Header from '../../../components/Header/Header';
import EMLogoHeader from '../../../components/EMLogoHeader/EMLogoHeader';
import Notification from '../../../components/Notification/Notification';

import KYCfirstStep from './KYCPages/KYCfirstStep';
import KYCSecondStep from './KYCPages/KYCSecondStep';
import KYCtheThirdStep from './KYCPages/KYCtheThirdStep';
import KYCScan from './KYCPages/KYCScan';
import KYCFinish from './KYCPages/KYCFinish';

import BlueCheckBoxImage from '../../../../assets/svgs/BlueCheckBoxImage';
import BlueCheckBoxCheckedImage from '../../../../assets/svgs/BlueCheckBoxCheckedImage';
import BlueCheckBoxCircleImage from '../../../../assets/svgs/BlueCheckBoxCircleImage';

import {
  smallHeader,
  formWrapper as body,
} from '../../../../styles/mixins';
import styles from './KnowYourCustomer.styles';

// TODO create logic: if PrimeTrust request more documents

function KnowYourCustomer({ navigation, route }) {
  useFocusEffect(() => statusBar('dark'));
  // const [page, setPage] = useState(Store.user.KYCProgress);
  const [page, setPage] = useState(1);

  const [formErrors, setFormErrors] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // setPage(page < route.params?.page ? route.params?.page : page);

    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: false,
    });
    return () => parent.setOptions({
      tabBarVisible: true,
    });
  }, []);

  const deleteLastError = () => setFormErrors(formErrors.slice(0, formErrors.length - 1));

  const jumpToNextPage = async () => {
    await Store.user.setKYCProgress();
    setFormErrors([]);

    if (page < 3) {
      navigation.push(KNOW_YOUR_CUSTOMER, { page: page + 1 });
    } else navigation.navigate(ACCOUNT);

  };

  const addErrors = (errors) => setFormErrors([...formErrors, ...errors]);

  const pageContent = (_page = 1) => {
    switch (_page) {
      // Text information: Name, Date of Birth etc.
      case 1:
        return (
          <KYCfirstStep
            type={route?.params?.type}
            jumpToNextPage={jumpToNextPage}
            setFormErrors={addErrors}
            showLoader={showLoader}
            setShowLoader={setShowLoader}
            title={'Enter your personal details:'}
          />
        );

        // Document Scan uploading
      case 2:
        return (
          // <KYCScan
          //   jumpToNextPage={jumpToNextPage}
          //   setFormErrors={addErrors}
          //   showLoader={showLoader}
          //   setShowLoader={setShowLoader}
          // />
          <KYCSecondStep
          type={route?.params?.type}
          jumpToNextPage={jumpToNextPage}
          setFormErrors={addErrors}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
          title={'Select a document to verify your identity:'}
        />);

        // Finish
      case 3:
        return (
          <KYCtheThirdStep
          KYCtheThirdStep
          type={route?.params?.type} 
          jumpToNextPage={jumpToNextPage}
          setFormErrors={addErrors}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
          title={'Enter your personal details:'} 
        />);
      case 4:
        return <KYCFinish jumpToNextPage={jumpToNextPage} />;

      default:
        return <Text allowFontScaling={false}>Something went wrong</Text>;
    }
  };

  const circleImage = (page, value) => {
    if (page > value) {
      return (
        <View style={{ ...styles.stepContainer }}>
          <BlueCheckBoxCheckedImage style={{ marginLeft: 'auto', marginRight: 'auto' }} />
          <Text style={{ color: '#6560E0' }}>
            Step
            {`${value}`}
          </Text>
        </View>);
    } if (page < value) {
      return (
        <View style={{ ...styles.stepContainer }}>
          <BlueCheckBoxCircleImage style={{ marginLeft: 'auto', marginRight: 'auto' }} />
          <Text style={{ color: '#6560E0', opacity: 0.5 }}>
            Step
            {`${value}`}
          </Text>
        </View> );
    } if (page === value) {
      return (
        <View style={{ ...styles.stepContainer }}>
          <BlueCheckBoxImage style={{ marginLeft: 'auto', marginRight: 'auto' }} />
          <Text style={{ color: '#6560E0' }}>
            Step
            {`${value}`}
          </Text>
        </View> );
    }
  };

  return (
    <View style={{...styles.kycPage}}>
      <View style={smallHeader}>
        <EMLogoHeader />
        <Header
          topText="KYC Verification"
          navigation={navigation}
          goBackFunction={() => {
            if (!showLoader) {
              navigation.navigate(ACCOUNT);
            }
          }}
        />

      </View>
      <View style={body}>
      <View style={styles.progressBar}>
          {<>
            {circleImage(page, 1)}
            <View style={{ ...styles.progressValue, opacity: page >= 2 ? 1 : 0.5 }} />
            {circleImage(page, 2)}
            <View style={{ ...styles.progressValue, opacity: page >= 3 ? 1 : 0.5 }} />
            {circleImage(page, 3)}
          </>}
        </View>
        {pageContent(page)}
      </View>
      {formErrors.map((error) => <Notification notification={error} close={deleteLastError} key={error.id} />)}
    </View>
  );
}

KnowYourCustomer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.object,
};

export default KeyboardNormalizer(observer(KnowYourCustomer));
