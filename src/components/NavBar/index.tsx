import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './styles';
import logo from '../../assets/logo-icon.png';


const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={logo} alt="Farmacia Rios"/>
                    <h2>Farmácia Rios</h2>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/dashboard' >
                        Dashboard
                    </NavLink>
                    <NavLink to='/pedidos' >
                        Pedidos
                    </NavLink>
                    <NavLink to='/produtos' >
                        Produtos
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/sair'>Sair</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar;