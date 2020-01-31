import React,{useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { H1, Container, Header, Content, Form, Item, Input } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import {setPasscode} from '../../actions/inputActions';

import Spacer from '../../components/Spacer';
import ButtonContainer from '../../components/ButtonContainer';
import EvenNicerButton from '../../components/EvenNicerButton';

const PasscodeScreen = props => {
  const [code, setCode] = useState('');
  const pinInput = useRef();
  const dispatch = useDispatch();

  const handleContinue = () => {
    if(code.length === 4) {
      dispatch(setPasscode(code));
      props.navigation.navigate('Verification');
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
          <H1>Create passcode</H1>
          <Spacer />
          <Text>Enter your OPT code here. Used for logging in.</Text>
          <Spacer />
          <Spacer />
            <SmoothPinCodeInput
              autoFocus
              placeholder={<View style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#ffffff',
                borderRadius: 10
              }}></View>}
              textStyle={{
                fontSize: 24,
                color: 'white'
              }}
              containerStyle={styles.pinContainer}
              cellStyle={styles.cellStyle}
              ref={pinInput}
              value={code}
              onTextChange={handleTextChange}
            />
        </Content>
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
    width: '100%',
    height: 80,
  },
  cellStyle: {
    alignContent: "center",
    height: '100%',
    backgroundColor: '#54dc94',
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 14,
    marginRight: 14,
    elevation: 6
  },
  arrow: {
    marginLeft: 8
  }
})


export default PasscodeScreen;