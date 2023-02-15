import perfil from '../../img/perfil.svg'
import sacola from "../../img/sacola.svg"
import styled from 'styled-components'

const Icons = styled.li`
  align-items: center;
    display: flex;
`
const Icon = styled.ul`
    margin-right: 40px;
    width: 25px;
`

const icons = [perfil, sacola]

function IconsHeader() {
    return (
        <Icons>
          {icons.map((icon) => (
            <Icon key={icon}> <img src={icon} alt='Icone'></img></Icon>
          ))}
        </Icons>
    )
}

export default IconsHeader