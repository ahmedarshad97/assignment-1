
import './global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogsList from './screens/blogsList';
import BlogDetail from './screens/blogDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogsList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
