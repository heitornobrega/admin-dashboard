import { useState } from 'react';
import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  const openSidebar = () => {
    console.log('teste');
    setSideBarOpen(true);
  }

  const closeSidebar = () => {
    setSideBarOpen(false);
  }
  
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={ sidebarOpen } closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
