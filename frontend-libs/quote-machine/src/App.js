import "./App.css";
import Quote from "./components/quote";
import styled from 'styled-components'
function App() {
  return (
    <Container>
      <Quote />
    </Container>
  );
}

const Container = styled.div`
background-color:yellow;
height: 100vh;
display:flex;
align-items: center;
justify-content:center;
`
export default App;
