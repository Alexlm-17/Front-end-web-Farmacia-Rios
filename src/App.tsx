import './App.css';
import './components/NavBar/styles.css'
/* import { NavBar } from './components/NavBar'; */
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages/home/';
import { Banners } from './pages/banners/';
import { Categorias } from './pages/categorias/';
import { Dashboard } from './pages/dashboard/';
import { Logs } from './pages/logs';
import { Pedidos } from './pages/pedidos/';
import { Produtos } from './pages/produtos/';
import { Subcategorias } from './pages/subcategorias/';
import { Usuarios } from './pages/usuarios/';
import { UsuariosGestao } from './pages/usuarios_gestao';
import { Logon } from './components/Form/Login';


function App() {
  return (
    <Router>

      {/* <NavBar /> */}
      {/* <Logon /> */}
      {/* <div className="pages"> */}
      <Switch>
        <Route path="/" exact component={Logon} />
        <div className="pages">
          <Route path="/home" component={Home} />
          <Route path="/banners" component={Banners} />
          <Route path="/categorias" component={Categorias} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/logs" component={Logs} />
          <Route path="/pedidos" component={Pedidos} />
          <Route path="/produtos" component={Produtos} />
          <Route path="/subcategorias" component={Subcategorias} />
          <Route path="/usuarios" component={Usuarios} />
          <Route path="/usuariosGestão" component={UsuariosGestao} />
        </div>
      </Switch>

      {/* </div> */}
    </Router>
  );
}

export default App;
