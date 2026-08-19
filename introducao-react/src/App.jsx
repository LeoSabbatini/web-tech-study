import Header from "./Components/Header"
import Card from "./Components/card"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import ImgCard from "./components/ImgCard"
import Anuncio from "./components/anuncio"

function App() {


  return (
    <>
    <Header title="Meu site"/>
    <Header title="lorem ipsum doret"/>
    <Header title="introducao react"/>
    
    <Banner>
      <h1>Bem-vidno ao meu site</h1>
      <p>Aqui voce encontra as melhores ofertas</p>
    </Banner>

    <ImgCard/>
    <Card/>

    <Anuncio>
      <h1>Trompa JUPITER JHR 1100</h1>
      <h2>R$ 16.754,00 BRL</h2>
      <p>Impostos incluídos. Envio calculado no checkout.</p>
      </Anuncio>



    <Footer title="Footer"/>
    </>

  )
}

export default App;