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

// signup screens
import MobileNumberScreen from './src/screens/signup/MobileNumberScreen'
import PasscodeScreen from './src/screens/signup/PasscodeScreen';
import VerificationScreen from './src/screens/signup/VerificationScreen';
import TermsAndConditionsScreen from './src/screens/signup/TermsAndConditions';

// login screen

import LoginScreen from './src/screens/login/LoginScreen';

const authFlow = createStackNavigator({
  OnboardingSwiper,
  SignupLogin: OnboardingScreenFive,
  MobileNumber: MobileNumberScreen,
  Passcode: PasscodeScreen,
  Verification: VerificationScreen,
  TermsAndConditions: TermsAndConditionsScreen,
  Login: LoginScreen,
});

const navigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  authFlow,
  // TODO: App flow
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