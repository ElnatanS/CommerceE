import styled from 'styled-components'
import { UilUserCircle } from '@iconscout/react-unicons'
import { UilShoppingCart } from '@iconscout/react-unicons'
import { UilHeartAlt } from '@iconscout/react-unicons'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 30;
  top: 40px;
  background: rgb(254, 251, 243);
  `

const Logo = styled.h1`
  font-size: 25px;
  font-weight: 700;
  margin-left: 1rem;
  flex: 1;
`

const Lists = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-left: 0px;
`
const List = styled.li`
  list-style: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`

const Icon = styled.div`
  margin-right: 2rem;  
  cursor: pointer;
`

const NavBar = () => {
  return(
    <>
      <Container>
        <Logo>LOGO</Logo>
        <Lists>
          <List>HOME</List>
          <List>SHOP</List>
          <List>BLOG</List>
          <List>PRODUCTS</List>
        </Lists>
        <Icons>
          <Icon><UilHeartAlt size="25" color="#000" /></Icon>
          <Icon><UilShoppingCart size="25" color="#000" /></Icon>
          <Icon><UilUserCircle size="25" color="#000" /></Icon>
        </Icons>
      </Container>
    </>
  )
}

export default NavBar;