
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/ui/Layout';
import NotFound from './pages/NotFount'

import { RoutesArray } from './components/ui/Routes';
import Home from './pages/NotFount';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            {RoutesArray.map((eachItem, idx)=>{
              return <Route key={idx} path={eachItem.path} element={eachItem.element} />
              })
            }
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
