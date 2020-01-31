import React,{useEffect,useState} from 'react';
import { Text, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';
import { View, H1 } from 'native-base';
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
			source={require('../../assets/onboarding-six/bg.png')}
		>
      <View style={styles.textContainer}>
        <H1 style={styles.title}>Plan ahead your expenses</H1>
        <H1 style={styles.title}>and gain total control</H1>
      </View>
      <Spacer />
      <SlideIndication />
      <Spacer />
      <Spacer />
			<ButtonContainer style={styles.textContainer}>
        <EvenNicerButton 
          large 
          style={styles.button}
          onPress={() => props.navigation.navigate('MobileNumber')}>
						Get started
				</EvenNicerButton>
        <Spacer />
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
		justifyContent: 'flex-end',
	},
	title: {
    color: 'white',
		alignSelf: 'center'
	},
	textContainer: {

  },
});

export default OnboardingScreenFive;