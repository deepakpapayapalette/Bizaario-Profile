import '../App.css'
import '../assets/css/home.css'
import ActivePatient from '../components/ActivePatient/ActivePatient'


const MainContent = () => {
  return (
    <>
      <main className="app-content px-2pb-5 " >
       <ActivePatient/>
      </main>
    </>
  )
}

export default MainContent
