import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import dashboard from './pages/dashboard/dashboard';
import pedidos from './pages/pedidos';
import produtos from './pages/produtos'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={dashboard} />
        <Route path="/pedidos" component={pedidos} />
        <Route path="/produtos" component={produtos} />
      </Switch>
    </Router>
  );
}

export default App;
