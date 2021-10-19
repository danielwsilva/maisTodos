export interface TransactionDTO {
  id: number;
  descricao: string;
  dataTransacao: string;
  tipoTransacao: string;
  valorTransacao: string;
  tipoLancamento: string;
  cartaoMascarado: string;
  finalCartao: string;
  nomePortador: string;
  icon: string | any;
}