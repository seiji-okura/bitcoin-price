import { useEffect, useState } from "preact/hooks";


function getRandomBread(){
    const breads = ['🥯','🍞','🥖','🥐'];
    return breads[Math.floor( Math.random()*4)];
}

export default function TodaysBread(props:string){
     const [bread, setBread] = useState('🥯');

    useEffect(function(){
        const intervalId = setInterval(()=>{
             setBread(getRandomBread());
        },1000);
        return function(){clearInterval(intervalId)};
    }, [bread]);
    return(
        ` ${bread} `
    );

    /*
    return(
        <p class="my-10 text(center md white)">
            TodaysBread:{bread}
        </p>
    );
    */
}
