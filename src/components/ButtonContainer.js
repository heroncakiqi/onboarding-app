import React from 'react';
import { View, StyleSheet } from 'react-native';


const ButtonContainer = props => {
  return (
    <View style={{...styles.container, ...props.style}}>
      {props.children}
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
  }
})

export default ButtonContainer;

