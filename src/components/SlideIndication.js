import React, {useState, useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';


const SlideIndication = props => {

  return (
    <View style={{...styles.container, ...props.style}}>
      <Image source={require('../assets/1.png')} />
      <Image source={require('../assets/2.png')} />
      <Image source={require('../assets/1.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 60,
    justifyContent: 'space-between',
    marginVertical: 12
  },
});

export default SlideIndication;
