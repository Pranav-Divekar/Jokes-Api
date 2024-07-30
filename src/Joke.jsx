import { useEffect } from "react";
import { useState } from "react";
export default function Joke()
{
    let [joke,setJoke] = useState({});
    let url = "https://official-joke-api.appspot.com/random_joke";
    const getJoke = async()=>
    {
    try{
        let res = await fetch(url);
        let jsonResponse = await res.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline});
    }catch(e){
        console.log(e);
    }
    }

    useEffect(()=>{
        async function firstJoke(){
        let res = await fetch(url);
        let jsonResponse = await res.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline})
    }firstJoke()},[]);
    return(<div>
        <h1>Joke for the day !!</h1>
        <h3>{joke.setup}</h3>
        <h3>{joke.punchline}</h3>
        <button onClick={getJoke}>Get Joke</button>
    </div>);
}