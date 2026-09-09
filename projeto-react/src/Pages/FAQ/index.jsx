import './faq.css'

export default function index() {
  return (
    <section className="faq-container">
        <h1 className="faq-main-title">FAQ</h1>
        <details className="faq-card">
            <summary><h2 className="faq-title">1. Qual é o objetivo principal deste blog?</h2></summary>
            <p className='faq-text'>Este blog nasceu da paixão pela biologia e pela preservação ambiental. Nosso objetivo é divulgar informações científicas e curiosidades sobre as corujas de forma acessível e divertida. Queremos conscientizar o público sobre a importância dessas aves de rapina para o ecossistema, combatendo mitos e incentivando a conservação das espécies.</p>
        </details>
        <details className="faq-card">
            <summary><h2 className="faq-title">2. Com que frequência o conteúdo é atualizado?</h2></summary>
            <p className='faq-text'>Publicamos novos artigos, guias de identificação e notícias sobre conservação todas as semanas. Para não perder nenhuma novidade e receber curiosidades direto no seu e-mail, convidamos você a assinar a nossa newsletter gratuita na barra lateral ou no rodapé da página.</p>
        </details>
        <details className="faq-card">
            <summary><h2 className="faq-title">3. As informações publicadas aqui são confiáveis?</h2></summary>
            <p className='faq-text'>Sim, totalmente. Todo o nosso conteúdo é baseado em estudos de ornitologia, artigos científicos e dados de instituições de conservação internacionais e nacionais (como a IUCN). Embora usemos uma linguagem simples e de fácil leitura, mantemos o compromisso rigoroso com a veracidade dos fatos biológicos.</p>
        </details>
        <details className="faq-card">
            <summary><h2 className="faq-title">4. Posso enviar fotos de corujas que encontrei ou sugerir temas?</h2></summary>
            <p className='faq-text'>Com certeza! Adoramos interagir com a nossa comunidade de observadores de aves. Você pode enviar suas fotos de avistamentos ou sugestões de novas matérias através da nossa página de [Contato] ou diretamente pelo nosso e-mail oficial. Se a sua foto for selecionada, nós a publicaremos com os devidos créditos!</p>
        </details>
        <details className="faq-card">
            <summary><h2 className="faq-title">5. Posso usar os textos ou imagens do blog no meu trabalho escolar ou site?</h2></summary>
            <p className='faq-text'>Você pode utilizar nossas informações para fins educativos (como trabalhos escolares), desde que cite o blog como fonte. No entanto, a cópia integral de textos para outros sites ou o uso comercial de nossas imagens sem autorização prévia é proibido. Para parcerias de conteúdo, por favor, entre em contato conosco.</p>
        </details>
    </section>
  )
}
