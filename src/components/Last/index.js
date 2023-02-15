import {livros} from './DadosLast'
import {Title} from '../Title'
import Card from '../CardRecomenda'
import imgLivro from '../../img/livro2.png'
import styled from 'styled-components'


const LastContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function Last() {
    return (
        <LastContainer>
            <Title color={'#EB9B00'}
            fontSize={'36px'}
            >
                ULTIMOS LANCAMENTOS
            </Title>
            <NewLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt='Livros'/>
                ) ) }
            </NewLivrosContainer>
            <Card
                title = "Talvez você se interesse por:"
                subtitle = "Angular 11"
                description = "Construindo uma aplicação integrada com o Google"
                img = {imgLivro} alt = 'Livros'
            />
        </LastContainer>
    )
}

export default Last