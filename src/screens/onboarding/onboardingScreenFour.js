import React from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {View, Container, Content, H1} from 'native-base';

import SlideIndication from '../../components/SlideIndication';
import EvenNicerButton from '../../components/EvenNicerButton';
import WhiteText from '../../components/WhiteText';

const OnboardingScreenFour = props => {
  return (
    <Container>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/onboarding-four/bg.png')}>
        <Content contentContainerStyle={styles.content}>
          <SlideIndication />
          <View style={styles.buttonContainer}>
            <View style={styles.textContainer}>
              <H1 style={styles.text}>Plan ahead your expenses </H1>
              <H1 style={styles.text}>and gain total control</H1>
            </View>
            <EvenNicerButton
              onPress={() => props.goNext()}
              style={styles.button}>
              Let's get started
            </EvenNicerButton>
            <TouchableOpacity style={styles.skip}>
              <WhiteText>Skip this step</WhiteText>
            </TouchableOpacity>
          </View>
        </Content>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 20,
  },
  textContainer: {
    marginVertical: 22,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    marginBottom: 28,
  },
  skip: {
    marginVertical: 18,
  },
  content: {
    paddingTop: 24,
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default OnboardingScreenFour;
