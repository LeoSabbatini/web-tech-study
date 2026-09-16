import "../Box/Box.css"

function index
() {
    const boxData = [
        {
            title: "box 1",
            textBox: "Lorem ipsum box 1",
            link: "#"
        },
            {
            title: "box 2",
            textBox: "Lorem ipsum box 2",
            link: "#"
        }
        
    ]
    return (
        <div className="box-container">
            {boxData.map((box, index) =>{
                console.log(box)
                console.log(index)
                return(
                    <div className="box" key={index}>
                        <h2>{box.title}</h2>
                        <p>{box.textBox}</p>
                        <a href={box.link}>Saiba mais</a>
                    </div>
            )
            })}
            
        </div>
  )
}

export default index
