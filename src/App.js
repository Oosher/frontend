

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Router from './routes/Router';
import UserProvider from './users/provider/UserProvider';
import ProductsProvider from './products/providers/ProductsProvider';


function App() {
  return (
    <BrowserRouter basename='/frontend'>
      <UserProvider>
        <ProductsProvider>
          <Layout>
            <Router/>
          </Layout>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
