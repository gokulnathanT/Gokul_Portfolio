import {doc,getDoc,setDoc,Timestamp} from "firebase/firestore";
import {db} from "../firebase.js";
import {getIP} from "../utils/getIP.js"

export const recordUniqueView = async () =>{
    const ip=await getIP();
    if(!ip) return;

    const docRef= doc(db,"viewers",ip);
    const docSnap= await getDoc(docRef);

    if(!docSnap.exists()){
        await setDoc(docRef,{
            viewedAt:Timestamp.now(),
        });
        console.log("New viewer added : ",ip);
    }
    else{
        console.log("Viewer already exists : ",ip);
    }
}