import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { View, H1, Container, Content } from 'native-base';

import NiceButton from '../../components/NiceButton';
import SlideIndication from '../../components/SlideIndication';
import ButtonContainer from '../../components/ButtonContainer';
import WhiteText from '../../components/WhiteText';

const OnboardingScreenOne = (props) => {

  return (
    <Container style={styles.background}>
      <ImageBackground
        source={require('../../assets/onboarding-one/bg-copy.png')}
        style={styles.background}>
        <Content contentContainerStyle={styles.content}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/onboarding-one/overview.png')}/>
            <Image style={styles.middle} source={require('../../assets/onboarding-one/white-mockup.png')}/>
            <Image source={require('../../assets/onboarding-one/cards.png')}/>
          </View>
          <View style={styles.textContainer}>
            <H1 style={styles.title}>Let’s get started</H1>
            <WhiteText>Take control of your money</WhiteText>
            <WhiteText>by tracking your expenses, adding goals</WhiteText>
          </View>
          <SlideIndication  />
          <ButtonContainer>
            <NiceButton 
              style={styles.button}
              large 
              onPress={() => props.navigation.navigate('OnboardingTwo')}
            >
              Next
            </NiceButton>
        </ButtonContainer>
        </Content>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  content: {
    justifyContent: 'space-between',
    flex: 1
  },
  imageContainer: {
    marginTop: 88,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginBottom: 10
    },
  button: {
    marginBottom: 30
  },
  middle: {
    position: 'relative',
    top: -35,
  }
});

export default OnboardingScreenOne;
