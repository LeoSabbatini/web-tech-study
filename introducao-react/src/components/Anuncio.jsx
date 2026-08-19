import "./Anuncio.css"

import imgTrompa from "../assets/trompa.webp"

const Anuncio = (props) =>{

    return(
        <section>
      <article className="anuncio">
        <img src={imgTrompa} className="img-anuncio"/>
        <h1 className="anuncio-text">{props.title}</h1>
        <>
        {props.children}
        </>
      </article>
      <hr />
    </section>

    )
}
export default Anuncio;