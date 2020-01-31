import React,{useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { H1, Container, Header, Content, Form, Item, Input } from 'native-base';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {withNavigationFocus} from 'react-navigation';

import {setPasscode} from '../../actions/inputActions';

import Spacer from '../../components/Spacer';
import EvenNicerButton from '../../components/EvenNicerButton';

const PasscodeScreen = props => {
  const [code, setCode] = useState('');
  const pinInput = useRef();
  const dispatch = useDispatch();
  const {mobileNumber} = useSelector(state => state.signupForm)

  useEffect(() => {
    pinInput.current.focus()
  },[props.isFocused])

  const handleContinue = () => {
    if(code.length === 4) {
      setPasscode(code);
    }
  }
  const handleTextChange = (e) => {
    if(!isNaN(e)) {
      setCode(e)
    }
  }
  return (
    <Container style={styles.background}>
        <Content style={styles.content}>
          <Spacer />
          <H1>Verification code</H1>
          <Spacer />
          <Text>Plese enter the 4-digit code sent to you at {mobileNumber}</Text>
          <Spacer />
          <Spacer />
          <SmoothPinCodeInput
            cellStyle={{
              borderBottomWidth: 3,
              borderColor: '#e5e5e5',
            }}
            cellStyleFocused={{
              borderColor: '#31d19e'
            }}
            textStyle={{
              color: '#1c1c1c',
              fontSize: 22,
            }}
            ref={pinInput}
            value={code}
            onTextChange={setCode}
          />
        </Content>
        <View>
          <EvenNicerButton 
            onPress={handleContinue}
          >
            Resend
          </EvenNicerButton>
          <Spacer />
          <Spacer />
        </View>
    </Container>
  )
}

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
  pinContainer: {
  },
  cellStyle: {
  },
  arrow: {
    marginLeft: 8
  }
})


export default withNavigationFocus(PasscodeScreen);