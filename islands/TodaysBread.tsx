//import { PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import { useEffect, useState } from "preact/hooks";

interface BreadProps {
    target: string;
}

export default function TodaysBread(props:string){
     const [bread, setBread] = useState('🥯');

    useEffect(function(){
         const intervalId = setInterval(()=>{
            const breads = ['🥯','🍞','🥖','🥐'];
            const value = breads[Math.floor( Math.random()*4)];
             setBread(value);
        },2000);
        return function(){clearInterval(intervalId)};
    }, [bread]);
     return(
        <p class="my-10 text(center md white)">
            TodaysBread:{bread}
        </p>
    );
}
