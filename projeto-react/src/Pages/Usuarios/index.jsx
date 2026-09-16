import './usuarios.css'
import { useEffect, useState } from "react"

export default function index() {
    const [usuarios, setUsuarios] = useState([])

    // useEffect(()=> {
    //     fetch("http://localhost:3000/usuarios")
    //     .then((response) => response.json).then((data)=> setUsuarios(data)).catch((error) => console.log(error))
    // }, [])

    useEffect(() => {
         fetch("http://localhost:3000/usuarios")
         .then((response) => response.json())
         .then((data)=> setUsuarios(data))
         .catch((error) => console.log(error))
    })

  return (
    <section className="container-usuarios">
        <h1>Lista de Usuarios</h1>
        {usuarios.map((user)=>(
            <article className="content-usuarios"> 
                <strong>Nome: {user.nome}</strong>
                <br />
                <strong>Telefone:{user.telefone}</strong>
                <br />
                <button className='delete'>Deletar</button>
            </article>
        ))}
      
    </section>
  )
}
