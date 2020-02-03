import React from 'react';
import {Container, Content, H1, H3} from 'native-base';
import {Text, StyleSheet} from 'react-native';

const TermsAndConditions = () => {
  return (
    <Container style={styles.background}>
      <Content style={styles.content}>
        <H1 style={styles.title}>One last thing</H1>
        <H3>Terms of service</H3>
        <Text style={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec id ipsum ullamcorper, bibendum sapien sed, dictum metus. 
        Quisque dapibus ornare velit. Etiam orci magna, luctus et mattis a, 
        lobortis vitae tellus. Pellentesque dapibus semper leo, 
        in suscipit tortor blandit vitae. Phasellus viverra accumsan orci in efficitur. 
        Morbi pretium turpis id mi rutrum gravida. 
        Vestibulum laoreet enim sit amet purus eleifend, 
        ut feugiat magna faucibus. Vivamus consequat bibendum condimentum.
        </Text>
        <Text style={styles.p}>
          Pellentesque dignissim justo diam, ut consequat erat suscipit nec.
          Mauris a blandit sem. Sed viverra vitae ante sit amet condimentum. 
          Etiam ut nunc eleifend, malesuada libero eu, eleifend lacus. 
          Sed sed velit id dolor aliquet auctor in a ligula. Integer faucibus erat nunc,
            eget lacinia magna congue ac. Phasellus id enim eget turpis posuere vehicula.
        </Text>
        <Text style={styles.p}>
          Nam feugiat ultricies fringilla. 
          Phasellus et nulla ac arcu aliquam commodo in in orci.
          Nullam et ullamcorper arcu. Nulla at venenatis purus.
          Nunc molestie leo eget lectus fringilla egestas.
          Aliquam vestibulum velit magna, sed pharetra libero venenatis in. 
          Proin ac massa accumsan est tempus tempus. Integer ante est,
          vestibulum ac tortor eu, mollis aliquet nibh. Nulla vitae dapibus nisi,
          sit amet facilisis tellus. 
          Donec viverra dolor dapibus quam feugiat bibendum.
          Vestibulum sed velit vitae magna vehicula porta.
        </Text>
        <Text style={styles.p}>
          Fusce vitae felis ut diam viverra tincidunt. 
          Donec interdum augue ac metus efficitur, vitae convallis nulla tincidunt. 
          Integer non condimentum orci. In ac fermentum eros. Integer sagittis pretium aliquet. Morbi varius ex metus, in euismod sapien porta eget. 
          Morbi accumsan risus erat. Nulla vulputate auctor lorem, 
          sed mollis lectus lobortis vitae.
        </Text>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fcfcff'
  },  
  content: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center"
  },
  title: {
    marginBottom: 12
  },
  p: {
    marginVertical: 12
  }
});

TermsAndConditions.navigationOptions = {
  headerStyle: {
    backgroundColor: '#fcfcff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    paddingTop: 20
  },
}

export default TermsAndConditions;