import { createServerContext } from 'react';
import TopBar from './components/top-bar/Index';
import SideBar from './components/side-bar/Index';

function MainLayout() {
  
 
  return (
    <div>
     <div className="h-screen">
     <header>
        <TopBar/>
      </header>

      <div className="flex bg-gray-100 h-full">
        {true && (
          <aside className="w-64 bg-gray-200">
            <SideBar/>
           </aside>
        )}

        <main className="flex flex-1">
          {/* Conteúdo principal */}
        </main>
      </div>
    </div>
    </div>
  )
}

export default MainLayout
