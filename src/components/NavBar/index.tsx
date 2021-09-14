import { NavLink } from 'react-router-dom';
import './styles.css';
//import logo from '../../assets/logo-icon.png';

export const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img src={"logo"} alt="Farmacia Rios"></img>
                    </NavLink>

                    <ul className="nav-menu">
                    
                        <li className="nav-item">
                            <NavLink to="/banners" activeClassName="active" className="nav-links">
                                Banners
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/categorias" activeClassName="active" className="nav-links">
                                Categorias
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard" activeClassName="active" className="nav-links">
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/logs" activeClassName="active" className="nav-links">
                                Logs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pedidos" activeClassName="active" className="nav-links">
                                Pedidos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/produtos" activeClassName="active" className="nav-links">
                                Produtos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/subcategorias" activeClassName="active" className="nav-links">
                                Subcategorias
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/usuarios" activeClassName="active" className="nav-links">
                                Usuários
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/usuariosGestão" activeClassName="active" className="nav-links">
                                Usuários - Gestão
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/sair" activeClassName="active" className="nav-links">
                                Sair
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}