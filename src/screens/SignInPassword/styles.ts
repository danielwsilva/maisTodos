import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 20}px 15px 0;
`;

export const Field = styled.View`
  flex: 1;
  margin-top: 60px;
`;

export const Footer = styled.View`
  flex: 1;
`;


