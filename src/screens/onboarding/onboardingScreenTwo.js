import React from 'react';
import { Text, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';
import { View, H1, Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigationFocus } from 'react-navigation';


import SlideIndication from '../../components/SlideIndication';
import NiceButton from '../../components/NiceButton';
import ButtonContainer from '../../components/ButtonContainer';
import WhiteText from '../../components/WhiteText';

const OnboardingScreenTwo = props => {
  return (
    <Container>
      <ImageBackground 
        source={require('../../assets/onboarding-two/bg.png')}
        style={styles.background}
      >
        <Content contentContainerStyle={styles.content}>
          <View style={styles.textContainer}>
            <H1 style={{...styles.text, ...styles.title}}>Welcome to Budget Planner</H1>
            <WhiteText>Take control of your money by tracking</WhiteText>
            <WhiteText>your expenses, adding goals</WhiteText>
            <Image style={styles.mockup} source={require('../../assets/onboarding-two/mockup.png')} />
          </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity  style={styles.skip}><WhiteText>SKIP</WhiteText></TouchableOpacity>
              <SlideIndication />
              <NiceButton  onPress={() => props.navigation.navigate('OnboardingThree')}>
                <Icon  name="arrowright" size={28} color="#f4868d" />
              </NiceButton>
            </View>
          <Image style={styles.fade} source={require('../../assets/onboarding-two/gradient.png')} />
        </Content>
      </ImageBackground>
    </Container>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  content: {
    justifyContent: 'space-between',
    flex: 1
  },
  textContainer: {

  },
  title: {

  },
  text: {
    color: 'white',
    alignSelf: 'center'
  },
  mockup: {
    position: 'relative',
    bottom: -60,
    zIndex: -3
  },
  fade: {
    position: "absolute",
    bottom: 0,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 4
  },
  skip: {
    marginRight: 58
  }
});

OnboardingScreenTwo.navigationOptions = {
  headerShown: false
}

export default withNavigationFocus(OnboardingScreenTwo);
