import { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import "./Usuarios.css"

export default function index() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/usuarios")
        .then((response) => response.json())
            .then((data) => setUsuarios(data)).catch((error) => console.log(error))
    }, [])

    const deleteUsuarios = (id) => {
        fetch(`http://localhost:3000/usuarios/${id}`, {method: "DELETE"})
        .then(() =>{
            setUsuarios(usuarios.filter((usuario) => usuario.id !== id)  )
        })
        .catch((error) => console.error(error))
    }


    return (
        <section className='containerss usuarios'>
            <h2>Lista de users</h2>

            {usuarios.map((user) => (
                <article className='content-usuarios' key={user.id}>
                    <strong>
                        Nome: {user.nome}
                    </strong>
                    <br />
                    <strong>
                        Telefone: {user.telefone}
                    </strong>
                    <br />
                     <strong>
                        Email: {user.email}
                    </strong>
                    <br />

                    <button className='delete'
                    onClick={()=> deleteUsuarios(user.id)}
                    >Deletar</button>
                    <hr />
                </article>
            ))}


        </section>
    )
}
