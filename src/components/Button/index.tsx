import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  loading?: boolean;
  enabled?: boolean;
}

export function Button({ title, loading = false, enabled = true, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container 
      loading={loading}
      enabled={enabled}
      {...rest}
    >
      {
        loading
        ? <ActivityIndicator color={theme.colors.background_secondary} />
        : <Title>{title}</Title>
      }
    </Container>
  );
}