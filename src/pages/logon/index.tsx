import './styles.css';
import logo from '../../assets/logo-icon.png';

export const Logon = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                
                <div className="image">
                    <img src={logo} alt="Farmacia Rios"></img>
                    <h2 className="title">Farmácia Rios</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Nome</label>
                        <input className="input" type="text" />
                    </div>

                    <div className="password">
                        <label className="lable">Senha</label>
                        <input className="input" type="password" />
                    </div>
                    <div>
                        <button className="submit">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
