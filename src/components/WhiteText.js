import React from 'react'
import {Text, StyleSheet} from 'react-native';

const WhiteText = props => {
  return (
  <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
		color: 'white',
    alignSelf: 'center',
	},
})

export default WhiteText