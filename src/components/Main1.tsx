import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from '../format/preguntaStyle'

const Main1 = () => {
    
    const [activeAnswer, setActiveAnswer] = useState<any>(0)

    const handleActive = (e : any) => {
        setActiveAnswer(e.target.id)
    }

    // Forma de que guarde la info en localStorage, entonces al hacer Adelante o Atrás, no cambia el valor, pero SI con F5, lo cual es logico.
    // const [info, setInfo] = useState<string | any>(() => {
    //     const saved = localStorage.getItem("lugar");
    //     const initialValue = saved;
    //     return initialValue;
    // })
    // localStorage.setItem('lugar', info)
    
    // useEffect(() => {
    //     localStorage.setItem('lugar', 'Escriba un lugar')
    // },[])
    
    // const handleChange = (e : any) => {
    //     setInfo(e.target.value)
    // }


    // Se crea un FORM para mandar el dato INFO a la base que sea. Lo mismo con las demas preguntas en Main2, Main3, etc.

    return ( 
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
            <Container>
                <form action="">
                    <h1>Utiliza algunos de los servicios de Estética mencionados arriba?</h1>
                        <div className="reply-div">
                            <div className="ind-reply">
                                <label htmlFor="question">Si, la mayoria</label>
                                <div id="1" className={activeAnswer == '1' ? 'active' : 'radio-check'} onClick={handleActive}></div>
                            </div>
                            <div className="ind-reply">
                                <label htmlFor="question">Algunos, muy pocos</label>
                                <div id="2" className={activeAnswer == '2' ? 'active' : 'radio-check'} onClick={handleActive}></div>
                            </div>
                            <div className="ind-reply">
                                <label htmlFor="question">Ninguno, pero me gustaría</label>
                                <div id="3" className={activeAnswer == '3' ? 'active' : 'radio-check'} onClick={handleActive}></div>
                            </div>
                            <div className="ind-reply">
                                <label htmlFor="question">No me interesan</label>
                                <div id="4" className={activeAnswer == '4' ? 'active' : 'radio-check'} onClick={handleActive}></div>
                            </div>
                        </div>

                    <div className="nav">
                        <Link to="/">Principal</Link>
                        <Link to="/main2">Siguiente</Link>
                    </div>
                </form>
            </Container>
        </motion.div>
     );
}
 
export default Main1;
