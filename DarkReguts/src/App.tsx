import './App.css'
import Home from './assets/FeedButtonIcons/Home'
import FeedButton from './components/atoms/FeedsButton/FeedsButton'
import Search from './components/atoms/Search/Search'
import SearchDropDown from './components/Molecules/SearchDropDown/SearchDropDown'
import SearchBar from './components/Organisms/SearchBar/SearchBar'


export const App = () => {
  return (
    <div className="App">
      <SearchBar/>
    </div>
  )
}

export default App
