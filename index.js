import { useEffect, useRef, useState } from "react"
import { useConsumeHooks } from "./costom";


export  const Main=()=>{
    const [data,setData]=useState([]);
    const [error, setError] = useState(null);
    const ref = useRef(0)
   const usecounr=useConsumeHooks()     

  const rafhandle = () => {
    ref.current = ref.current + 1
  }

  

        return(
        <>
        {/* {usecounr.count} */}
        {/* <button onClick={usecounr.constHandle}></button> */}
        </>
    )
}