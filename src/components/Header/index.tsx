import React from 'react';
import { StatusBar, TouchableOpacityProps } from 'react-native';

import { 
  Container,
  Icon,
  Title,
  LogOut
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Header({title, ...rest}: Props) {
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Icon name="menu" />
      <Title>{title}</Title>
      <LogOut {...rest} activeOpacity={0.5}>
        <Icon name="log-out" />
      </LogOut>
    </Container>
  );
}