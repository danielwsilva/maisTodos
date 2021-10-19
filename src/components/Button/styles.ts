import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  enabled?: boolean;
  loading?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main };
  opacity: ${({ enabled, loading }) => 
  (enabled === false || loading === true) ? .5 : 1 };
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(15)}px;
`;
