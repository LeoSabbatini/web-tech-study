import "./ImgCard.css"
import  imgCard from "../../assets/img-card.jpg"
 
const Img = (props)=> {
    return(
        <div className="image-card">
            <img src={imgCard} alt={props.caption || 'imagem'}  className="image-card-img" />
            <p className="image-card-caption">Lorem ipsum</p>
        </div>
    )
}
 
export default Img;