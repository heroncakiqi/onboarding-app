import React, {useState, useEffect} from 'react';
import { Text, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';
import { View, H1, H4 } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


import SlideIndication from '../../components/SlideIndication';
import ButtonContainer from '../../components/ButtonContainer';
import EvenNicerButton from '../../components/EvenNicerButton';
import NiceButton from '../../components/NiceButton';
import Spacer from '../../components/Spacer';

const OnboardingScreenFive = props => {
  
  return (
		<ImageBackground
			style={styles.background}
			source={require('../../assets/onboarding-five/bg.png')}
		>
      <View>
        <H1 style={styles.text}>Get the life you want!</H1>
        <H1 style={styles.text}>Save more money.</H1>
      </View>
			<ButtonContainer style={styles.textContainer}>
        <EvenNicerButton 
          large 
          style={styles.button}
          onPress={() => props.navigation.navigate('OnboardingSix')}>
						Create free account
				</EvenNicerButton>
        <Spacer />
        <NiceButton blue large style={styles.button}>
          Continue with facebook
        </NiceButton>
        <Spacer />
        <Spacer />
        <View style={styles.login}>
          <Text style={styles.text}>Already have an account?</Text>
          <Spacer />
          <NiceButton blured large>Login</NiceButton>
        </View>
			</ButtonContainer>
		</ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
		paddingTop: 70,
		justifyContent: 'space-between',
	},
	text: {
		color: 'white',
		alignSelf: 'center'
	},
	title: {
		marginBottom: 32
	},
  login: {
    position: 'relative',
  }
});

export default OnboardingScreenFive;