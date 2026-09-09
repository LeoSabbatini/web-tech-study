import Box from '../../Components/Box/Index'
import Image1 from '../../Assets/Images/Coruja-barrada.jpg'
import Image2 from '../../Assets/Images/Coruja-das-torres.jpg'
import Image3 from '../../Assets/Images/Coruja-pescadora-de-blakiston.jpg'
export default function Index() {
  return (
    <main className='container'>

      <section className='d-flex'> 
        <Box 
        title="Coruja Barrada" 
        description="Nome científico: Ninox boobook" 
        image={Image1} 
        />
        <Box 
        title="Coruja das Torres" 
        description="Nome científico: Tyto alba" 
        image={Image2} 
        />
        <Box 
        title="Coruja Pescadora de Blakiston" 
        description="Nome científico: Ketupa blakistoni" 
        image={Image3} 
        />
      
      
      </section>
    </main>
  )
}
