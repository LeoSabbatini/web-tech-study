import React from 'react'
import Box from '../../Components/Box/Index'
import Image1 from '../../Assets/Images/73-280x200.jpg'
import Image2 from '../../Assets/Images/178-280x200.jpg'

export default function Index() {
  return (
    <main className='container'>

      <section className='d-flex'> 
        <Box 
        title="Lorem Ipsum1" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
        image={Image1} 
        />
        <Box 
        title="Lorem Ipsum2" 
        description="Lorem ipS ISISISISIS ips ipssipsip ispsip sipips piscing elit." 
        image={Image2} 
        />
      
      </section>
    </main>
  )
}
