import styles from './CardSearch.module.scss'
import PopularIcon from '../../../assets/PopularIcon'
import { Link } from "react-router-dom";

interface CardSearchProps {
    title: string
    content: string
    page: string
    pageIcon: string
    imagem?: string
}

const CardSearch = ({title, content, page, pageIcon, imagem}: CardSearchProps) => {
    return(
            <div className={styles.card}>
                <div className={styles.top}>
                    <div className={styles.icon}>
                        <PopularIcon/>
                    </div>
                <div className={styles.title}>
                    {title}
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.content}>
                    {content}
                </div>
                <div className={styles.image}>
                    <img src={imagem} alt={title}/>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.page__icon}>
                    <img src={pageIcon} alt={title} />
                </div>
                    <div className={styles.page}>
                        d/{page}
                    </div>
                </div>
            </div>
    );
}

export default CardSearch