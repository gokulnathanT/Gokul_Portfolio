import { useEffect } from "react";
import "./Cursor.css"
import {gsap} from "gsap";

const Cursor=()=>{
    useEffect(()=>{
        let posX=0,
        posY=0;
        ;
        let mouseX=0,
        mouseY=0;

        const updateCursor=()=>{
            posX+=(mouseX-posX)/8;
            posY+=(mouseY-posY)/8;

            gsap.set(".cursor-example",{
                css:{
                    left:posX-12.5,
                    top:posY-12.5,
                },
            });
        };

        const interval=setInterval(updateCursor,18);

        const mouseMoveHandler=(e)=>{
            mouseX=e.clientX;
            mouseY=e.clientY;
        }

        document.addEventListener("mousemove",mouseMoveHandler);

        return()=>{
            clearInterval(interval);
            document.removeEventListener("mousemove",mouseMoveHandler);
        };
    },[]);
    return(
        <>
            <div className="cursor">

            </div>
            <div className="cursor-example">

            </div>
        </>
    )
};

export default Cursor;