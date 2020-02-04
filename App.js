import React from 'react';
import { StyleSheet, StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Provider } from 'react-redux'

import store from './src/store';

// onboarding screens
import OnboardingSwiper from './src/screens/onboarding/OnboaedingSwiper'
import OnboardingScreenFive from './src/screens/onboarding/onboardingScreenFive';


import AuthLoadingScreen from './src/screens/AuthLoadingScreen';

import UploadPictureScreen from './src/screens/appFlow/UploadPictureScreen';
import MoreInfoScreen from './src/screens/appFlow/MoreInfoScreen';

// signup screens
import MobileNumberScreen from './src/screens/signup/MobileNumberScreen'
import PasscodeScreen from './src/screens/signup/PasscodeScreen';
import VerificationScreen from './src/screens/signup/VerificationScreen';
import TermsAndConditionsScreen from './src/screens/signup/TermsAndConditions';

// login screen

import LoginScreen from './src/screens/login/LoginScreen';

const signupFlow = createStackNavigator({
  OnboardingSwiper,
  SignupLogin: OnboardingScreenFive,
  MobileNumber: MobileNumberScreen,
  Passcode: PasscodeScreen,
  Verification: VerificationScreen,
  TermsAndConditions: TermsAndConditionsScreen,
});

const appFlow = createStackNavigator({
  UploadPicture: UploadPictureScreen,
  MoreInfo: MoreInfoScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fcfcff',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      paddingTop: 20
    },
  }
})

const navigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Login: LoginScreen,
  signupFlow,
  appFlow
})

const App = createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
});

export default () => {
  return (
    <Provider store={store}>
        <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
          <App />
        </SafeAreaView>
    </Provider>
  )
}