import React from 'react';
import {Container, Content, H1, Form, Item, Input, Label} from 'native-base';
import {Text} from 'native-base';

const MoreInfoScreen = () => {
  return (
    <Container>
      <H1>More about you</H1>
      <Content>
        <Text>For delivery updates</Text>
        <Form>
          <Item floatingLabel>
            <Label>First and last name</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Email adress</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Adress</Label>
            <Input />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default MoreInfoScreen;
