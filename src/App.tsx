import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { List } from './pages/List/List';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='list' element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
