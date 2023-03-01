import DownSocialInteractions from '../../atoms/DownSocialInteractions/DownSocialInteractions'
import styles from './SocialInteractionColection.module.scss'

import {BiComment} from 'react-icons/bi'

function SocialInteractionColection(){
    
    return(
        <div>
            <DownSocialInteractions icon={<BiComment className={styles.icon} />} number={300} title={"Comentarios"} />
        </div>
    )

}
export default SocialInteractionColection