import { useState, useEffect } from 'react';
import { useClienteStore } from '../stores/clienteStore';
import { useFinanceiroStore } from '../stores/financeiroStore';
import { useLeadStore } from '../stores/leadStore';

export default function Dashboard() {
  const { clientes } = useClienteStore();
  const { transacoes } = useFinanceiroStore();
  const { leads } = useLeadStore();
  const [totalReceitas, setTotalReceitas] = useState(0);
  const [totalDespesas, setTotalDespesas] = useState(0);

  useEffect(() => {
    const receitas = transacoes
      .filter(t => t.tipo === 'receita')
      .reduce((acc, curr) => acc + curr.valor, 0);
    const despesas = transacoes
      .filter(t => t.tipo === 'despesa')
      .reduce((acc, curr) => acc + curr.valor, 0);
    
    setTotalReceitas(receitas);
    setTotalDespesas(despesas);
  }, [transacoes]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UsersIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total de Clientes
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {clientes.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserGroupIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Leads Ativos
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {leads.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BanknotesIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Receitas
                  </dt>
                  <dd className="text-lg font-medium text-green-900">
                    R$ {totalReceitas.toFixed(2)}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BanknotesIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Despesas
                  </dt>
                  <dd className="text-lg font-medium text-red-900">
                    R$ {totalDespesas.toFixed(2)}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}