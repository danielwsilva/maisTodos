import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface PropsTransaction {
  type: string;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const ContainerImage = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 5px;
  border-color: ${({ theme }) => theme.colors.line};
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 30px;
  height: 30px;
`;

export const Transaction = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-transform: capitalize;
`;

export const TypeDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(13)}px;
`;

export const Movements = styled.View`
  align-items: flex-end;
`;

export const ValueTransaction = styled.Text<PropsTransaction>`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme, type }) => type === 'D' ? theme.colors.red : theme.colors.main};
  font-size: ${RFValue(18)}px;
`;

export const DateTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(13)}px;
`;
