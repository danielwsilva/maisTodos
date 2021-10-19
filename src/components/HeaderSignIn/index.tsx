import React from 'react';
import { StatusBar, TouchableOpacityProps } from 'react-native';

import { 
  Container,
  BackButton,
  Icon,
  Title
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  back?: boolean;
}

export function HeaderSignIn({title, back = false, ...rest}: Props) {
  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <BackButton 
        {...rest} 
        activeOpacity={0.5}
      >
        { back && <Icon name="arrow-left" /> }
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
}