import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo-icon.png';

export const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <i className="fas fa-code"></i>
                        <img src={logo} alt="Farmácia Rios"></img>
                        <p>Farmácia Rios</p>
                    </NavLink>
                    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item">
                            <NavLink to="/banners" activeClassName="active"
                                className="nav-links" onClick={handleClick}>
                                Banners
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/categorias" activeClassName="active"
                                className="nav-links" onClick={handleClick}>
                                Categorias
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard" activeClassName="active"
                                className="nav-links" onClick={handleClick}>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/logs" activeClassName="active"
                                className="nav-links" onClick={handleClick}>
                                Logs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pedidos" activeClassName="active"
                                className="nav-links" onClick={handleClick}>
                                Pedidos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/produtos" activeClassName="active"
                                className="nav-links" onClick={handleClick}>
                                Produtos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/subcategorias" activeClassName="active"
                                className="nav-links" onClick={handleClick}>
                                Subcategorias
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/usuarios" activeClassName="active"
                                className="nav-links" onClick={handleClick}>
                                Usuários
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/usuariosGestão" activeClassName="active"
                                className="nav-links" onClick={handleClick}>
                                Usuários - Gestão
                            </NavLink>
                        </li>

                        <li className="nav-item sair">
                            <NavLink to="/sair" activeClassName="active"
                                className="nav-links" onClick={handleClick}>
                                Sair
                            </NavLink>
                        </li>

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}>Menu</i>
                    </div>
                </div>
            </nav>
        </>
    )
}