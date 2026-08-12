import "./Card.css"


//Import da imagem
import  imgCard from "../assets/img-card.jpg"
 
const Card = () =>{

    return(
        <section>
      <article className="card">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio veniam autem.</h1>
        <img src={imgCard} className="img-card"/>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat a nobis quas eaque perferendis? Illo hic blanditiis harum a iusto exercitationem architecto est. Natus nam id, voluptatum corporis vel illum omnis ut quaerat neque rerum adipisci debitis soluta quam provident vitae culpa repellat. Nesciunt placeat alias quod eum libero recusandae est. Odit hic corrupti nam harum ullam architecto dicta consequatur dolore praesentium, odio facere vel earum, similique eos explicabo laudantium rerum voluptate illo necessitatibus. Sint iste quo facere earum ex ipsam velit voluptatibus rerum nobis soluta quisquam expedita, autem dicta. Ipsa aspernatur rerum laboriosam ducimus architecto magni fugit eius quo ab consectetur, minima maiores vel ea iusto corporis eaque iure corrupti? Consectetur corrupti nobis harum doloribus. Dolorem, ut corporis.</p>
      </article>


      <hr />
    </section>

    )
}

export default Card;