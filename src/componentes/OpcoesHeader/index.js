import { Link } from 'react-router-dom';
import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS','FAVORITOS','ESTANTE']

const Opcao = styled.li`
    display: flex;
    min-width: 120px;
    font-size: 16px;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0.5;
    cursor: pointer;
`
const Opcoes = styled.ul`
    display: flex;
`

function OpcoesHeader () {
    return (
        <Opcoes>
           { textoOpcoes.map( (texto) => (
              <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
           ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader
