import Data from "./college.json"
import {Link} from 'react-router-dom'

const College =()=>{
    console.log(Data);
    return(
        <div>
            <h1>WElcome</h1>
            {Data.map((arr,i)=>{
                return(
                    <Link to={`/prof?name=${arr.name}`}><div style={{padding:"10px",border:"black solid 1px",margin:"5px"}}>{arr.name}</div></Link>
                )
            })}
            <div>dkj</div>
        </div>
    )
}
export default College