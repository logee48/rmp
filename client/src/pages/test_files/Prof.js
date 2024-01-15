import { useEffect, useState } from "react"
import Data from "./professor.json"
import {Link} from 'react-router-dom'

const Prof =()=>{
    // const num = 5;
    // const [check,setcheck] = useState(new Array(num).fill(true))
    // const [dept,setdept] = ["cse","ece","it","eee","biotech"]
    const [Cname,setCname] = useState("")

    // this fn for filtering professors from specific college
    let dataSearch = Data.filter(item =>{
        return Object.keys(item).some(key=>
          item.college.includes(Cname)
          )
      });

    const fetch_url=()=>{
        const queryParameters = new URLSearchParams(window.location.search)
        const name = queryParameters.get("name")
        setCname(name)
    }

    useEffect(()=>{
        fetch_url()
    },[])
    // console.log(Data);
    return(
        <div>
            <h1>WElcome this prof page</h1>
            {dataSearch.map((arr,i)=>{
                return(
                    <div style={{padding:"10px",border:"black solid 1px",margin:"5px"}}>
                        <Link to={`/profr?pname=${arr.uid}`}><div>{arr.name}</div></Link>
                        <div>{arr.dept}</div>
                    </div>
                )
            })}

            <div>{Cname}</div>


        </div>
    )
}
export default Prof