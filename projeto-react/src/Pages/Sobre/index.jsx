import { useEffect, useState } from 'react'

import './sobre.css'

export default function Index() {

    const [sobre, setSobre] = useState({ sobre: [] })

    useEffect(() => {
        fetch("http://localhost:3000/sobre")
            .then((response) => response.json())
            .then((data) => setSobre(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <section className="sobre-container">

            <h2 className="sobre-main-title">{sobre[0]?.titulo}</h2>
            <p className="sobre-text">{sobre[0]?.texto}</p>

            <h2 className="sobre-title">{sobre[1]?.titulo}</h2>
            <p className="sobre-text">{sobre[1]?.texto}</p>

            <h2 className="sobre-title">{sobre[2]?.titulo}</h2>
            <p className="sobre-text">{sobre[2]?.texto}</p>

            <h2 className="sobre-title">{sobre[3]?.titulo}</h2>
            <p className="sobre-text">{sobre[3]?.texto}</p>

            <h2 className="sobre-title">{sobre[4]?.titulo}</h2>
            <p className="sobre-text">{sobre[4]?.texto}</p>

            <h2 className="sobre-title">{sobre[5]?.titulo}</h2>
            <p className="sobre-text">{sobre[5]?.texto}</p>
            <p className="sobre-text">{sobre[6]?.texto}</p>

        </section>
    )
}