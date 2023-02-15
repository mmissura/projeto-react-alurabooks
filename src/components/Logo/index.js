import logo from '../../img/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.li`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            {/*para adicionar imagem, basta colocar o nome da variavel dentro de chaves {}*/}
         <LogoImage 
            src={logo} 
            alt='Logo Alura Books' 
        />
         <p><strong>Alura </strong>Books</p>
      </LogoContainer>
    )
}

export default Logo;