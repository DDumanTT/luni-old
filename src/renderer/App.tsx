import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';

// View imports
import Main from './Main';
// import NavBar from './components/NavBar';

declare global {
  interface Window {
    electron: {
      store: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get: (key: string) => any;
        set: (key: string, val: string) => void;
      };
    };
  }
}

// const NavLayout = () => (
//   <div
//     id="MainContent"
//     className="h-screen relative top-[26px] left-0 overflow-auto scroll"
//   >
//     <NavBar />
//     <Outlet />
//   </div>
// );

// Routing
export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<NavLayout />}>
        <Route index element={<Main />} />
      </Route> */}
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
