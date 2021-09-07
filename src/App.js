import { Nav } from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Forms from './pages/private/forms/Forms';
// import Dashboard from './pages/private/dashboard/Dashboard'
import Home from './pages/private/home/Home'

function App() {
  return (
    <div className="app-wrapper">
      {/* <Dashboard /> */}

      {/* Header */}
      <Header />

      {/* Left Menu - Content */}
      <div className="left-menu-content d-flex">
        <div className="left-menu">
          <SideMenu />
        </div>
        <div className="content-wrapper p-24">
          {/* Forms */}
          <Forms />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
