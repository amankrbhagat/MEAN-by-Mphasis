// we can do the same using controller here

// export const uNameController = (req, res) =>{        /// using export keyword we can export this function
//     const uName = req.params.username;
//     res.send(`Welcome to our website, ${uName}!`);
// }


// export const searchKeywordController = (req, res)=>{
//         const keyWord = req.query.keyword;  
//         res.send(`searching for, ${keyWord}!`);
// }



///  ye method ES module se krne pe kam aaiga mtlb ki export aise hotah 
export const userLogin =(req, res)=>{
    res.send("this is user login route")
}

export const userSignup =(req, res)=>{
    res.send("this is user signup route")
}


// // common JS se aise export hoga
// const userLogin =(req, res)=>{
//     res.send("this is user login route")
// }

// const userSignup =(req, res)=>{
//     res.send("this is user signup route")
// }

// module.exports = {userLogin, userSignup};