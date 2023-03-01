import styles from './SearchBar.module.scss'
import Search from '../../atoms/Search/Search';
import SearchTitle from '../../atoms/SearchTitle/SearchTitle';
import SearchDropDown from '../../Molecules/SearchDropDown/SearchDropDown';

function SearchBar(){
    return(
        <div className={styles.searchDiv}>
            <div className={styles.search}>
                <a><Search/></a>
            </div>
            <div className={styles.searchPopular}>
                <SearchTitle/>
                <SearchDropDown/>
            </div>
        </div>
    );
}

export default SearchBar