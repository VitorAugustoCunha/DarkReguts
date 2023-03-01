import styles from './LikeDeslike.module.scss'
import DeslikeButton from '../../atoms/DeslikeButton/DeslikeButton'
import LikeButton from '../../atoms/LikeButton/LiketButton'

import {useState} from 'react'

function LikeDeslike(){


    const [valor,setValor] = useState(0);

    if(valor < 0){
        setValor(0)
    }

    function like(){
        let like = valor + 1
        setValor(like)
    }
    function deslike(){
        let deslike = valor - 1
        setValor(deslike)
    }

    return(
        <div>
            <ul className={styles.list}>
                <li onClick={like}><LikeButton evento={like}/></li>
                <li>{valor}</li>
                <li><DeslikeButton evento ={deslike}/></li>
            </ul>
        </div>
    )

}

export default LikeDeslike