import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text} from 'react-native';
import {Container, Content, H1, Thumbnail} from 'native-base';
import {Button, View} from 'native-base';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import {addPhotoToUser} from '../../actions/inputActions';
import EvenNicerButton from '../../components/EvenNicerButton';
import NiceButton from '../../components/NiceButton';

const UploadPictureScreen = props => {
  const [image, setImage] = useState(require('../../assets/def.jpg'));

  const handleContinue = () => {
    props.addPhotoToUser(image, () => {
      props.navigation.navigate('MoreInfo');
    });
  };

  const handlePress = () => {
    ImagePicker.showImagePicker({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setImage(source);
      }
    });
  };

  return (
    <Container style={styles.background}>
      <H1 style={styles.title}>More about you</H1>
      <Content contentContainerStyle={styles.content}>
        <Text style={styles.subHeader}>Upload your profile picture</Text>
        <TouchableWithoutFeedback onPress={handlePress}>
          <Thumbnail source={image} style={styles.image} />
        </TouchableWithoutFeedback>
        <Text>Btw, you look great :)</Text>
      </Content>
      <View style={styles.buttonContainer}>
        <NiceButton style={styles.button}>Mabye later</NiceButton>
        <EvenNicerButton onPress={handleContinue} style={styles.button}>
          Continue
        </EvenNicerButton>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fcfcff',
  },
  title: {
    fontSize: 22,
    marginLeft: 20,
  },
  content: {
    marginTop: 48,
    alignSelf: 'center',
    alignItems: 'center',
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 22,
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 50,
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    justifyContent: 'center',
  },
});

export default connect(null, {addPhotoToUser})(UploadPictureScreen);
