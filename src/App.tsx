import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Main from './components/Main';
import Main2 from './components/Main2';
import Main3 from './components/Main3';

const App = () => {

  return ( 
    <Container>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/main2" element={<Main2/>}/>
              <Route path="/main3" element={<Main3/>}/>
          </Routes>
        </BrowserRouter>
    </Container>
   );
}
 
export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 70vh;
  background-color: gray;
`

