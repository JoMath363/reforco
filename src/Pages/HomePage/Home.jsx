import './Home.css';
import studentImg from '../../Assets/student-img.jpg'
import mathIcon from '../../Assets/math-icon.svg'
import languageIcon from '../../Assets/language-icon.svg'
import geographyIcon from '../../Assets/geography-icon.svg'
import historyIcon from '../../Assets/history-icon.svg'
import cienceIcon from '../../Assets/cience-icon.svg'

const Home = (props) => {
  return (
    <main>
      <section className='hero'>
        <div className='hero-cta'>
          <h1>Reforce seu aprendizado! Estude agora e aprofunde seus conhecimentos.</h1>
          <p>Revise os conteúdos essenciais, pratique com quizzes e fortaleça seu aprendizado de forma simples e eficiente</p>
          <button>
            Saiba Mais
          </button>
        </div>

        <div className='hero-img'>
          <span />
          <img src={studentImg} alt="" />
          <span />
        </div>
      </section>

      <section className='subjects'>
        <h2>O que você quer estudar?</h2>

        <div className='subjects-list'>
          <div style={{ background: 'var(--math)' }}>
            <img src={mathIcon} />
            <h3>Matemática</h3>
          </div>
          <div style={{ background: 'var(--language)' }}>
            <img src={languageIcon} />
            <h3>Lingua Portuguêsa</h3>
          </div>
          <div style={{ background: 'var(--geography)' }}>
            <img src={geographyIcon} />
            <h3>Geografia</h3>
          </div>
          <div style={{ background: 'var(--history)' }}>
            <img src={historyIcon} />
            <h3>História</h3>
          </div>
          <div style={{ background: 'var(--cience)' }}>
            <img src={cienceIcon} />
            <h3>Ciências</h3>
          </div>
        </div>
      </section>

      <section className='about'>
        <h2>Saiba Mais</h2>

        <p>O Reforço é um projeto voltado para alunos do ensino fundamental. Com o objetivo de tornar o aprendizado mais acessível e dinâmico, a plataforma oferece conteúdos explicativos e quizzes práticos para consolidar o conhecimento em diversas matérias.
          Cada tema foi selecionado para construir uma base sólida de aprendizado, permitindo que os alunos revisem e pratiquem de maneira simples e eficiente. O foco é oferecer um espaço de estudo que torne o processo de aprendizado mais envolvente e eficaz.</p>
      </section>
    </main>
  )
};

export default Home;
