import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {H1, Container, Content} from 'native-base';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {withNavigationFocus} from 'react-navigation';

import {setPasscode} from '../../actions/inputActions';

import EvenNicerButton from '../../components/EvenNicerButton';

const VerificationScreen = props => {
  const [code, setCode] = useState('');
  const pinInput = useRef();

  useEffect(() => {
    pinInput.current.focus();
  }, [props.isFocused]);

  useEffect(() => {
    if (code.length === 4) {
      props.navigation.navigate('TermsAndConditions');
    }
  }, [code]);

  const handleContinue = () => {
    if (code.length === 4) {
      setPasscode(code);
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
          <H1 style={styles.title}>Verification code</H1>
          <Text>
            Plese enter the 4-digit code sent to you at {props.mobileNumber}
          </Text>
          <SmoothPinCodeInput
            cellStyle={styles.cellStyle}
            cellStyleFocused={{
              borderColor: '#31d19e',
            }}
            textStyle={{
              color: '#1c1c1c',
              fontSize: 22,
            }}
            containerStyle={styles.pinContainer}
            ref={pinInput}
            value={code}
            onTextChange={handleTextChange}
          />
        </View>
        <EvenNicerButton style={styles.button} onPress={handleContinue}>
          Resend
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
    width: '100%',
    marginTop: 40,
    width: '100%',
  },
  cellStyle: {
    borderBottomWidth: 3,
    borderColor: '#e5e5e5',
    marginLeft: 6,
    marginRight: 6,
  },
  button: {
    marginBottom: 40,
    width: 160,
    alignSelf: 'center',
  },
});

VerificationScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#fcfcff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    paddingTop: 20,
  },
};

const mapStateToProps = state => {
  return {
    mobileNumber: state.signupForm.mobileNumber,
  };
};

export default connect(mapStateToProps)(
  withNavigationFocus(VerificationScreen),
);
