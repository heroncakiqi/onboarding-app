import React,{useEffect} from 'react';
import { Text, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';
import { View, H1, Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import SlideIndication from '../../components/SlideIndication';
import NiceButton from '../../components/NiceButton';
import ButtonContainer from '../../components/ButtonContainer';
import WhiteText from '../../components/WhiteText';

const OnboardingScreenTwo = props => {
  return (
    <Container>
      <LinearGradient 
        colors={['#fa9f87','#f27d8e']}
        style={styles.background}
      >
        <Content contentContainerStyle={styles.content}>
          <View style={styles.textContainer}>
            <H1 style={{...styles.text, ...styles.title}}>Welcome to Budget Planner</H1>
            <WhiteText>Take control of your money by tracking</WhiteText>
            <WhiteText>your expenses, adding goals</WhiteText>
          </View>
          <Image style={styles.mockup} source={require('../../assets/onboarding-two/mockup.png')} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignupLogin')}
                style={styles.skip}
              >
                <WhiteText>SKIP</WhiteText>
              </TouchableOpacity>
              <SlideIndication />
              <NiceButton  onPress={() => props.goNext()}>
                <Icon  name="arrowright" size={28} color="#f4868d" />
              </NiceButton>
            </View>
            <Image style={styles.fade} source={require('../../assets/onboarding-two/gradient.png')} />
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
    justifyContent: 'space-between',
    marginTop: 60,
    flex: 1,
    position: 'relative',
    alignSelf: 'center',
    width: "100%"
  },
  title: {
    marginBottom: 12
  },
  text: {
    color: 'white',
    alignSelf: 'center'
  },
  mockup: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    zIndex: -3
  },
  fade: {
    position: "absolute",
    bottom: -5,
    width: "100%",
    zIndex: -1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: "90%",
    zIndex: 4,
    marginBottom: 36,
    zIndex: 1,
  },
  skip: {
    marginTop: 14,
    marginRight: 58,
    height: 28,
  }
});

export default OnboardingScreenTwo;
