
import { Home } from './pages/Home'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>     
  );
}
export default App;

