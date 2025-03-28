import './style.css'
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icones = [perfil, sacola];

function Icones(){
    return(
        <ul className='icones'>
            {icones.map((icones)=>(
                <li>
                    <img src={icones} className='icone' alt='icones'></img>
                </li>
            ))}
        </ul>
    )
}

export default Icones;