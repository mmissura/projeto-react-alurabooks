import styled from 'styled-components'

const Option = styled.li`
   align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    height: 100%;
    justify-content: center;
    min-width: 120px;    
    padding: 0 5px;
    text-align: center;
`
const Options = styled.ul`
    display: flex;
`


const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE' ]

function OptionsHeader (){
   return(
    <Options>
        {textOptions.map((text) => (
          <Option key={text}><p>{text}</p></Option>
          ))}
    </Options>
   )
}

export default OptionsHeader