

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Router from './routes/Router';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router/>
        
      </Layout>
    </BrowserRouter>
  );
}

export default App;
