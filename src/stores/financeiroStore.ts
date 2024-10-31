import create from 'zustand';

interface Transacao {
  id: string;
  tipo: 'receita' | 'despesa';
  descricao: string;
  valor: number;
  data: Date;
  categoria: string;
}

interface FinanceiroStore {
  transacoes: Transacao[];
  adicionarTransacao: (transacao: Transacao) => void;
  removerTransacao: (id: string) => void;
  exportarRelatorio: () => void;
}

export const useFinanceiroStore = create<FinanceiroStore>((set) => ({
  transacoes: [],
  adicionarTransacao: (transacao) =>
    set((state) => ({ transacoes: [...state.transacoes, transacao] })),
  removerTransacao: (id) =>
    set((state) => ({
      transacoes: state.transacoes.filter((transacao) => transacao.id !== id),
    })),
  exportarRelatorio: () => {
    // Implementação da exportação para Excel usando xlsx
  },
}));