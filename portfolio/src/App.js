import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/index';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
    </>
  );
}

export default App;
