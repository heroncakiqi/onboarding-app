import React,{useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import { Text, StyleSheet, StatusBar} from 'react-native';
import {Content, H1, Container, View} from 'native-base';
import PhoneInput from 'react-native-phone-input';
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
    <Container style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Content contentContainerStyle={styles.content}>
          <View>
            <H1 style={styles.title}>Let's get started</H1>
            <Text>What is your mobile number?</Text>
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
            <EvenNicerButton 
              style={styles.button}
              onPress={handleContinue}
            >
              Continue
            </EvenNicerButton>
        </Content>
    </Container>
  )
}



const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fcfcff',
    flex: 1,
  },
  content: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: "90%"
  },
  title: {
    marginBottom: 34,
  },
  input: {
    borderColor: '#d8d8d8',
    borderWidth: 1,
    padding: 12,
    marginVertical: 14,
    backgroundColor: '#ffffff',
  },
  button: {
    marginBottom: 40
  }
})

MobileNumberScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#fcfcff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    paddingTop: 20
  },
}

export default withNavigationFocus(MobileNumberScreen);