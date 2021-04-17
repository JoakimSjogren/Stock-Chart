import { HeaderStyled } from './styles';
import Graph from '../Graph';
const Header = (stockInGraph) => {
    
    return (
        <HeaderStyled>
            <Graph stock={stockInGraph}></Graph>
        </HeaderStyled>
    )
}

export default Header
