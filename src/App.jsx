import './App.css'
import Header from './components/Header/Header'; // <Header />   (OK)
import Content from './components/Content/Content'; // >>>>>>>>>>>>>>>> <Content /> (RESPONSIVIDADE BUGADA) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import Contact from './components/Contact/Contact'; // <Contact /> Primeiro Formulario (OK)
import Footer from './components/Footer/Footer'; // >>>>>>>>>>>>>>>>>>> <Footer /> Segundo Formulario  (RESPONSIVDADE BUGADA) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default function App() {
  return (
    <main className='area'>
      <Header />
      <Content />
      <Contact />
      {/* <Footer /> */}
    </main>

  )
}
