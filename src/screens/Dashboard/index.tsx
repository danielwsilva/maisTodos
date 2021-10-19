import React, { useState, useCallback } from 'react';
import { format, addDays } from 'date-fns';
import { useFocusEffect } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { BalanceAvailable } from '../../components/BalanceAvailable';
import { Transactions } from '../../components/Transactions';
import { Load } from '../../components/Load';

import { TransactionDTO } from '../../dtos/TransactionDTO';
import { BalanceDTO } from '../../dtos/BalanceDTO';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import doctor from '../../assets/doctor.png';

import { 
  Container,
  IconHeader,
  IconDoctor,
  IconLocation,
  CategoryContent,
  CategorySelect,
  ButtonCategory,
  Category,
  TransactionList
} from './styles';

const categories = [
  { id: 'T', title: 'Todos' },
  { id: 'C', title: 'Entrada' },
  { id: 'D', title: 'Saída' },
];

export function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [selection, setSelection] = useState('T');
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);
  const [balance, setBalance] = useState('');

  const { signOut } = useAuth();

  function handleCategorySelect(categoryId: string) {
    setSelection(categoryId);
  }

  async function fetchTransactions() {
    try {
      setLoading(true);
      const response = await api.get('transactions');
      const data = response.data as TransactionDTO[];
      
      const dataFormatted = data.map((item: TransactionDTO) => {
        const valorTransacao = Number(item.valorTransacao)
        .toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });

        const dataTransacao = format(addDays(new Date(item.dataTransacao), 1), 'dd/MM');

        const icon = item.tipoTransacao.split(' ')[0].toLowerCase();

        return {
          id: item.id,
          descricao: item.descricao,
          dataTransacao,
          tipoTransacao: item.tipoTransacao,
          valorTransacao,
          tipoLancamento: item.tipoLancamento,
          cartaoMascarado: item.cartaoMascarado,
          finalCartao: item.finalCartao,
          nomePortador: item.nomePortador,
          icon
        }
      });

      if (selection === 'T')
        return setTransactions(dataFormatted);

      setTransactions(dataFormatted.filter(item => item.tipoLancamento === selection));
    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchBalance() {
    try {
      const response = await api.get('balance');
      
      const data = response.data as BalanceDTO;
      
      const balanceFormatted = Number(data.saldo)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      setBalance(balanceFormatted);
    } catch(error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchTransactions();
  },[selection]));


  useFocusEffect(useCallback(() => {
    fetchBalance();
  },[]));

  return (
    <Container>
      <Header title='Carteira Digital' onPress={signOut}/>
      <IconHeader>
        <IconDoctor source={doctor}/>
        <IconLocation name="location" />
      </IconHeader>

      <BalanceAvailable balance={balance}/>

      <CategoryContent>
        <CategorySelect>
          {
            categories.map(category => (
              <ButtonCategory 
                key={category.id} 
                onPress={() => handleCategorySelect(category.id)}
              >
                <Category checked={category.id === selection}>{category.title}</Category>
              </ButtonCategory>
            ))
          }
        </CategorySelect>
      </CategoryContent>

      {
        loading ? <Load /> :
        <TransactionList
          data={transactions}
          keyExtractor={(_, index)=> String(index)}
          renderItem={({ item }) => (
            <Transactions data={item} />
          )}
        />
      }
    </Container>
  );
}