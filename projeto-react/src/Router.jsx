import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import NotFound from './Pages/NotFound'
import Nav from './Components/Nav'
import FAQ from './Pages/FAQ'
import Usuario from './Pages/Usuarios'
export default function Router() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Usuarios" element={<Usuario />} />

    </Routes>
    </BrowserRouter>
  )
}
