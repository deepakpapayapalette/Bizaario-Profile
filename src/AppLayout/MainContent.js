import '../App.css'
import '../assets/css/home.css'
import ActivePatient from '../components/ActivePatient/ActivePatient'
import OccupationalProfilePreview from '../components/Section-1-Patient-Profiling/OccupationalProfile/OccupationalProfilePreview'
import Test1 from '../components/Test/Test1'
// import AllDataTest from '../components/Test/AllDataTest'
// import AllergiesDeficienciesForm from '../components/Section-1-Patient-Profiling/AllergiesDeficiencies/AllergiesDeficienciesForm'
// import AllergiesDeficienciesPreview from '../components/Section-1-Patient-Profiling/AllergiesDeficiencies/AllergiesDeficienciesPreview'
// import CurrentMedicationsForm from '../components/Section-1-Patient-Profiling/CurrentMedications/CurrentMedicationsForm'
// import CurrentMedicationsPreview from '../components/Section-1-Patient-Profiling/CurrentMedications/CurrentMedicationsPreview'




const MainContent = () => {
  return (
    <>
      <main className="app-content py-5  " >
       <ActivePatient/>

       {/* <Test1/> */}
     <OccupationalProfilePreview/>
      </main>
    </>
  )
}

export default MainContent
