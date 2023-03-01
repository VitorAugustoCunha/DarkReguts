import CardSearch from "../../atoms/CardSearch/CardSearch";
import data from './../../../data/data.json'
import styles from './SearchDropDown.module.scss'

function SearchDropDown(){
    return(
        <div className={styles.searchDropDown}>
            {data.map((card) => (
                <CardSearch key={card.id} title={card.title} content={card.content} imagem={card.imagem} userIcon={card.usuario.userIcon} userName={card.usuario.userName}/>
            ))}
        </div>
    );
}

export default SearchDropDown;
