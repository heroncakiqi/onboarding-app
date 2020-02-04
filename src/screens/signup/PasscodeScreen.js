import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {H1, Container, Content} from 'native-base';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import {setPasscode} from '../../actions/inputActions';

import EvenNicerButton from '../../components/EvenNicerButton';

const PasscodeScreen = props => {
  const [code, setCode] = useState('');
  const pinInput = useRef();

  const handleContinue = () => {
    if (code.length === 4) {
      props.setPasscode(code);
      props.navigation.navigate('Verification');
    }
  };
  const handleTextChange = e => {
    const input = e.trim();
    if (!isNaN(input)) {
      setCode(input);
    }
  };
  return (
    <Container style={styles.background}>
      <Content contentContainerStyle={styles.content}>
        <View>
          <H1 style={styles.title}>Create passcode</H1>
          <Text>Enter your OPT code here. Used for logging in.</Text>
          <SmoothPinCodeInput
            autoFocus
            placeholder={
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#ffffff',
                  borderRadius: 10,
                }}></View>
            }
            textStyle={{
              fontSize: 24,
              color: 'white',
            }}
            containerStyle={styles.pinContainer}
            cellStyle={styles.cellStyle}
            ref={pinInput}
            value={code}
            onTextChange={handleTextChange}
          />
        </View>

        <EvenNicerButton style={styles.button} onPress={handleContinue}>
          Continue
        </EvenNicerButton>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fcfcff',
    flex: 1,
  },
  content: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    flex: 1,
  },
  title: {
    marginBottom: 12,
  },
  pinContainer: {
    marginTop: 40,
    width: '100%',
    height: 80,
  },
  cellStyle: {
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#54dc94',
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 14,
    marginRight: 14,
    elevation: 6,
  },
  button: {
    marginBottom: 40,
  },
});

PasscodeScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#fcfcff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    paddingTop: 20,
  },
};

export default connect(null, {setPasscode})(PasscodeScreen);
