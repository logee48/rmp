//this code checks if user have access or not using the tokens

const Prof_R = require("../Models/ProfessorModel");

module.exports.Prof_data_fetch = (req, res) => {
    const data =async()=>{
        const prof_data = await Prof_R.find()
        if(prof_data)
        {
            // return res.json({a:prof_data.name,b:prof_data.college_name,c:prof_data.department,d:prof_data.designation,e:prof_data.overall_rating,f:prof_data.review_1,g:prof_data.review_2,h:prof_data.review_3,i:prof_data.review_number,j:prof_data.like,k:prof_data.createdAt})
            return res.json({data:prof_data})
        }
        else
        {
            return res.json({message:"nopeee"})
        }
    }
    data();
}


/*
output formateee:

{
    "data": [
        {
            "_id": "65a24f1ee2edcf09930588cf",
            "name": "jesper",
            "college_name": "abc",
            "department": "cse",
            "designation": "ass professor",
            "overall_rating": 9,
            "review_1": 9,
            "review_2": 9,
            "review_3": 9,
            "review_number": 9,
            "like": 9,
            "createdAt": "2024-01-13T08:28:46.133Z",
            "__v": 0
        },
        {
            "_id": "65a24f6ce2edcf09930588d2",
            "name": "charan",
            "college_name": "abc",
            "department": "cse",
            "designation": "ass professor",
            "overall_rating": 19,
            "review_1": 9,
            "review_2": 9,
            "review_3": 9,
            "review_number": 9,
            "like": 9,
            "createdAt": "2024-01-13T08:28:46.133Z",
            "__v": 0
        },
        {
            "_id": "65a24f74e2edcf09930588d5",
            "name": "madhan",
            "college_name": "abc",
            "department": "cse",
            "designation": "ass professor",
            "overall_rating": 0,
            "review_1": 0,
            "review_2": 0,
            "review_3": 0,
            "review_number": 0,
            "like": 0,
            "createdAt": "2024-01-13T08:28:46.133Z",
            "__v": 0
        }
    ]
}



*/
