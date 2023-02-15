import Header from './components/Header'
import Search from './components/Search'
import Last from './components/Last'
import styled from 'styled-components'

//Para estilizar o componente container sem ser necessário utilizar um arquivo CSS externo, utilizamos as cráses ``e 
//fazemos a estilização dentro
const AppContainer = styled.div`
      background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
      height: 100vh;
      width: 100vw;
`


function App() {
  return (
    // as classes no React são declaradas com "className" 
     <AppContainer> 
      <Header/>
      <Search/>
      <Last/>
    </AppContainer>
  );
}

export default App;
