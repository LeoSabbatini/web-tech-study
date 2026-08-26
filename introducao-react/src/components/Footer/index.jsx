const Footer = (props) => {

    const footerStyle = {
        background: '#262529',
        padding: '20px',
        textAlign: 'center',    
        borderBottom: '2px solid #696969'
    }
    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color:'#fdfdfd'
    }

    return(
        <footer style={footerStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
        </footer>
    )

}

export default Footer;