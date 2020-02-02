import React,{useEffect,useState} from 'react';
import { Text, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';
import {Container, Content, View, H1 } from 'native-base';


import SlideIndication from '../../components/SlideIndication';
import ButtonContainer from '../../components/ButtonContainer';
import EvenNicerButton from '../../components/EvenNicerButton';

const OnboardingScreenFive = props => {
  return (
    <Container>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/onboarding-six/bg.png')}
      >
        <Content contentContainerStyle={styles.content}>
          <View style={styles.textContainer}>
            <H1 style={styles.title}>Plan ahead your expenses</H1>
            <H1 style={styles.title}>and gain total control</H1>
          </View>
          <SlideIndication />
          <ButtonContainer style={styles.textContainer}>
            <EvenNicerButton 
              large 
              style={styles.button}
              onPress={() => props.navigation.navigate('MobileNumber')}>
                Get started
            </EvenNicerButton>
          </ButtonContainer>
        </Content>
      </ImageBackground>
    </Container>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'flex-end',
    marginBottom: 36
  },
	title: {
    color: 'white',
		alignSelf: 'center'
	},
	textContainer: {
    marginVertical: 12
  },
  button: {
    marginTop: 12
  }
});

export default OnboardingScreenFive;