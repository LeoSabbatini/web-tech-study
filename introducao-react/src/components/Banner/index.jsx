const Banner = (props) => {
    console.log(props.children)

    /*
     O children permite passar e renderizar o conteudo dinamico dentro do componente em react
    */
    return(
        <>
            {props.children}
        </>
    )
}

export default Banner