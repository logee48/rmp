import axios from 'axios'
// import { useState } from 'react'

const Test=()=>{
    // const [orange,setorange] = useState("")
    const wat = async () => {
        //this data to fetch logged in users name
        const { data } = await axios.post(
            "https://rmp-test.onrender.com/",
            {},
            { withCredentials: true }
          );
          const { status, user } = data;
          console.log(status);
          //this is post req, in postman we pass value man but here we pass using "a" var
        const a = {
            neww:user
        }
        axios.post(`https://rmp-test.onrender.com//test`,a)
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