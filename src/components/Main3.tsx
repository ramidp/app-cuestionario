import { Link } from "react-router-dom";
import styled from "styled-components";
import {motion} from 'framer-motion'

const Main3 = () => {
    return ( 
        <Container>
         <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            >

            <h1>Te gustaria ser Madonna?</h1>
                <p>Si</p>
                <p>No</p>

            <div className="nav">
                <Link to="/main2">Atras</Link>
            </div>

            </motion.div>
        </Container>
     );
}
 
export default Main3;

const Container = styled.div`
width: 50vh;
height: 50vh;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
    .nav {
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }
`