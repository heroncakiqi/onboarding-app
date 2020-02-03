import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View, H1, Container, Content } from 'native-base';
import { withNavigationFocus } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import NiceButton from '../../components/NiceButton';
import SlideIndication from '../../components/SlideIndication';
import ButtonContainer from '../../components/ButtonContainer';
import WhiteText from '../../components/WhiteText';

const OnboardingScreenThree = props => {
  return (
		<Container>
			<LinearGradient
				style={styles.background}
				colors={['#7bdda9','#41b8b1']}
			>
			<Content contentContainerStyle={styles.content}>
					<H1 style={styles.text}>Light and Dark theme</H1>
					<View style={styles.imageContainer}>
						<Image style={styles.mockup} source={require('../../assets/onboarding-three/white-phone.png')} />
						<Image style={styles.mockup} source={require('../../assets/onboarding-three/black-phone.png')} />
					</View>
					<View style={styles.text}>
						<WhiteText>Take control of your money by tracking</WhiteText>
						<WhiteText>your expenses, adding goals</WhiteText>
					</View>
					<SlideIndication />
          <View style={styles.buttonContainer}>
            <NiceButton 
              style={styles.button}
              onPress={() => props.navigation.navigate('Login')}
             transparent
            >
              Login
            </NiceButton>
						<NiceButton 
							style={styles.button}
							onPress={() => props.goNext()}>
							Sign up
						</NiceButton>
					</View>
				</Content>
			</LinearGradient>
		</Container>
  ) 
}

const styles = StyleSheet.create({
  background: {
		flex: 1,
	},
	content: {
		marginTop: 60,
		alignItems: 'center',
		justifyContent: "space-between",
		flex: 1
	},
	text: {
		color: 'white',
		marginVertical: 16
	},
	imageContainer: {
		flexDirection: 'row',
	},
	mockup: {
		marginHorizontal: 12
	},
	button: {
    flex: 1,
    marginHorizontal: 16
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
		marginBottom: 36
	}
});

export default withNavigationFocus(OnboardingScreenThree);