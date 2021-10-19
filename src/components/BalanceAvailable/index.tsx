import React, { useState } from 'react';

import { 
  Container,
  Content,
  Wrapper,
  Title,
  WrapperBalance,
  Balance,
  ToggleShowPassButton,
  Icon,
  Description,
} from './styles';

interface Props {
  balance: string;
}

export function BalanceAvailable({ balance }: Props) {
  const [balanceHidden, setBalanceHidden] = useState(false);

  if (!balanceHidden) {
    return (
      <Container>
        <ToggleShowPassButton onPress={() => setBalanceHidden(!balanceHidden)}>
          <Icon name="eye-off" size={80} />
        </ToggleShowPassButton>

        <Description>
          Esse é o valor que você ganhou comprando {"\n"} em parceiros do Cartão de TODOS e comprando no Ganha TODOS
        </Description>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <Wrapper>
          <Title>Saldo Disponível</Title>
          <WrapperBalance>
            <Balance>{balance}</Balance>
            <ToggleShowPassButton onPress={() => setBalanceHidden(!balanceHidden)}>
              <Icon name="eye" size={30}/>
            </ToggleShowPassButton>
          </WrapperBalance>
        </Wrapper>
      </Content>

      <Description>
        Esse é o valor total de cashback, depósitos, {"\n"} pagamento e transferências recebidas.
      </Description>
    </Container>   
  );
}