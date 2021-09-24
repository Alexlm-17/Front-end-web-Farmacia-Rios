import './styles.css';
import logo from '../../../assets/logo-ver.png';

export const Logon = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                
                <div className="image">
                    <img src={logo} alt="Farmacia Rios"></img>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        {/* <label className="label">Usuário</label> */}
                        <input className="input" type="text" 
                        placeholder="Nome de Usuário"/>
                    </div>

                    <div className="password">
                        {/* <label className="lable">Senha</label> */}
                        <input className="input" type="password" placeholder="Senha"/>
                    </div>
                    <div>
                        <button className="submit">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
