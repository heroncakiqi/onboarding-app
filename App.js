import React from 'react';
import { StyleSheet, StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { Provider } from 'react-redux'

import store from './src/store';

// onboarding screens

import OnboardingSwiper from './src/screens/onboarding/OnboaedingSwiper'
import OnboardingScreenOne from './src/screens/onboarding/onboardingScreenOne';
import OnboardingScreenTwo from './src/screens/onboarding/onboardingScreenTwo';
import OnboardingScreenThree from './src/screens/onboarding/onboardingScreenThree';
import OnboardingScreenFour from './src/screens/onboarding/onboardingScreenFour';
import OnboardingScreenFive from './src/screens/onboarding/onboardingScreenFive';
import OnboardingScreenSix from './src/screens/onboarding/onboardingScreenSix';


import AuthLoadingScreen from './src/screens/AuthLoadingScreen';

// signup screens
import MobileNumberScreen from './src/screens/signup/MobileNumberScreen'
import PasscodeScreen from './src/screens/signup/PasscodeScreen';
import VerificationScreen from './src/screens/signup/VerificationScreen';
import TermsAndConditionsScreen from './src/screens/signup/TermsAndConditions';

const authFlow = createStackNavigator({
  OnboardingSwiper,
  LoginScreen: OnboardingScreenFive,
  MobileNumber: MobileNumberScreen,
  Passcode: PasscodeScreen,
  Verification: VerificationScreen,
  TermsAndConditions: TermsAndConditionsScreen
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