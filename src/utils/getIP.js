import axios from "axios";

export const getIP = async()=>{
    try{
        const response =await axios.get("https.//api.ipify.org?format=json");
        return response.data.ip;

    }catch(error){
        console.log("Error fetching IP address: ", error);
        return null;
    }
};
