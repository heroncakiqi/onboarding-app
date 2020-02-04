import React from 'react';
import {View, StyleSheet} from 'react-native';

const Spacer = props => {
  return <View style={styles.spacer}>{props.children}</View>;
};

const styles = {
  spacer: {
    margin: 8,
  },
};

export default Spacer;
