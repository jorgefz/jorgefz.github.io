import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/index';
import Home from './components/Home/home';

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={
                <>
                <Header />
                <main className="main"> <Home /> </main>
                </>
            } />
        </Routes>
        </>
    );
}

export default App;
