import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { InputIcon } from '../../components/InputIcon';
import { HeaderSignIn } from '../../components/HeaderSignIn';
import { useAuth } from '../../hooks/auth';

import { 
  Container,
  Field,
  Footer
} from './styles';

interface Params {
  username: string;
}

export function SignInPassword() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const navigation = useNavigation();
  const route = useRoute();
  const { username } = route.params as Params;

  async function handleSignIn() {
    try {
      setLoading(true);
      const credentials = { username, password };
      return await signIn(credentials);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <HeaderSignIn
          onPress={handleBack}
          title="Entre com sua senha"
          back
        />
        
        <Field>
          <InputIcon 
            icon="md-lock-closed"
            placeholder="Senha"
            mask="SSSSSSSS"
            secureTextEntry
            onChangeText={setPassword}
            returnKeyType="send"
            onSubmitEditing={handleSignIn}
          />
        </Field>
        
        <Footer>
          <Button 
          title="Entrar"
          enabled={!loading}
          loading={loading}
          onPress={handleSignIn}/>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}