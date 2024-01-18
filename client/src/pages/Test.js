import axios from 'axios'
// import { useState } from 'react'

const Test=()=>{
    const wat = async () => {
        const a = {
            neww:"user"
        }
        axios.post(`https://rmp-test.onrender.com/test`,a)
                .then((response) => console.log(response));;
                
    }
    
    return(
        <div>
            {/* <input onChange={(e)=>{setorange(e.target.value)}}/> */}
            <button onClick={wat}>sub</button>
        </div>
    )
}

export default Test