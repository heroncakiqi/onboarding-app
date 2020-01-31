import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import ShadowView from 'react-native-simple-shadow-view'


const NiceButton = props => {

  let buttonStyle = {
    ...styles.button,
    ...props.style
  }

  let textStyle = {
    ...styles.text
  };

  if(props.transparent) {
    buttonStyle = {
      ...buttonStyle,
      ...styles.transparent
    }
    textStyle = {
      ...textStyle,
      color: 'white'
    }
  }

  if(props.blue){
    buttonStyle = {
      ...buttonStyle,
      ...styles.blue
    }
    textStyle = {
      ...textStyle,
      color: 'white'
    }
  }

  if(props.large) {
    buttonStyle = {
      ...buttonStyle,
      width: '100%'
    }
  }

  if(props.blured) {
    buttonStyle = {
      ...buttonStyle,
      backgroundColor: 'rgba(255,255,255,0.2)'
    }
    textStyle = {color: 'white'}
  }
  return (
    <ShadowView
    style={{
        shadowColor: 'black',
        shadowOpacity: 4,
        shadowRadius: 20,
        shadowOffset: { width: 14, height: 23 },
      }}
    >
    <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
      <Text style={textStyle}>{props.children}</Text>
    </TouchableOpacity>
    </ShadowView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 36,
    alignSelf: 'center',
    shadowColor: 'rgba(239, 245, 255, 0.004)',
    shadowOffset: {width: 0, height: 16},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    position: 'relative',
  },
  text: {
    fontSize: 20
  },
  transparent: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderWidth: 1,
    borderColor: 'white'
  },
  blue: {
    backgroundColor: '#4666d5',
  }
})

export default NiceButton;