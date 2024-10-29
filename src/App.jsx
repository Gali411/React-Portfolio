import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import '/src/App.css';

function App() {
  return (
    <>
    <Header />
    <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
