import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Clientes from './pages/Clientes';
import Produtos from './pages/Produtos';
import Financeiro from './pages/Financeiro';
import Tarefas from './pages/Tarefas';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/tarefas" element={<Tarefas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;