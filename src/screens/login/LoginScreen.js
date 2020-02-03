import React, {useState, useEffect} from 'react';
import {Container, Content, H1, View} from 'native-base';
import {Text, StyleSheet,StatusBar} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const LoginScreen = props => {
  const [code, setCode] = useState('');

  useEffect(() => {
    if(code.length === 4) {
      props.navigation.navigate('');
    }
  },[code])

  const handleTextChange = (e) => {
    const input = e.trim();
    if(!isNaN(input)) {
      setCode(input)
    }
  }
  return (
    <Container style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Content contentContainerStyle={styles.content}>
          <H1 style={styles.title}>Budget Planner</H1>
          <SmoothPinCodeInput 
            autoFocus
            placeholder={<View style={{
              width: 12,
              height: 12,
              borderRadius: 25,
              opacity: 0.3,
              backgroundColor: '#31d19e',
            }}></View>}
            mask={
              <View style={{
                width: 12,
                height: 12,
                borderRadius: 25,
                backgroundColor: '#31d19e',
              }}></View>
            }
            cellStyle={null}
            cellStyleFocused={null}
            password={true}
            value={code}
            onTextChange={handleTextChange}
          />
          <Text style={styles.p}>Unlocking with passcode</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130
  },
  title: {
    marginBottom: 30
  },
  p: {
    marginTop: 18
  }
});

LoginScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#fcfcff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    paddingTop: 20
  },
}

export default LoginScreen