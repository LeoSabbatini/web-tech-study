import { useEffect, useState } from 'react'
import './faq.css'

export default function Index() {

        const [faq, setFaq] = useState([])
    
        useEffect(() => {
             fetch("http://localhost:3000/faq")
             .then((response) => response.json())
             .then((data)=> setFaq(data))
             .catch((error) => console.log(error))
        })

  return (
    <section className="faq-container">
        <h1 className="faq-main-title">FAQ</h1>
           {faq.map((faq)=>(
            <div>
                <details className="faq-card" key={faq.id}>
                    <summary><h2 className="faq-title">{faq.pergunta}</h2></summary>
                    <p className='faq-text'> {faq.resposta} </p>
                </details>
            </div>
            ))}
    </section>
  )
}
