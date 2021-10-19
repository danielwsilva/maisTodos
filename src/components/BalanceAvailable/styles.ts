import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(130)}px;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(16)}px;
  font-weight: 700;
`;

export const Wrapper = styled.View``;

export const WrapperBalance = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Balance = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_900};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(50)}px;
  margin-right: 15px;
`;

export const Icon = styled(Feather).attrs({
  color: theme.colors.main
})``;

export const ToggleShowPassButton = styled.Pressable``;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  text-align: center;
  margin-top: 15px;
`;
