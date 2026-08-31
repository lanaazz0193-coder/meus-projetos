import './login.css';

const Login = () => {
  return (
    <section className="d-flex align-items-center justify-content-center bg-login-custom">
      <div className="container py-5">
        
        {/* Card principal */}
        <div className="row g-0 card-glass c-darkgray rounded-4 mx-auto login-container">
          
          {/* Imagem */}
          <div className="col-lg-5 d-none d-lg-flex flex-column justify-content-between p-5 brand-panel">
            
            {/* Logo */}
            <img src="src\assets\imgs\logo-branca.png" alt="Logo da Ana" className="logo mb-3 icon-logo" />

            {/* Frase de Impacto */}
            <div className="z-1 position-relative mt-5">
              <h2 className="fw-bold mb-4 display-5 f-white">Bem-vindo<br/>de volta.</h2>
              <p className="lh-lg f-lightgray f-p">
                Sua próxima descoberta começa aqui. Acesse seu painel exclusivo e continue de onde parou.
              </p>
            </div>
            
            {/* Elementos decorativos inferiores */}
            <div className="z-1 d-flex gap-2 opacity-50">
              <div className="decor-bar decor-bar-lg c-red"></div>
              <div className="decor-bar decor-bar-sm c-darker"></div>
            </div>
          </div>

          {/* Formulário de Login */}
          <div className="col-lg-7 p-4 p-md-5 d-flex flex-column justify-content-center c-darkgray">

            {/* Container interno do formulário */}          
            <div className="w-100 mx-auto login-form-wrapper">
              
              {/* Título e parágrafo */}
              <div className="mb-5 mt-3">
                <h3 className="fw-bold f-white">Fazer Login</h3>
                <p className="f-gray f-pp">Insira suas credenciais de acesso.</p>
              </div>

              <form>
                {/* E-mail */}
                <div className="form-floating mb-4">
                  <input type="email" className="form-control custom-input rounded-3" id="loginEmail" placeholder="nome@exemplo.com" required />
                  <label htmlFor="loginEmail">Seu e-mail profissional</label>
                </div>

                {/* Senha */}
                <div className="form-floating mb-4">
                  <input type="password" className="form-control custom-input rounded-3" id="loginPassword" placeholder="Senha" required />
                  <label htmlFor="loginPassword">Sua senha</label>
                </div>

                {/* Esqueci a senha */}
                <div className="d-flex justify-content-end mb-4">
                  <a href="#" className="small text-decoration-none link-custom f-red">Esqueceu a senha?</a>
                </div>

                {/* Botão de entrar */}
                <button type="submit" className="btn btn-principal-custom f-white btn-lg w-100 rounded-3 fw-bold py-3 mb-4">
                  Entrar no sistema
                </button>

                {/* Opções de continuidade */}
                <div className="d-flex align-items-center mb-4">
                  <hr className="flex-grow-1 divider-gray" />
                  <span className="mx-3 small text-uppercase fw-bold f-gray">Ou continue com</span>
                  <hr className="flex-grow-1 divider-gray" />
                </div>

                {/* Google ou GitHub */}
                <div className="d-flex gap-3 mb-4">
                  <a href="#" className="btn btn-social-custom w-100 rounded-3 py-2 d-flex justify-content-center align-items-center gap-2 fw-medium">
                    <i className="bi bi-google"></i> Google
                  </a>
                  <a href="#" className="btn btn-social-custom w-100 rounded-3 py-2 d-flex justify-content-center align-items-center gap-2 fw-medium">
                    <i className="bi bi-github"></i> GitHub
                  </a>
                </div>

                {/* Opção de cadastrar */}
                <p className="text-center small mb-0 mt-5 f-gray">
                  Ainda não tem uma conta? <a href="#" className="text-decoration-none fw-bold ms-1 link-custom f-red">Cadastre-se agora</a>
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