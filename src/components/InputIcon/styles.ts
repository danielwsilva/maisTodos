import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { MaskedTextInput } from 'react-native-mask-text';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const ToggleShowPassButton = styled.Pressable`
  margin-left: 20px;
`;

export const Icon = styled(Ionicons).attrs({
  size: 24,
  color: theme.colors.text_detail
})``;

export const Input = styled(MaskedTextInput)`
  flex: 1;
  height: ${RFValue(50)}px;
  padding-left: 9px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${(RFValue(15))}px;
`;
