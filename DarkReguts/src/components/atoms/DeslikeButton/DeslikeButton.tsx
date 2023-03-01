import styles from './DeslikeButton.module.scss';

import {RxThickArrowDown} from 'react-icons/rx'
import classNames from 'classnames';

interface DeslikeButtonProps{
    evento:React.MouseEventHandler<SVGElement>
}

function DeslikeButton( {evento} : DeslikeButtonProps){
    return(
    <div >
    <RxThickArrowDown className={styles.deslike} onClick = {evento}/>
    </div>

    )

}

export default DeslikeButton
