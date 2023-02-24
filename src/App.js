
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './components/ui/Layout';
import { RoutesArray } from './components/ui/Routes';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
        </Route>
          {
            RoutesArray.map((eachItem, idx)=> <Route key={idx} path={eachItem.path} element={eachItem.element} />)
          }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
