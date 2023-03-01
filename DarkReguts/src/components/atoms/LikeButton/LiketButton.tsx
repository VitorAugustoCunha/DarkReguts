import styles from './LikeButton.module.scss'
import { RxThickArrowUp } from 'react-icons/rx'

interface LikeButtonProps{
    evento:React.MouseEventHandler<SVGElement>
}
function LikeButton({evento}: LikeButtonProps ){

   
    return(
        <div >
        <RxThickArrowUp className={styles.like} onClick ={evento}/>
        </div>
    )
}

export default LikeButton