const SideBar = () => {
    return (
    // 'vh-100' ocupa toda a altura, 'flex-shrink-0' impede que a barra amasse, 'bg-light' dá um fundo claro
    <aside className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100" style={{ width: '280px' }}>
      
      {/* Área da Logo / Título do Sistema */}
      <a href="/" className="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none w-100">
        {/* Inserir a imagem da logo aqui */}
        <span className="fs-5 fw-bold text-center">{/* Nome do Sistema / Biblioteca */}</span>
      </a>
      
      <hr />

      {/* Menu de Navegação */}
      {/* 'mb-auto' empurra qualquer conteúdo abaixo deste menu para o final da tela */}
      <ul className="nav nav-pills flex-column mb-auto gap-1">
        
        {/* Item 1: Link Ativo (Ex: Dashboard) */}
        <li className="nav-item">
          {/* A classe 'active' do Bootstrap destaca o botão atual */}
          <a href="#" className="nav-link active d-flex align-items-center" aria-current="page">
            <span className="me-2">{/* Inserir Ícone 1 aqui */}</span>
            {/* Texto do Link 1 */}
          </a>
        </li>

        {/* Item 2 (Ex: Catálogo) */}
        <li>
          <a href="#" className="nav-link link-dark d-flex align-items-center">
            <span className="me-2">{/* Inserir Ícone 2 aqui */}</span>
            {/* Texto do Link 2 */}
          </a>
        </li>

        {/* Item 3 (Ex: Membros) */}
        <li>
          <a href="#" className="nav-link link-dark d-flex align-items-center">
            <span className="me-2">{/* Inserir Ícone 3 aqui */}</span>
            {/* Texto do Link 3 */}
          </a>
        </li>

        {/* Adicione os demais links copiando o bloco <li> acima */}
      </ul>
      
      <hr />

      {/* Rodapé da Sidebar (Geralmente Configurações ou Perfil rápido) */}
      <div className="sidebar-footer">
        <a href="#" className="d-flex align-items-center link-dark text-decoration-none">
          <span className="me-2">{/* Inserir Ícone de Engrenagem (Configurações) */}</span>
          <strong>{/* Texto "Configurações" ou "Sair" */}</strong>
        </a>
      </div>

    </aside>
  );
}

export default SideBar;