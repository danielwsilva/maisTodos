import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  padding-bottom: 15px;
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.colors.main_light};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_900};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(29)}px;
  text-align: center;
  margin-top: 50px;
`;

export const BackButton = styled(TouchableOpacity)`
  height: ${RFValue(24)}px;
`;

export const Icon = styled(FontAwesome).attrs({
  size: 24,
  color: theme.colors.main
})``;
