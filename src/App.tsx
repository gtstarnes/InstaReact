
import './App.css'
import DarkMode from './components/DarkMode'
import Info from './components/Info'
import ProfButton from './components/ProfButton'
import ProfilePic from './components/ProfilePic'

function App() {


  return (
    <>
      <ProfilePic height='3.5rem' width='3.5rem' />
      <ProfButton text="Follow" />
      <ProfButton text="Message" />
      <Info />
      <DarkMode />
    </>
  )
}

export default App
