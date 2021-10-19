import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { InputIcon } from '../../components/InputIcon';
import { HeaderSignIn } from '../../components/HeaderSignIn';

import { 
  Container,
  Field,
  Footer
} from './styles';

export function SignInUser() {
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  function handleSigInPassword() {
    navigation.navigate('SignInPassword', { username });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <HeaderSignIn title="Entre com seu username" />
        
        <Field>
          <InputIcon 
            icon="person-sharp"
            placeholder="CPF"
            keyboardType="numeric"
            mask="999.999.999-99"
            onChangeText={setUsername}
            returnKeyType="send"
            onSubmitEditing={handleSigInPassword}
          />
        </Field>
        
        <Footer>
          <Button 
            title="Confirmar" 
            onPress={handleSigInPassword}
          />
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}