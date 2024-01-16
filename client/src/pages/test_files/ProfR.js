import { useEffect, useState } from "react";
import Data from "./professor.json"
import axios from "axios";

const ProfR=()=>{
    const [Cname,setCname] = useState("")

    // const [overallR,setoverallR] = useState(0)
    const [R1,setR1] = useState(0)
    const [R2,setR2] = useState(0)
    const [R3,setR3] = useState(0)
    const [P_comment,setP_comment] = useState(0)
    const [like,setlike] = useState(0)

    const [Rdata,setRdata] = useState([])
    const [Dlike,setDlike] = useState(0)
    const [O_rate,setO_rate] = useState(0)

    const wat = async () => {
        //this data to fetch logged in users name
        const { data } = await axios.post(
            "https://rmp-test.onrender.com",
            {},
            { withCredentials: true }
          );
          const { status, user, email } = data;
          console.log(status);
          console.log(user);
          const a = {
            username:user,
            prof_id:Cname,
            comment:P_comment,
            email:email,
            overall_rating:(((parseInt(R1)+parseInt(R2)+parseInt(R3))/3)/10)*5,
            review_1:R1,
            review_2:R2,
            review_3:R3,
            like:like
        }

        if(status){
            axios.post(`https://rmp-test.onrender.com/test1`,a)
                    .then((response) => console.log(response));
        }
        else{
            // console.log("nahhhh");
            alert("need to login")
        }

    }
    // const fetch_data = async()=>{
    //     //fetch prof review data
    //     await axios.get('https://rmp-test.onrender.com/fetch')
    //     .then(response => {
    //         // Handle response
    //         setRdata(response.data.data);
    //         // console.log(response.data.data);
    //     })
    //     .catch(err => {
    //         // Handle errors
    //         console.error(err);
    //     });
    // }
    // const fetch_test = async()=>{
    //     const data = await axios.get("https://rmp-test.onrender.com/fetch");
    //     // console.log(data.data.data);
    //     setRdata(data.data.data)
    // }



    // this fn for filtering professors from specific college
    let dataSearch = Data.filter(item =>{
        return Object.keys(item).some(key=>
          (item.uid).includes(Cname)
          )
      });

    let prof_comm_filter = Rdata.filter(item =>{
    return Object.keys(item).some(key=>
        (item.prof_id).includes(Cname)
        )
    });
    console.log(prof_comm_filter);

    const fetch_url=()=>{
        const queryParameters = new URLSearchParams(window.location.search)
        const namee = queryParameters.get("pname")
        setCname(namee)
    }
    // const like_count=()=>{
    //     var aa = 0;
    //     for(let i=0;i<Rdata.length;i++)
    //     {
    //         aa+=Rdata[i].like;
    //     }
    //     setDlike(aa)
    //     // return aa
    // }

    useEffect(()=>{
        //this runn when there is change, find a way to remove it
        fetch_url()
        // fetch_test()
        const test_test=async()=>{
            const data = await axios.get("https://rmp-test.onrender.com/fetch");
            // console.log(data.data.data);
            var aa = data.data.data;
            // console.log(aa);


            
            setRdata(aa)
            var count = 0;
            var R_count = 0;
            for(let i=0;i<aa.length;i++)
            {
                count+=aa[i].like;
                R_count+=aa[i].overall_rating;

            }
            setO_rate(R_count/aa.length)
            setDlike(count-1)

            //filter shit for comment prof_id
            // console.log(count);
        }
        test_test()
        // console.log(Rdata);
        // wat()
    },[]) 
    // console.log(dataSearch);
    return(
        <div>
            <div>dsfs</div>
            <div>{dataSearch[0].name}</div>
            <div>{dataSearch[0].college}</div>
            <div>{dataSearch[0].dept}</div>
            <div>{dataSearch[0].desig}</div>
            {/* overallR<input onChange={(e)=>{setoverallR(e.target.value)}}></input><br></br> */}
            review_1<input onChange={(e)=>{setR1(e.target.value)}}></input><br></br>
            review_2<input onChange={(e)=>{setR2(e.target.value)}}></input><br></br>
            review_3<input onChange={(e)=>{setR3(e.target.value)}}></input><br></br>
            Comment<input onChange={(e)=>{setP_comment(e.target.value)}}></input><br></br>
            like<input onChange={(e)=>{setlike(e.target.value)}}></input><br></br>
            <button onClick={wat}>submit</button>
            <div>overall_rating: {O_rate}</div>
            <div>R-view number :{(Rdata).length}</div>
            <div>No of likes: {Dlike}</div>
            {/* <div>{like_count}</div> */}
            {prof_comm_filter.map((prop,i)=>{
                // var a = 0;
                // console.log();
                  return(
                    <div style={{border:"solid 1px black"}}>
                        <div>email: {prop.username}</div>
                        <div>name: {prop.email}</div>
                        <div>comment: {prop.comment}</div>
                        <div>name: {prop.prof_id}</div>
                        <div>avg_rating: {prop.overall_rating}</div>
                        <div>likes: {prop.like}</div>
                    </div>
                )
            })}
            {/* <button onClick={fetch_test}>refresh</button> */}
        </div>
    )
}

export default ProfR