import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { TransactionDTO } from '../../dtos/TransactionDTO';

import theme from '../../styles/theme';

interface Props {
  checked: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const IconHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const IconDoctor = styled.Image`
  width: 50px;
  height: 50px;
`;

export const IconLocation = styled(EvilIcons).attrs({
  size: 50,
  color: theme.colors.main
})``;

export const CategoryContent = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.main};
  align-items: center;
  margin-top: 30px;
`;

export const CategorySelect = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { alignItems: 'center' }
})``;

export const ButtonCategory = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})``;

export const Category = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.background_primary};
  font-size: ${RFValue(20)}px;
  margin: 0 25px;

  ${({ checked }) => checked && css`
  font-family: ${({ theme }) => theme.fonts.primary_700};
    border-bottom-width: 2px;
    border-bottom-color:  ${({ theme }) => theme.colors.background_primary};
  `};
`;

export const TransactionList = styled(FlatList as new () => FlatList<TransactionDTO>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { 
    paddingTop: 15, 
    paddingBottom: 30, 
    paddingHorizontal: 15 
  }
})``;

