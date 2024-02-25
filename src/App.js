import './App.css';
import { lazy,Suspense } from 'react';

const Navbar = lazy(()=>import('./Pages/Frontend/Navbar'))
function App() {
  return (
    <>
    <Navbar/>
    </>
  );
}

export default App;
