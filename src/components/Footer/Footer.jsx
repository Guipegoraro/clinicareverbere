import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
            <footer>
                <form action="#" method="#">
                    <div className="form3">
                        <label htmlFor="contactName">Nome: </label>
                        <input type="text" name="contactName" id="contactName" required placeholder="Nome" />
                        <label htmlFor="contactEmail"></label>
                        <input type="email" name="contactEmail" id="contactEmail" required placeholder="Email" />
                    </div>
                    <div className="form4">
                        <label htmlFor="contactNumber"></label>
                        <input type="text" name="contactNumber" id="contactNumber" placeholder="Telefone" />
                        <label htmlFor="contacSubject">Assunto:</label>
                        <input type="text" name="contactSubject" id="contactSubject" required placeholder="Assunto" />
                    </div>
                    <div className="message">
                        <label htmlFor="contactMessage"></label>
                        <textarea name="contactMessage" id="contactMessage"
                            placeholder="Escreva aqui sua mensagem"></textarea>
                        <button>Enviar Mensagem</button>
                    </div>
                </form>
            </footer>
        </section>
  )
}

export default Footer;