import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
    return ( 
        <Container>
            <Link to="main1">Cuestionario</Link>
        </Container>
     );
}
 
export default Main;

const Container = styled.div`
width: 50vw;
height: 50vh;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
padding: 20px;

@media (max-width: 1000px) {
        width: 80vw;
    }


    a {
        font-size: 30px;
        text-decoration: none;
        padding: 5px;
        &:hover {
            padding: 5px;
            font-weight: 700;
        }
    }
`