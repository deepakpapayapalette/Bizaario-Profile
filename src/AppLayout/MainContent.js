import '../App.css'
import '../assets/css/home.css'
import ActivePatient from '../components/ActivePatient/ActivePatient'
// import AllergiesDeficienciesForm from '../components/Section-1-Patient-Profiling/AllergiesDeficiencies/AllergiesDeficienciesForm'
// import AllergiesDeficienciesPreview from '../components/Section-1-Patient-Profiling/AllergiesDeficiencies/AllergiesDeficienciesPreview'
// import CurrentMedicationsForm from '../components/Section-1-Patient-Profiling/CurrentMedications/CurrentMedicationsForm'
// import CurrentMedicationsPreview from '../components/Section-1-Patient-Profiling/CurrentMedications/CurrentMedicationsPreview'




const MainContent = () => {
  return (
    <>
      <main className="app-content py-5  " >
       <ActivePatient/>
       {/* <AllergiesDeficienciesForm />
       <AllergiesDeficienciesPreview /> */}
       {/* <div className='flex justify-between gap-4'>
       <CurrentMedicationsForm />
       <CurrentMedicationsPreview />
       </div> */}
     
      </main>
    </>
  )
}

export default MainContent
