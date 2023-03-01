import styles from './DownSocialInteractions.module.scss'

interface DownSocialInteractionsProps{
    icon:any
    number?: number
    title:string
} 


function DownSocialInteractions({icon,number,title}: DownSocialInteractionsProps){
    return(
        <div className={styles.container}>
            <div className={styles.list}>
                <div className={styles.icon}>{icon}</div>
                <div className={styles.lista}>{number}</div>
                <div className={styles.lista}>{title}</div>
            </div>
        </div> 
    )
    
}

export default DownSocialInteractions