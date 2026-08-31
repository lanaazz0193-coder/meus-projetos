const Login = () => {
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center bg-light" style={{ minHeight: '100vh' }}>
      <div className="container py-5">
        
        {/* Card principal */}
        <div className="row g-0 bg-white shadow-lg rounded-5 overflow-hidden mx-auto" style={{ maxWidth: '1000px' }}>
          
          {/* Lado Esquerdo: Imagem e Branding (Oculto em telas pequenas) */}
          <div className="col-lg-5 d-none d-lg-flex flex-column justify-content-between text-black p-5 position-relative">
            
            {/* Logo */}
            <a href="index.html" className="text-white text-decoration-none d-flex align-items-center gap-2 z-1 position-relative">
              <div className="bg-white text-primary rounded p-2 d-flex justify-content-center align-items-center">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <span className="fw-bold fs-4"></span>
            </a>

            {/* Frase de Impacto */}
            <div className="z-1 position-relative mt-5">
              <h2 className="fw-bold mb-4 display-6">Olá</h2>
              <p className="text-white-80 lh-lg opacity-75 f-pp">Sua próxima descoberta começa aqui. Entre na sua conta.</p>
            </div>
            
          </div>

          {/* Formulário de Login */}
          <div className="col-lg-7 p-4 p-md-5 d-flex flex-column justify-content-center">

            {/* Título e parágrafo */}           
            <div className="w-100 mx-auto" style={{ maxWidth: '400px' }}>
              <div className="mb-4 mt-4">
                <h3 className="fw-bold text-dark">Fazer Login</h3>
                <p className="text-secondary">Insira suas credenciais para acessar a plataforma.</p>
              </div>

              <form>
                
                {/* E-mail */}
                <div className="form-floating mb-3">
                  <input type="email" className="form-control bg-light border-0" id="loginEmail" placeholder="nome@exemplo.com" required />
                  <label htmlFor="loginEmail" className="text-secondary">Seu e-mail</label>
                </div>

                {/* Senha */}
                <div className="form-floating mb-3">
                  <input type="password" className="form-control bg-light border-0" id="loginPassword" placeholder="Senha" required />
                  <label htmlFor="loginPassword" className="text-secondary">Sua senha</label>
                </div>

                {/* Botão de entrar */}
                <button type="submit" className="btn btn-outline-secondary btn-lg w-100 rounded-0 fw-bold shadow-sm py-3 mb-4">Entrar na conta</button>

                {/* Opções de continuidade */}
                <div className="d-flex align-items-center mb-4">
                  <hr className="flex-grow-1 text-secondary opacity-25" />
                  <span className="mx-3 text-secondary small text-uppercase tracking-wider">Ou continue com</span>
                  <hr className="flex-grow-1 text-secondary opacity-25" />
                </div>

                {/* Google ou git */}
                <div className="d-flex gap-3 mb-4">
                  <a href="#" className="btn btn-outline-light text-dark border w-100 rounded-pill py-2 d-flex justify-content-center align-items-center gap-2 fw-medium hover-bg-light">Google</a>
                  <a href="#" className="btn btn-outline-light text-dark border w-100 rounded-pill py-2 d-flex justify-content-center align-items-center gap-2 fw-medium hover-bg-light">GitHub</a>
                </div>

                {/* Opção de cadastrar */}
                <p className="text-center text-secondary small mb-0">
                  Ainda não tem uma conta? <a href="#" className="text-secondary text-decoration-none fw-bold">Cadastre-se grátis</a>
                </p>
              </form>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Login;