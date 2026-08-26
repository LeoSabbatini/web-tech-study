import Header from "./components/Header"
import Card from "./components/Card"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import ImgCard from "./components/ImgCard"
import Anuncio from "./components/Anuncio"

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
      <a href="https://lamusainstrumentos.es/pt-br/products/trompa-jupiter-jhr-1100?variant=53843448660306&country=BR&currency=BRL&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOopDwxGCVb0TP9yXt-JS7tmI-g6JiAUObXp5UBDjC_yiJE3AiSiVyLc">Clique aqui para COMPRAR</a>
      </Anuncio>



    <Footer title="Footer"/>
    </>

  )
}

export default App;