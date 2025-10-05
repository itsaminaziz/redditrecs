import Home from './components/Home.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import AdminPanel from './components/AdminPanel.jsx';

function App() {
  const path = window.location.pathname;

  if (path === '/admin') {
    return <AdminPanel />;
  }

  if (path.startsWith('/product/')) {
    return <ProductDetail />;
  }

  return <Home />;
}

export default App;
