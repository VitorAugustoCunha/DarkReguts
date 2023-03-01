import './App.css'
import Home from './assets/FeedButtonIcons/Home'
import FeedButton from './components/atoms/FeedsButton/FeedsButton'
import Search from './components/atoms/Search/Search'
import SearchDropDown from './components/Molecules/SearchDropDown/SearchDropDown'


export const App = () => {
  return (
    <div className="App">
      dasdasdasdasdadsadasdasd
      <Search/>
      <FeedButton nome='Teste' icon={<Home/>}/>
      <SearchDropDown/>
    </div>
  )
}

export default App
