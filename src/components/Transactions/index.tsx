import React from 'react';

import { TransactionDTO } from '../../dtos/TransactionDTO';

import wallet from '../../assets/wallet.png';
import smartphone from '../../assets/smartphone.png';

import { 
  Container,
  ContainerImage,
  Icon,
  Transaction,
  Description,
  TypeDescription,
  Movements,
  ValueTransaction,
  DateTransaction
} from './styles';

interface PropsTransaction {
  data: TransactionDTO;
}

interface IObjectKeys {
  [key: string]: any;
}

interface PropsIcon extends IObjectKeys {
  pagamento: string;
  recarga: string;
}

const icon = {
  pagamento: wallet,
  recarga: smartphone
} as PropsIcon;

export function Transactions({data}: PropsTransaction) {
  return (
    <Container>
      <ContainerImage>
        <Icon source={icon[data.icon]}/>
      </ContainerImage>

      <Transaction>
        <Description>{data.descricao}</Description>
        <TypeDescription>{data.tipoTransacao}</TypeDescription>
      </Transaction>

      <Movements>
        <ValueTransaction type={data.tipoLancamento}>
          {data.tipoLancamento === 'D' && '-'}
          {data.valorTransacao}
        </ValueTransaction>
        <DateTransaction>{data.dataTransacao}</DateTransaction>
      </Movements>
    </Container>
  );
}