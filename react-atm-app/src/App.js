import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Intro from './components/Intro';
import Home from './components/Home';
import Widthdrawal from './components/Widthdrawal';
import Deposit from './components/Deposit';
import Balance from './components/Balance';

import useBalance from './hooks/useBalance'

function App() {

  const [amount, setDeposit, setWithdrawal] = useBalance(0);

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Intro/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path="/withdrawal">
            <Widthdrawal amount = {amount} setWithdrawal={setWithdrawal}/>
          </Route>
          <Route exact path="/deposit">
            <Deposit amount = {amount} setDeposit={setDeposit}/>
          </Route>
          <Route exact path="/balance">
            <Balance amount = {amount}/>
          </Route>
        </Switch>          
    </Router>
    
  );
}

export default App;
