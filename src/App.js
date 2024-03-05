import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {

const [msg, setMsg] = useState("");

useEffect(() => {
  axios.get('http://localhost:8080/main')
        .then((Response)=>{
            setMsg(Response.data);
        }).catch((Error)=>{
            console.log(Error);
        })
}, [])


  

  return (
    <div className="App">
     {msg}
    </div>
  );
}

export default App;
