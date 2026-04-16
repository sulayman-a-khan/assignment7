import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import FriendDetails from './pages/FriendDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-950">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/stats"    element={<Stats />} />
            <Route path="/friend/:id" element={<FriendDetails />} />
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
