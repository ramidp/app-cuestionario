import styled from "styled-components";
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Main2 = () => {
    
    const [hide, setHide] = useState(true)


    // Forma de que guarde la info en localStorage, entonces al hacer Adelante o Atrás, no cambia el valor, pero SI con F5, lo cual es logico.
    const [info, setInfo] = useState<string | any>(() => {
        const saved = localStorage.getItem("nombre");
        const initialValue = saved;
        return initialValue;
    })
    localStorage.setItem('nombre', info)
    
    useEffect(() => {
        localStorage.setItem('nombre', 'Escriba su Nombre')
    },[])
    
    const handleChange = (e : any) => {
        setInfo(e.target.value)
    }


    // Se crea un FORM para mandar el dato INFO a la base que sea. Lo mismo con las demas preguntas en Main2, Main3, etc.

    return ( 
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            >
            <Container>
                        <h1>Cual es tu Nombre?</h1>
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
                            <Link to="/">Atras</Link>
                            <Link to="/main3">Siguiente</Link>
                        </div>

            </Container>

        </motion.div>
     );
}
 
export default Main2;

const Container = styled.div`
width: 90%;
height: 50vh;
background-color: white;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
padding: 20px;
    .nav {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
`