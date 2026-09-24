import './login.css';
import { Link } from 'react-router';

const Login = () => {
  return (
    <section className="d-flex align-items-center justify-content-center bg-login-litera">
      <div className="container py-5">
        
        {/* Card principal */}
        <div className="row g-0 rounded-4 mx-auto login-container shadow-litera bg-white">
          
          {/* Painel Esquerdo (Marca Litera) */}
          <div className="col-lg-5 d-none d-lg-flex flex-column justify-content-between p-5 brand-panel-litera">
            
            {/* Logo */}
            <img src="src\assets\imgs\logo-branca.png" alt="Logo Litera" className="logo mb-3 icon-logo" />

            {/* Frase de Impacto */}
            <div className="z-1 position-relative mt-5">
              <h2 className="fw-bold mb-4 display-5 text-white">Bem-vindo<br/>de volta.</h2>
              <p className="lh-lg text-white-50">
                Sua próxima descoberta começa aqui. Acesse seu painel exclusivo e continue de onde parou.
              </p>
            </div>
          </div>

          {/* Formulário de Login */}
          <div className="col-lg-7 p-4 p-md-5 d-flex flex-column justify-content-center">

            {/* Container interno do formulário */}          
            <div className="w-100 mx-auto login-form-wrapper">
              
              {/* Título e parágrafo */}
              <div className="mb-5 mt-3">
                <h3 className="fw-bold text-graphite">Fazer Login</h3>
                <p className="text-millbrook">Insira suas credenciais de acesso.</p>
              </div>

              <form>
                {/* E-mail */}
                <div className="form-floating mb-4">
                  <input type="email" className="form-control custom-input-litera rounded-3" id="loginEmail" placeholder="nome@exemplo.com" required />
                  <label htmlFor="loginEmail">Seu e-mail</label>
                </div>

                {/* Senha */}
                <div className="form-floating mb-4">
                  <input type="password" className="form-control custom-input-litera rounded-3" id="loginPassword" placeholder="Senha" required />
                  <label htmlFor="loginPassword">Sua senha</label>
                </div>

                {/* Esqueci a senha */}
                <div className="d-flex justify-content-end mb-4">
                  <a href="#" className="small text-decoration-none link-spicymix fw-medium">Esqueceu a senha?</a>
                </div>

                {/* Botão de entrar (Transformado em Link diretamente) */}
                <Link to="/litera-app/dashboard" className="btn btn-litera-login w-100 rounded-3 fw-bold py-3 mb-4 d-block text-center text-decoration-none">
                  Entrar no sistema
                </Link>

                {/* Opções de continuidade */}
                <div className="d-flex align-items-center mb-4">
                  <hr className="flex-grow-1 divider-litera" />
                  <span className="mx-3 small text-uppercase fw-bold text-millbrook">Ou continue com</span>
                  <hr className="flex-grow-1 divider-litera" />
                </div>

                {/* Google ou GitHub */}
                <div className="d-flex gap-3 mb-4">
                  <a href="#" className="btn btn-social-litera w-100 rounded-3 py-2 d-flex justify-content-center align-items-center gap-2 fw-medium">
                    <i className="bi bi-google"></i> Google
                  </a>
                  <a href="#" className="btn btn-social-litera w-100 rounded-3 py-2 d-flex justify-content-center align-items-center gap-2 fw-medium">
                    <i className="bi bi-github"></i> GitHub
                  </a>
                </div>

                {/* Opção de cadastrar */}
                <p className="text-center small mb-0 mt-5 text-millbrook">
                  Ainda não tem uma conta? <a href="#" className="text-decoration-none fw-bold ms-1 link-spicymix">Cadastre-se agora</a>
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