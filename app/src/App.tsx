import MainContent from './MainContent/MainContent'
import NavBar from './NavBar/NavBar'
import '/public/SCSS/style.scss'

function App(){
  return(
    <div className='Main '>
      <NavBar></NavBar>
      <MainContent></MainContent>
    </div>
  )
}

export default App
