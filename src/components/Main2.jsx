import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import Container from '../format/preguntaStyle'
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import { collection, query } from 'firebase/firestore';
import {db} from '../firebase/firebaseConfig'


const Main2 = () => {

    const [activeAnswer, setActiveAnswer] = useState(0)

    const handleActive = (e) => {
        setActiveAnswer(e.target.id)
    }

    const consulta = query(
        collection(db, 'pregunta1'),
    )

    // Creamos el Submit en el Link y usamos useNavigate para que con el onClick también nos mueva de pagina.
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        navigate('/main3')
        e.preventDefault()
        // if (answer !== 0) {
        //     try {
        //         await addDoc(consulta,
        //             {
        //                 answer: answer,
        //                 fecha: new Date(),
        //             });
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     } else {
        //         alert('Favor de elegir una opción')
        //         }
            }

 

    return ( 
         <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            >
            <Container>
                <form>
                    <h1>Con cuanta frecuencia vas a la Peluqueria?</h1>
                        <div className="reply-div">
                            <div className="ind-reply">
                                <label htmlFor="question">1 vez por mes</label>
                                <div id="1" className={activeAnswer == '1' ? 'active' : 'radio-check'} onClick={handleActive}></div>
                                {/* <input onClick={() => setAnwser(1)} name="question" type="radio" /> */}
                            </div>
                            <div className="ind-reply">
                                <label htmlFor="question">2 veces por mes</label>
                                <div id="2" className={activeAnswer == '2' ? 'radio-check active' : 'radio-check'} onClick={handleActive}></div>
                                {/* <input onClick={() => setAnwser(2)} name="question" type="radio" /> */}
                            </div>
                            <div className="ind-reply">
                                <label htmlFor="question">Más de 2 veces por mes</label>
                                <div id="3" className={activeAnswer == '3' ? 'active' : 'radio-check'} onClick={handleActive}></div>
                                {/* <input onClick={() => setAnwser(3)} name="question" type="radio" /> */}
                            </div>
                            <div className="ind-reply">
                                <label htmlFor="question">Nunca</label>
                                <div id="4" className={activeAnswer == '4' ? 'active' : 'radio-check'} onClick={handleActive}></div>
                                {/* <input onClick={() => setAnwser(4)} name="question" type="radio" /> */}
                            </div>
                        </div>

                    <div className="nav">
                        <Link to="/main1">Atras</Link>
                        <Link onClick={handleSubmit} to="/main3">Siguiente</Link>
                    </div>
                </form>
            </Container>
         </motion.div>
     );
}
 
export default Main2;

