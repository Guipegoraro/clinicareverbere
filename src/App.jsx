import './App.css'
import Header from './components/Header/Header'; // <Header /> pensei em separar o menu do banner
import Content from './components/Content/Content'; // <Content /> tambem da pra separar
import Contact from './components/Contact/Contact'; // <Contact /> Primeiro Formulario
import Footer from './components/Footer/Footer'; // <Footer /> Segundo Formulario

export default function App() {
  return (
    <main className='area'>  
      <Header />
      <Content />
      <Contact />
      <Footer />
    </main>
    
  )
}
