import React, {useState,useEffect} from 'react';
import { Text, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';
import { View, H1 } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigationFocus } from 'react-navigation';


import SlideIndication from '../../components/SlideIndication';
import NiceButton from '../../components/NiceButton';
import ButtonContainer from '../../components/ButtonContainer';
import WhiteText from '../../components/WhiteText';

const OnboardingScreenTwo = props => {
  const [element, setElement] = useState(null)
  useEffect(() => {
    if(props.isFocused) {
      setElement(<SlideIndication />)
    }
  },[props.isFocused])
  return (
    <ImageBackground 
      style={styles.background}
      source={require('../../assets/onboarding-two/Rectangle.png')}>
        <View style={styles.textContainer}>
          <H1 style={{...styles.text, ...styles.title}}>Welcome to Budget Planner</H1>
          <Text style={styles.text}>Take control of your money by tracking</Text>
          <Text style={styles.text}>your expenses, adding goals</Text>
        </View>
       <Image style={styles.mockup} source={require('../../assets/onboarding-two/mockup.png')}/>
       <Image style={styles.fade} source={require('../../assets/onboarding-two/gradient.png')}/>
       <ButtonContainer style={styles.buttonContainer}>
        <TouchableOpacity  style={styles.skip}><WhiteText>SKIP</WhiteText></TouchableOpacity>
        <SlideIndication />
        <NiceButton  onPress={() => props.navigation.navigate('OnboardingThree')}>
          <Icon  name="arrowright" size={28} color="#f4868d" />
        </NiceButton>
       </ButtonContainer>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    paddingTop: 10,
  },
  textContainer: {
    marginTop: 80,
    marginBottom: 40,
  },
  title: {
    marginBottom: 10
  },
  text: {
    color: 'white',
    alignSelf: 'center'
  },
  mockup: {
    position: 'relative',
  },
  fade: {
    position: "absolute",
    width: '100%',
    bottom: 0,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    width: "90%",
    bottom: 100,
    alignItems: 'center'
  },
  skip: {
    marginRight: 58
  }
});

OnboardingScreenTwo.navigationOptions = {
  headerShown: false
}

export default withNavigationFocus(OnboardingScreenTwo);
