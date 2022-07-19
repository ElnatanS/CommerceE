import Slide from "../../components/slide/slider"
import Featured from "../../components/featured/featured"
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 100px;
`

const Home = () => {
  return(
    <>
      <Container>
        <Slide />
        <Featured />
      </Container>
    </>
  )
}

export default Home;