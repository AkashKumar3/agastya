
import Sidebar from "@/components/Sidebar"
import { Avatar } from '@/components/ui/avatar';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
export default function profile() {
    return(
      <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <header className="bg-white p-4 border-b">
          <div className="flex flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0">
            <h1 className="text-2xl font-bold">Documents</h1>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="text" placeholder="Search..." className="pl-10 w-full" />
            </div>

            <div className="flex items-center space-x-4">
              <Avatar>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces"
                  alt="User"
                />
              </Avatar>
              <p className="font-medium">Angelina Joli</p>
            </div>
          </div>
        </header>

        <main className="p-6 max-w-7xl mx-auto">
         <h1 className="text-3xl">User</h1>
          </main>
          </div>
</div>
)
}