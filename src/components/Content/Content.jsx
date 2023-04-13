import './Content.css';
import funcionario from './funcionario.jpg';
import clinica from './clinica.jpg';

const Content = () => {
  return (
    <section className="content">

            <div className="institution">
                <img className="imgInst" src={clinica} alt="IMAGEM EXEMPLO" />
                <p className="pInst">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque delectus sint vel architecto voluptatem, reiciendis consectetur sapiente laudantium neque, ut expedita corporis tempora modi, explicabo est ipsa illo. Voluptates!Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque delectus sint vel architecto voluptatem, reiciendis consectetur sapiente laudantium neque, ut expedita corporis tempora modi, explicabo est ipsa illo. Voluptates!ente laudantium neque, ut expedita corporis tempora modi, explicabo est ipsa illo. Voluptates!Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque delectus sint vel architecto voluptatem, reiciendis consectetur sapiente laudantium neque, ut expedita corporis tempora modi, explicabo est ipsa illo. Voluptates!ente laudantium neque, ut expedita corporis tempora modi, explicabo est ipsa illo. Voluptates!Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque delectus sint vel architecto voluptatem, reiciendis consectetur sapiente laudantium neque, ut expedita corporis tempora modi, explicabo est ipsa illo. Voluptates!</p>
            </div>

            <div className="id">
                <div className="whoAreWe">
                    <img className="imgWhoAreWe" src={funcionario} alt="RISOS" />
                    <h3 className="textWhoAreWe">Profissional1</h3>
                    <p className='descWhoAreWe'>Descrição do profissional</p>
                </div>
                <div className="whoAreWe">
                    <img className="imgWhoAreWe" src={funcionario} alt="RISOS" />
                    <h3 className="textWhoAreWe">Profissional2</h3>
                    <p className='descWhoAreWe'>Descrição do profissional</p>
                </div>
                <div className="whoAreWe">
                    <img className="imgWhoAreWe" src={funcionario} alt="RISOS" />
                    <h3 className="textWhoAreWe">Profissional3</h3>
                    <p className='descWhoAreWe'>Descrição do profissional</p>
                </div>
            </div>
        </section>
  )
}

export default Content;