// import { useEffect } from "react"
import { dummyData } from "../../Data/LocalData";


const Test1 = ({data}) => {

    // useEffect(()=>{
    //           console.log(dummyData,"dummyData");
    //           console.log(data1,"data1");

    // },[])
  
    console.log(data, 'test comp');
    console.log(dummyData,"dummyData")

    // const objectValues = Object.values(data1);
// for (let i = 0; i < objectValues.length; i++) {
//   console.log(objectValues[i]); 
// }
  return (
    <>
    {/* {dummyData.map((el)=>{
        return <div>{el.key}</div>
    })} */}
    </>
  )
}

export default Test1
