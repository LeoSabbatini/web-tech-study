import Header from "./Components/Header"
import Card from "./Components/card"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import ImgCard from "./components/ImgCard"

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



    <Footer title="Footer"/>
    </>

  )
}

export default App;