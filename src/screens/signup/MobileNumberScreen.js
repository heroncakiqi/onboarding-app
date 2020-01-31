import React,{useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import {H1} from 'native-base';
import PhoneInput from 'react-native-phone-input';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigationFocus} from 'react-navigation';

import {setMobileNumber} from '../../actions/inputActions';

import Spacer from '../../components/Spacer';
import ButtonContainer from '../../components/ButtonContainer';
import EvenNicerButton from '../../components/EvenNicerButton';

const MobileNumberScreen = props => {
  const numRef = useRef();
  const [number, setNumber] = useState('');
  const [numErr, setNumErr] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if(props.isFocused) {
      numRef.current.focus();
    }
    return () => setNumErr(null)
  },[props.isFocused]);

  const handleContinue = () => {
    if(numRef.current.isValidNumber(number)){
      dispatch(setMobileNumber(number))
      props.navigation.navigate('Passcode');
    } else {
      setNumErr('please enter a valid number')
    }
  }
  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View style={styles.content}>
          <Spacer />
          <H1>Let's get started</H1>
          <Spacer />
          <Spacer />
          <Text>What is your mobile number?</Text>
          <Spacer />
          <View style={styles.input}>
            <PhoneInput
              ref={numRef}
              value={number} 
              onChangePhoneNumber={setNumber}
              autoFormat
              textProps={{placeholder: 'Mobile number'}}
            />
          </View>
          {numErr && <Text style={{color: 'red'}}>{numErr}</Text>}
        </View>
        <View>
          <EvenNicerButton 
            onPress={handleContinue}
            style={styles.content}
          >
            Continue
          </EvenNicerButton>
          <Spacer />
          <Spacer />
        </View>
    </View>
  )
}

MobileNumberScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <TouchableOpacity 
      style={styles.arrow}
      onPress={() => navigation.navigate('OnboardingFive')}>
      <Icon size={35} name="ios-arrow-round-back"/>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fcfcff',
    flex: 1,
    justifyContent: 'space-between'
  },
  content: {
    width: '90%',
    alignSelf: "center"
  },
  input: {
    borderColor: '#d8d8d8',
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#ffffff',
  },
  arrow: {
    marginLeft: 8
  }
})


export default withNavigationFocus(MobileNumberScreen);