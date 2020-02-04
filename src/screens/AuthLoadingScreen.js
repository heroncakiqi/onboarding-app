import React, {useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import {Spinner} from 'native-base';

const AuthLoadingScreen = props => {
  useEffect(() => {
    getUser();
  }, []);

  //
  const getUser = async () => {
    const token = await AsyncStorage.getItem('users_info');
    if (token) {
      props.navigation.navigate('Login');
    } else {
      /* TODO: check if the user completed the the intro slides, 
      if he competed them send him ditect to the signup/login page */
      const existingUser = await AsyncStorage.getItem('existingUser');
      if (existingUser) {
        props.navigation.navigate('Login');
        return;
      } else {
        // othervise show him the onboarding screens
        props.navigation.navigate('OnboardingSwiper');
        return;
      }
    }
  };
  return <Spinner />;
};

export default AuthLoadingScreen;
