import axios from 'axios';

// const BASE_URL = 'http://localhost:4000';

const BASE_URL = 'https://google-drive-clone.herokuapp.com';

//add file to db
export const addFile = (file,user,token) => {
    var bodyFormData = new FormData();
    bodyFormData.append('image', file); 
    try{
        console.log("upload axios")
        console.log("File in axios::::",file)

        return axios({
            method: "post",
            url: `${BASE_URL}/upload`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data", "Authentication" : token ,"User":user},
        }).then((res) => {
            //handle success
            res = res.data
            console.log(res);
          })
          .catch((response) => {
            //handle error
            console.log(response);
          });
    }
    catch{
        return "error in connection"
    }

}

//get files from db
export const getFiles = (user,token) => {
    try{
        console.log("getting files...")
        return axios.get(`${BASE_URL}/getFiles`,{ params: {
            'user': user
        } })
    }
    catch{
        return "error in connection"
    }

}

//login
export const login = (email,password)=>{
    return axios
    .post(`${BASE_URL}/login`,{email,password})
    .then((res)=> res.data)
}

//Register
export const register =(email,password,name)=>{
    console.log("Register interactions:::")
    return axios
    .post(`${BASE_URL}/register`,{email,password,name})
    .then((res)=>res.data)
}

