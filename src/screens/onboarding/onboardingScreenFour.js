import React, {useEffect, useState} from 'react';
import { Text, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';
import { View, H1 } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import SlideIndication from '../../components/SlideIndication';
import ButtonContainer from '../../components/ButtonContainer';
import EvenNicerButton from '../../components/EvenNicerButton';
import Spacer from '../../components/Spacer';
import WhiteText from '../../components/WhiteText';

const OnboardingScreenFour = props => {
  return (
		<ImageBackground
			style={styles.background}
			source={require('../../assets/onboarding-four/bg.png')}
		>
			<SlideIndication dots={4} active='fourth' style={styles.dots}/>
			<ButtonContainer style={styles.textContainer}>
			<H1 style={styles.text}>Plan ahead your expenses </H1>
			<H1 style={styles.text}>and gain total control</H1>
			<Spacer />
			<Spacer />
				<EvenNicerButton 
					onPress={() => props.navigation.navigate('OnboardingFive')}
					style={styles.button}>
						Let's get started
				</EvenNicerButton>
				<Spacer />
				<Spacer />
				<Spacer />
				<TouchableOpacity>
					<WhiteText>Skip this step</WhiteText>
				</TouchableOpacity>
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
	imageContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 32,
		width: '80%'
	},
	button: {
		width: "100%",
	},
	dots: {
		marginTop: 32,
		marginBottom: 32
	},
});

export default OnboardingScreenFour;