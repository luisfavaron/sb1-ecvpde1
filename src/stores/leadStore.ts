import create from 'zustand';

interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  status: 'novo' | 'em_contato' | 'qualificado' | 'convertido' | 'perdido';
  produtosInteresse: string[];
  observacoes: string;
}

interface LeadStore {
  leads: Lead[];
  adicionarLead: (lead: Lead) => void;
  removerLead: (id: string) => void;
  atualizarLead: (id: string, lead: Partial<Lead>) => void;
}

export const useLeadStore = create<LeadStore>((set) => ({
  leads: [],
  adicionarLead: (lead) =>
    set((state) => ({ leads: [...state.leads, lead] })),
  removerLead: (id) =>
    set((state) => ({
      leads: state.leads.filter((lead) => lead.id !== id),
    })),
  atualizarLead: (id, leadAtualizado) =>
    set((state) => ({
      leads: state.leads.map((lead) =>
        lead.id === id ? { ...lead, ...leadAtualizado } : lead
      ),
    })),
}));