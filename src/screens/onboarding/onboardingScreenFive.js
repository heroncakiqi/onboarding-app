import React from 'react';
import { Text, StyleSheet,ImageBackground } from 'react-native';
import {Container, Content, View, H1, H4 } from 'native-base';


import ButtonContainer from '../../components/ButtonContainer';
import EvenNicerButton from '../../components/EvenNicerButton';
import NiceButton from '../../components/NiceButton';

const OnboardingScreenFive = props => {
  
  return (
    <Container>
      <ImageBackground
      style={styles.background}
      source={require('../../assets/onboarding-five/bg.png')}
      >
        <Content contentContainerStyle={styles.content}>
          <View>
            <H1 style={styles.text}>Get the life you want!</H1>
            <H1 style={styles.text}>Save more money.</H1>
          </View>
          <ButtonContainer>
            <EvenNicerButton 
              large 
              style={styles.button}
              onPress={() => props.goNext()}>
                Create free account
            </EvenNicerButton>
            <NiceButton 
              blue 
              large 
              style={{...styles.button, ...styles.fbButton}}
            >
              Continue with facebook
            </NiceButton>
            <View style={styles.login}>
              <Text style={styles.text}>Already have an account?</Text>
              <NiceButton 
                blured 
                large 
                style={styles.button}
              >
                Login
              </NiceButton>
            </View>
        </ButtonContainer>
        </Content>
      </ImageBackground>
      </Container>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 20
  },
  content: {
    flex: 1,
    marginTop: 48,
    marginBottom: 32,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
  },
	text: {
		color: 'white',
		alignSelf: 'center'
  },
  button: {
    marginVertical: 6
  },
  fbButton: {
    marginBottom: 32
  }
});

OnboardingScreenFive.navigationOptions = {
  header: null
}


export default OnboardingScreenFive;