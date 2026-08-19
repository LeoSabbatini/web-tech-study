import "./Anuncio.css"

import imgTrompa from "../assets/trompa.webp"

const Anuncio = (props) =>{

    return(
        <section>
      <article className="card">
        <img src={imgTrompa} className="img-card"/>
        <h1>{props.title}</h1>
        <>
        {props.children}
        </>
      </article>
      <hr />
    </section>

    )
}
export default Anuncio;