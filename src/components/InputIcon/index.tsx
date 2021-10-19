import React, { useState } from 'react';
import { MaskedTextInputProps } from 'react-native-mask-text';

import { 
  Container,
  ToggleShowPassButton,
  Icon,
  Input
} from './styles';

interface Props extends MaskedTextInputProps {
  icon: string;
}

export function InputIcon({icon, secureTextEntry, ...rest}: Props) {
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <Container>
      <Icon name={icon} />

      <Input
        {...rest}
        secureTextEntry={secureTextEntry && passwordHidden}
      />

      {secureTextEntry && (
        <ToggleShowPassButton onPress={() => setPasswordHidden(!passwordHidden)}>
          <Icon name={passwordHidden ? "md-eye-off-outline" : "md-eye-outline"} />
        </ToggleShowPassButton>
      )}
    </Container>
  );
}