import {FC} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ThemesPage from './pages/ThemesPage';
import CategoryPage from './pages/CategoryPage';
import RandomPage from './pages/RandomPage'

const App: FC = () =>  {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/ThemesPage" element={<ThemesPage />} />
            <Route path="/category/:tag" element={<CategoryPage />} />
            <Route path="/RandomPage" element={<RandomPage />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
