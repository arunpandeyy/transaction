import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import AddTransaction from './components/addTransaction';
import TransactionTable from './components/transactionTables';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' Component={TransactionTable} />
        <Route path='/addTransaction' Component={AddTransaction} />
      </Routes>
    </div>
    </Router>

  );
}

export default App;
