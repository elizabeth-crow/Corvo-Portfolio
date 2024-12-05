import logo from '../assets/Elizabeth Crow.png';

import './Header.scss';

import ParticlesComponent from '../components/particles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className='header'>
      <ParticlesComponent id="particles"/>
      <div className="logo">
        <img src={logo} alt="Elizabeth Crow" />
      </div>
      
      <div className="text-header">

        <h1>Olá! Eu sou a Elizabeth Crow, <br /> desenvolvedora Front-End <br /> e Designer Gráfico.</h1>

        <a href="https://www.attekita.com/">Linkedin<FontAwesomeIcon icon={faArrowPointer}  />
        </a>
        
        

        <a href="https://www.attekita.com/">Behance 
        <FontAwesomeIcon icon={faArrowPointer}  /></a>
      
      </div>
      
    </header>
  )
}

export default Header