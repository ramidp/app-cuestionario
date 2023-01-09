import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import Container from '../format/preguntaStyle'

const Main3 = () => {




    return ( 
         <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            >
            <Container>
                <form action="">
                    <h1>Con cuanta frecuencia vas a la Peluqueria?</h1>
                        <div className="reply-div">
                            <div className="ind-reply">
                                <label htmlFor="question">1 vez por mes</label>
                                <input name="question" type="radio" />
                            </div>
                            <div className="ind-reply">
                                <label htmlFor="question">2 veces por mes</label>
                                <input name="question" type="radio" />
                            </div>
                            <div className="ind-reply">
                                <label htmlFor="question">Más de 2 veces por mes</label>
                                <input name="question" type="radio" />
                            </div>
                            <div className="ind-reply">
                                <label htmlFor="question">Nunca</label>
                                <input name="question" type="radio" />
                            </div>
                        </div>

                    <div className="nav">
                        <Link to="/main2">Atras</Link>
                        <Link to=""></Link>
                    </div>
                </form>
            </Container>
         </motion.div>
     );
}
 
export default Main3;
