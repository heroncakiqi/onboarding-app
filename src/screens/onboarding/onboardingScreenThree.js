import React,{useEffect, useState} from 'react';
import { Text, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';
import { View, H1 } from 'native-base';
import { withNavigationFocus } from 'react-navigation';

import NiceButton from '../../components/NiceButton';
import SlideIndication from '../../components/SlideIndication';
import ButtonContainer from '../../components/ButtonContainer';
import WhiteText from '../../components/WhiteText';
import Spacer from '../../components/Spacer';

const OnboardingScreenThree = props => {
  return (
		<ImageBackground
			style={styles.background}
			source={require('../../assets/onboarding-three/bg.png')}
		>
			<H1 style={{...styles.text, ...styles.title}}>Light and Dark theme</H1>
			<View style={styles.imageContainer}>
				<Image source={require('../../assets/onboarding-three/white-phone.png')} />
				<Image source={require('../../assets/onboarding-three/black-phone.png')} />
			</View>
			<View>
				<WhiteText>Take control of your money by tracking</WhiteText>
				<WhiteText>your expenses, adding goals</WhiteText>
			</View>
      <Spacer />
			<SlideIndication />
      <Spacer />
      <Spacer />
			<ButtonContainer style={styles.buttonContainer}>
				<NiceButton transparent>Login</NiceButton>
				<NiceButton 
					style={styles.button}
					onPress={() => props.navigation.navigate('OnboardingFour')}>
					Sign up
				</NiceButton>
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
	},
	text: {
		color: 'white'
	},
	title: {
		marginBottom: 32
	},
	imageContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 32,
		width: '80%'
	},
	dots: {
		marginTop: 32,
		marginBottom: 32
	},
	button: {
		flex: 1
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
		width: '90%'
	}
});

export default withNavigationFocus(OnboardingScreenThree);