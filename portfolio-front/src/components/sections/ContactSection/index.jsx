import { useState } from 'react';
import './contact.css'; // Importando o CSS local

const ContactSection = () => {
  // Estado para controlar a animação de "Copiado"
  const [emailCopiado, setEmailCopiado] = useState(false);

  // Função que copia o e-mail para a área de transferência
  const copiarEmail = (e) => {
    e.preventDefault(); // Impede a página de pular pro topo
    navigator.clipboard.writeText("lanaazz0193@gmail.com"); // Copia o e-mail
    setEmailCopiado(true); // Muda o estado para verde
    
    // Volta ao normal depois de 2.5 segundos
    setTimeout(() => {
      setEmailCopiado(false);
    }, 2500);
  };

  return (
    <section id="contato" className="py-5 position-relative overflow-hidden c-black">
      <div className="container py-5 position-relative z-1">
        
        {/* Título da Seção */}
        <div className="text-center mb-5 pb-3">
          <span className="fw-bold text-uppercase small mb-2 d-block f-red" style={{ letterSpacing: '2px' }}>
            Contato
          </span>
          <h2 className="display-6 fw-bold f-white">Vamos trabalhar juntos?</h2>
        </div>

        {/* --- Card de Contato --- */}
        <div className="contact-card-wrapper rounded-4 overflow-hidden">
          <div className="row g-0">
            
            {/* Lado Esquerdo - Informações */}
            <div className="col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-between contact-info-panel">
              
              <div className="mb-5 position-relative z-1">
                <h3 className="fw-bold mb-3 f-white">Informações de Contato</h3>
                <p className="f-gray lh-lg">
                  Preencha o formulário e entrarei em contato em até 24 horas. Ou, se preferir, use um dos canais diretos abaixo.
                </p>
              </div>

              <div className="d-flex flex-column gap-4 mb-3 position-relative z-1">
            
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/5531998189971?text=Ol%C3%A1%2C%20Ana%20L%C3%ADvia!%20Gostei%20muito%20do%20seu%20portf%C3%B3lio.%20Podemos%20bater%20um%20papo%20sobre%20uma%20oportunidade%20na%20nossa%20equipe%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-center gap-3 contact-info-item"
                >
                  <div className="contact-icon-box shadow-sm">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <p className="mb-0 small f-gray">WhatsApp / Telefone</p>
                    <p className="mb-0 fw-semibold fs-5 f-lightgray">+55 (31) 99818-9971</p>
                  </div>
                </a>

                {/* E-mail (Copiar para a área de transferência) */}
                <a 
                  href="#" 
                  onClick={copiarEmail} 
                  className="text-decoration-none d-flex align-items-center gap-3 contact-info-item"
                  title="Clique para copiar o e-mail"
                >
                  <div 
                    className="contact-icon-box shadow-sm transition-all" 
                    style={{ 
                      backgroundColor: emailCopiado ? '#198754' : '', 
                      color: emailCopiado ? '#ffffff' : '' 
                    }}
                  >
                    <i className={emailCopiado ? "bi bi-check-lg" : "bi bi-envelope-fill"}></i>
                  </div>
                  <div>
                    <p className="mb-0 small" style={{ color: emailCopiado ? '#198754' : 'var(--gray)', transition: 'color 0.3s ease' }}>
                      {emailCopiado ? "E-mail copiado!" : "E-mail"}
                    </p>
                    <p className="mb-0 fw-semibold fs-5 f-lightgray">lanaazz0193@gmail.com</p>
                  </div>
                </a>

                {/* Localização */}
                <a 
                  href="https://viva.jaguaracu.mg.gov.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-center gap-3 contact-info-item"
                >
                  <div className="contact-icon-box shadow-sm">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <p className="mb-0 small f-gray">Localização base</p>
                    <p className="mb-0 fw-semibold fs-5 f-lightgray">Jaguaraçu, MG - Brasil</p>
                  </div>
                </a>
              </div>

            </div>

            {/* Lado Direito - Formulário */}
            <div className="col-lg-7 p-4 p-md-5 contact-form-panel">
              <h4 className="fw-bold mb-4 f-white">Envie uma mensagem</h4>
              
              <form>
                <div className="row g-3">

                  {/* Nome */}                 
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control contact-input" id="inputNome" placeholder="Seu Nome" required />
                      <label htmlFor="inputNome">Seu Nome</label>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control contact-input" id="inputEmail" placeholder="nome@exemplo.com" required />
                      <label htmlFor="inputEmail">E-mail</label>
                    </div>
                  </div>

                  {/* Assunto */}
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control contact-input" id="inputAssunto" placeholder="Assunto" required />
                      <label htmlFor="inputAssunto">Assunto</label>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <textarea className="form-control contact-input contact-textarea" placeholder="Deixe sua mensagem" id="inputMensagem" required></textarea>
                      <label htmlFor="inputMensagem">Sua Mensagem</label>
                    </div>
                  </div>

                  {/* Botão de envio */}
                  <div className="col-12 mt-2">
                    <button type="submit" className="btn btn-contact-custom btn-lg w-100 rounded-1 fw-bold shadow-sm py-3 d-flex justify-content-center align-items-center gap-2">
                      <i className="bi bi-send-fill"></i> Enviar Mensagem
                    </button>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;