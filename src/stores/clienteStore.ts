import create from 'zustand';

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  produtos: string[];
  valorTotal: number;
}

interface ClienteStore {
  clientes: Cliente[];
  adicionarCliente: (cliente: Cliente) => void;
  removerCliente: (id: string) => void;
  atualizarCliente: (id: string, cliente: Partial<Cliente>) => void;
}

export const useClienteStore = create<ClienteStore>((set) => ({
  clientes: [],
  adicionarCliente: (cliente) =>
    set((state) => ({ clientes: [...state.clientes, cliente] })),
  removerCliente: (id) =>
    set((state) => ({
      clientes: state.clientes.filter((cliente) => cliente.id !== id),
    })),
  atualizarCliente: (id, clienteAtualizado) =>
    set((state) => ({
      clientes: state.clientes.map((cliente) =>
        cliente.id === id ? { ...cliente, ...clienteAtualizado } : cliente
      ),
    })),
}));