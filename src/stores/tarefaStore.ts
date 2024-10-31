import create from 'zustand';

interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  prazo: Date;
  status: 'pendente' | 'em_andamento' | 'concluida';
  prioridade: 'baixa' | 'media' | 'alta';
}

interface TarefaStore {
  tarefas: Tarefa[];
  adicionarTarefa: (tarefa: Tarefa) => void;
  removerTarefa: (id: string) => void;
  atualizarTarefa: (id: string, tarefa: Partial<Tarefa>) => void;
}

export const useTarefaStore = create<TarefaStore>((set) => ({
  tarefas: [],
  adicionarTarefa: (tarefa) =>
    set((state) => ({ tarefas: [...state.tarefas, tarefa] })),
  removerTarefa: (id) =>
    set((state) => ({
      tarefas: state.tarefas.filter((tarefa) => tarefa.id !== id),
    })),
  atualizarTarefa: (id, tarefaAtualizada) =>
    set((state) => ({
      tarefas: state.tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, ...tarefaAtualizada } : tarefa
      ),
    })),
}));