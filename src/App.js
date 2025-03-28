import './App.css'
import Logo from './componentes/Logo';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';

const textoOpcoes = ['CATEGORIA', 'MINHA ESTANTE', 'FAVORITOS'];
const icones = [perfil, sacola];
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          {textoOpcoes.map((texto)=>(
            <li className='opcao'>{texto}</li>
          ))}
        </ul>
        <ul className='icones'>
         {icones.map((icones)=>(
          <li>
            <img src={icones} className='icone'></img>
          </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
