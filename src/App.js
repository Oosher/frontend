

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Router from './routes/Router';
import UserProvider from './users/provider/UserProvider';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Router/>
        </Layout>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
