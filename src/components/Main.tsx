import styled from "styled-components";
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Main = () => {
    
    const [hide, setHide] = useState(true)


    // Forma de que guarde la info en localStorage, entonces al hacer Adelante o Atrás, no cambia el valor, pero SI con F5, lo cual es logico.
    const [info, setInfo] = useState<string | any>(() => {
        const saved = localStorage.getItem("lugar");
        const initialValue = saved;
        return initialValue;
    })
    localStorage.setItem('lugar', info)
    
    useEffect(() => {
        localStorage.setItem('lugar', 'Escriba un lugar')
    },[])
    
    const handleChange = (e : any) => {
        setInfo(e.target.value)
    }


    // Se crea un FORM para mandar el dato INFO a la base que sea. Lo mismo con las demas preguntas en Main2, Main3, etc.

    return ( 
        <Container>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            >
                    <h1>De donde sos?</h1>
                        {
                            hide === false? 
                            <>
                                <input placeholder={info} onChange={handleChange} type="text" />
                                <button onClick={() => setHide(true)}>Aceptar</button>
                            </>
                            :
                            <p>{info}</p>
                        }
                        <button onClick={() => setHide(false)}>Editar</button>
                    <div className="nav">
                        <Link to="/main2">Siguiente</Link>
                    </div>

            </motion.div>
        </Container>
     );
}
 
export default Main;

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
        justify-content: flex-end;
        width: 100%;
    }
`