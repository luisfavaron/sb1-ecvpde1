import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  UsersIcon,
  CubeIcon,
  BanknotesIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/' },
  { name: 'Leads', icon: UserGroupIcon, href: '/leads' },
  { name: 'Clientes', icon: UsersIcon, href: '/clientes' },
  { name: 'Produtos', icon: CubeIcon, href: '/produtos' },
  { name: 'Financeiro', icon: BanknotesIcon, href: '/financeiro' },
  { name: 'Tarefas', icon: ClipboardDocumentListIcon, href: '/tarefas' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-white font-bold text-xl">Gestão Empresarial</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}