import "../BoxExercicio/BoxExercicio.css"
import { useState } from "react";
function index
() {
    const boxEx = [
        {
            imgSrc: "https://i.pinimg.com/474x/e8/28/6e/e8286ed2e512757a9e0831ed9ebe0599.jpg",
            nome: "Raiam Santos",
            desc: "O hater de borboletas"
        },
            {
            imgSrc: "https://pbs.twimg.com/profile_images/801985335928455169/27c95iij.jpg",
            nome: "Tiririca",
            desc: "O deputado democrata"
        },
        {
            imgSrc: "https://i1.sndcdn.com/artworks-JUbJF6wQJKuwlTGi-gzH41A-t500x500.jpg",
            nome: "Manoel Gomes",
            desc: "Caneta azul, azul caneta"
        },
        {
            imgSrc: "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2025/05/14/777208950-pngre9sqv6e.png",
            nome: "Virginia Fonseca",
            desc: "Ex do Rezende"
        },
        {
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xDdPteddIFJTZyt34_1vMH0C4tiwVfpGPpyUe8wfGwcLSkbAO5UeXo8&s=10",
            nome: "Davi Brito",
            desc: "Calabreso"
        },
        {
            imgSrc: "https://s2-extra.glbimg.com/SQZbAPDNplnD-6Kd0HecTLjaXKI=/0x0:1170x1165/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f551ea7087a47f39ead75f64041559a/internal_photos/bs/2023/F/T/qwUKRyQ4mn2osqsUu4xQ/whatsapp-image-2023-12-22-at-10.27.23-am.jpeg",
            nome: "Oruam",
            desc: "Souta Ele!"
        }        
    ]
    //inicia com 0
        const [count, setCont] = useState(0);
    
        //aumenta o valor
        const aumentar = ()=>{
            setCont(count + 1)
        }
    
    return (

        


        <div className="boxEx-container">
            {boxEx.map((boxEx, index) =>{
                console.log(boxEx)
                console.log(index)
                return(
                    <div className="boxEx" key={index}>
                        <img src={boxEx.imgSrc} alt="" />
                        <h2>{boxEx.nome}</h2>
                        <p>{boxEx.desc}</p>
                        
                        <div style={{textAlign: 'center', marginTop: '50px', marginBottom: '50px'}}>
                            <h1>{count}</h1>
                            <button onClick={aumentar}>Aumentar</button>
                        </div>
                    </div>
            )
            })}
            
        </div>
  )
}

export default index
