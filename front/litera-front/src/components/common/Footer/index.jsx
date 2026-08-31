const Footer = () => {
  return (
    // Fundo azul escuro inspirado na imagem de referência
    <footer className="text-white py-5 bg-dark">
      <div className="container py-4">
        <div className="row">
          
          {/* Texto Chamativo e Botão */}
          <div className="col-lg-5 mb-5 mb-lg-0 d-flex flex-column justify-content-center">
            <p className="fs-5 mb-1 opacity-75">Para não perder nenhuma novidade</p>
            <h2 className="fw-bold mb-4">Litera</h2>
            <div><button 
                className="btn btn-secondary fw-bold px-4 py-2 border-0"
              >
                Inscrever-se
              </button>
            </div>
          </div>

          {/* Colunas de Links e Redes Sociais */}
          <div className="col-lg-7">
            <div className="row">
              
              <div className="col-md-4 col-6 mb-4">
                <h5 className="fw-bold mb-3">Plataforma</h5>
                <ul className="list-unstyled lh-lg">
                  <li><a href="#" className="text-white text-decoration-none opacity-75">Sobre nós</a></li>
                  <li><a href="#" className="text-white text-decoration-none opacity-75">Funcionalidades</a></li>
                  <li><a href="#" className="text-white text-decoration-none opacity-75">Suporte</a></li>
                </ul>
              </div>

              {/* Coluna 2 - Comunidade (Referência: Students) */}
              <div className="col-md-4 col-6 mb-4">
                <h5 className="fw-bold mb-3">Comunidade</h5>
                <ul className="list-unstyled lh-lg">
                  <li><a href="#" className="text-white text-decoration-none opacity-75">Top Leitores</a></li>
                  <li><a href="#" className="text-white text-decoration-none opacity-75">Desafios anuais</a></li>
                  <li><a href="#" className="text-white text-decoration-none opacity-75">Troca de livros</a></li>
                  <li><a href="#" className="text-white text-decoration-none opacity-75">Clube de leitura</a></li>
                </ul>
              </div>

              {/* Coluna 3 - Explorar (Referência: Blogs) e Ícones Sociais */}
              <div className="col-md-4 col-12 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold mb-3">Explorar</h5>
                  <ul className="list-unstyled lh-lg">
                    <li><a href="#" className="text-white text-decoration-none opacity-75">Ficção</a></li>
                    <li><a href="#" className="text-white text-decoration-none opacity-75">Fantasia</a></li>
                    <li><a href="#" className="text-white text-decoration-none opacity-75">Romance</a></li>
                    <li><a href="#" className="text-white text-decoration-none opacity-75">Biografias</a></li>
                    <li><a href="#" className="text-white text-decoration-none opacity-75">Internacional</a></li>
                  </ul>
                </div>

                {/* Ícones de Redes Sociais alinhados no fundo da terceira coluna */}
                <div className="d-flex gap-2 mt-4 mt-md-0">
                  <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-white fs-4"><i className="bi bi-whatsapp"></i></a>
                  <a href="#" className="text-white fs-4"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
                </div>
              </div>

            </div>
          </div>

          {/* ==========================================
          PARTE INFERIOR: Logo e Direitos Autorais
          ========================================== */}
      {/* Container de largura total para aplicar a borda superior de ponta a ponta */}
      <div 
        className="container-fluid" 
        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
      >
        <div className="container py-4">
          <div className="row align-items-center">
            
            {/* Logo à esquerda (centralizada no mobile) */}
            <div className="col-md-6 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
              <a href="/" className="text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-book-half fs-3 me-2"></i>
                <span className="fs-5 fw-bold">Litera</span>
              </a>
            </div>

            {/* Direitos Autorais à direita (centralizado no mobile) */}
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
              <small className="opacity-75 text-center">
                &copy; 2026 Litera. Todos os direitos reservados.
              </small>
            </div>

          </div>
        </div>
      </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;