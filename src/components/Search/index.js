import Input from '../Input'
import styled from 'styled-components'
import {useState} from 'react'
import {livros} from './dadosPesquisa'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
display: flex;
justify-content:center;
align-items: center;
margin-bottom: 20px;
cursor: pointer;
p {
    width: 200px;
}
img {
    width: 100px;
}
&:hover {
    border: 1px solid white;
}
`

function Search() {
    const [livrosPesquisados, setTsetLivrosPesquisados] = useState([])
    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
            <Input 
            placeholder="Escreva sua próxima leitura"
            onBlur={event => {
                const textDig = event.target.value
                const resultPesquisa = livros.filter(livro => livro.nome.includes(textDig))
                setTsetLivrosPesquisados(resultPesquisa)
            }}
            />
            {livrosPesquisados.map(livro => (
                <Result>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt='Livros'/>
                </Result>
            ))}
        </SearchContainer>
    )
}

export default Search