import React, {useEffect, useState} from 'react';
import { Text, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';
import { View, H1 } from 'native-base';
import { useDispatch } from 'react-redux';
import {setInput} from '../../actions/inputActions';

import NiceButton from '../../components/NiceButton';
import SlideIndication from '../../components/SlideIndication';
import ButtonContainer from '../../components/ButtonContainer';
import WhiteText from '../../components/WhiteText';
import Spacer from '../../components/Spacer';

const OnboardingScreenOne = (props) => {

  return (
    <ImageBackground
      source={require('../../assets/onboarding-one/bg-copy.png')}
      style={styles.background}>
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
      <SlideIndication style={{marginBottom: 30}} />
      <ButtonContainer>
        <NiceButton style={{width:'100%'}} onPress={() => props.navigation.navigate('OnboardingTwo')}>
          Next
        </NiceButton>
      </ButtonContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  imageContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  textContainer: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginBottom: 8
    },
  middle: {
    position: 'relative',
    top: -35,
  }
});

export default OnboardingScreenOne;
