import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link, Outlet} from 'react-router-dom';

function Layout() {
  return (
    <>
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/blog'}>Blog</Link>
      </li>
    </ul>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
