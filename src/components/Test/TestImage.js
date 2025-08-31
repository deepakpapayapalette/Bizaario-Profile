import  { useRef, useState } from 'react'

const TestImage = () => {
  const [imageFile, setImageFile]= useState(null);

  const inputRef= useRef(null);
    function updateOnClikFun(){
    inputRef.current.click();
  }

  function inputImageFun(event){
    const file =event.target.files[0];
    setImageFile(URL.createObjectURL(file))
  }


  return (
    <>
    


      <img src={imageFile} alt="" />
      <input type="file" onChange={inputImageFun}  ref={inputRef}/>
      <button  className='button bg-slate-400 p-3' onClick={updateOnClikFun}>update image</button>
         
    </>
  )
}

export default TestImage
