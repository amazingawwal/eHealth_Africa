import './App.css'
import ProfileCard from './components/profileCard'
import type { ProfileDetails } from './components/profileCard'


const profileDetails : ProfileDetails[] = [{
  id: 1,
  name : 'Awwal',
  image: 'https://placehold.co/200x200/grey/white',
  description: 'Software Developer'
},
{
  id: 2,
  name : 'Sakeeb',
  image: 'https://placehold.co/200x200/grey/white',
  description: 'Project Manager'
}]

function App() {
  
  return (
    <>
      <ProfileCard  profiles = {profileDetails}/>
    </>
  )
}

export default App
