'use client';

import { 
  LayoutDashboard, 
  Receipt, 
  ClipboardList, 
  Files, 
  Store, 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  ShoppingBag
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4">
      <div className="flex items-center mb-8">
        <ShoppingBag className="h-8 w-8 text-blue-500" />
        <span className="ml-2 text-xl font-bold">Shop</span>
      </div>
      
      <nav className="space-y-2">
        <SidebarItem icon={<LayoutDashboard />} text="Dashboard" href="/dashboard" active={pathname === '/dashboard'}/>
        <SidebarItem icon={<Receipt />} text="Transaction" href="/transaction" active={pathname === '/transaction'} />
        <SidebarItem icon={<ClipboardList />} text="Task" href="/task" active={pathname === '/task'} />
        <SidebarItem icon={<Files />} text="Documents" href="/" active={pathname === '/'} />
        <SidebarItem icon={<Store />} text="Store" href="/store" active={pathname === '/store'} />
        <SidebarItem icon={<Bell />} text="Notification" href="/notification" active={pathname === '/notification'} />
        <SidebarItem icon={<User />} text="Profile" href="/profile" active={pathname === '/profile'} />
        <SidebarItem icon={<Settings />} text="Settings" href="/settings" active={pathname === '/settings'} />
      </nav>

      <div className="absolute bottom-4">
        <SidebarItem icon={<LogOut />} text="Log Out" href="/logout" active={pathname === '/logout'} />
      </div>
    </div>
  );
};

const SidebarItem = ({ 
  icon, 
  text, 
  href,
  active 
}: { 
  icon: React.ReactNode; 
  text: string; 
  href: string;
  active: boolean;
}) => {
  return (
    <Link href={href} className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors
      ${active ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-50'}`}>
      <span className="w-5 h-5">{icon}</span>
      <span className="ml-3">{text}</span>
    </Link>
  );
};

export default Sidebar;
