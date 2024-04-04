
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div className="App">
     <Header/>
     <Balance/>
     <IncomeExpense/>
     <History/>
     <AddTransaction/>
    </div>
  );
}

export default App;
