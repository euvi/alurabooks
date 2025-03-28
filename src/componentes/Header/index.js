import './style.css'
import Logo from '../../componentes/Logo';
import OpcoesHeader from '../../componentes/OpcoesHeader';
import Icones from '../../componentes/Icones';

function Header(){
    return(
    <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
        <Icones/>       
    </header>
    );
}

export default Header;
