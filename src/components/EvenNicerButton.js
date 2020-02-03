import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { View, H2, H3 } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


const EvenNicerButton = props => {

  let buttonStyle = {
    ...styles.container,
    ...props.style
  }

  let textStyle = {
    ...styles.textStyle
  };

  if(props.transparent) {
    buttonStyle = {
      ...buttonStyle,
      ...styles.textStyle,
      ...styles.transparent
    }
    textStyle = {
      color: 'white'
    }
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
      <LinearGradient
      style={styles.button}
      start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#7ef192', '#2dc897']}
      >
        <H3 style={textStyle}>{props.children}</H3>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 36,
    alignSelf: 'center',
    width: "100%"
  },
  container: {
    borderRadius: 30,
    shadowColor: 'rgba(239, 245, 255, 0.004)',
    shadowOffset: {width: 0, height: 16},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  textStyle: {
    color: 'white'
  },
  transparent: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderWidth: 1,
    borderColor: 'white'
  }
})

export default EvenNicerButton;