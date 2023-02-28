import styles from './CardSearch.module.scss'

interface CardSearchProps {
    title: string
    content: string
    page: string
    pageIcon: string
    imagem?: string
}

export const CardSearch = ({title, content, page, pageIcon, imagem}: CardSearchProps) => {
    return(
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{content}</p>
            <img src={imagem} alt={title}/>
            <p><span>{pageIcon}</span> d/{page}</p>
        </div>
    );
}