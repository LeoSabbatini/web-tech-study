import { useState } from "react";

function index() {
    //inicia com 0
    const [count, setCont] = useState(0);

    //aumenta o valor
    const aumentar = ()=>{
        setCont(count + 1)
    }

    //funcao para diminir o valor
    const diminuir = ()=>{
        setCont(count - 1)
    }
  return (

    <div style={{textAlign: 'center', marginTop: '50px', marginBottom: '50px'}}>
        <h1>{count}</h1>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
    </div>
  )
}

export default index