import {collection,getDocs} from "firebase/firestore";
import {db} from "../firebase.js";

export const getViewerCount = async ()=>{
    const snapshot =await getDocs(collection(db,"viewers"));
    return snapshot.size;
}