import { Routes, Route, Outlet } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import NavBar from './views/components/NavBar';

// View imports
import Main from './views/Main';
// import NavBar from './views/components/NavBar';

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

const NavLayout = () => (
  <div className="flex flex-col min-h-screen">
    <NavBar />
    <Outlet />
  </div>
);

// Routing
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}
