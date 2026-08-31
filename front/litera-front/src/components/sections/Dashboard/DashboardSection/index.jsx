const DashboardSection = () => {
    return (
    <div className="d-flex vh-100 overflow-hidden">
      
      {/* ==================== SIDEBAR ==================== */}
      <aside className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100" style={{ width: '280px' }}>
        <a href="/" className="d-flex align-items-center justify-content-center mb-4 mt-2 me-md-auto link-dark text-decoration-none w-100">
          <span className="fs-4 fw-bold text-center text-secondary">Litera</span>
        </a>
        <hr className="mt-0" />
        
        <ul className="nav nav-pills flex-column mb-auto gap-2">
          <li className="nav-item">
            <a href="#" className="nav-link link-dark d-flex align-items-center" aria-current="page">Dashboard</a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark d-flex align-items-center">Catálogo de Livros</a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark d-flex align-items-center">Membros</a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark d-flex align-items-center">Empréstimos</a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark d-flex align-items-center">Relatórios</a>
          </li>
        </ul>
        
        <hr />
        
        <div className="sidebar-footer d-flex flex-column gap-2">
          <a href="#" className="d-flex align-items-center link-dark text-decoration-none px-2 py-1 rounded hover-bg-light">
            <p>Sair do Sistema</p>
          </a>
        </div>
      </aside>

      {/* ==================== CONTEÚDO PRINCIPAL ==================== */}
      <main className="flex-grow-1 p-4 overflow-auto">
        
        {/* === WELCOME SECTION === */}
        <section className="welcome-section mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h1 className="h3 mb-0 fw-bold">Visão Geral</h1>
              <span className="text-muted">(data)</span>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center bg-light p-3 rounded">
            <div className="d-flex align-items-center mb-2 mb-md-0">
              <img 
                src="" 
                alt="Foto de Perfil" 
                className="rounded-circle me-3" 
              />
              <div>
                <h2 className="h6 mb-0 text-muted">Bem-vinda de volta,</h2>
                <h3 className="h5 mb-0 fw-bold">(Fulano)</h3>
              </div>
            </div>
            <div className="input-group" style={{ maxWidth: '300px' }}>
              <input type="text" className="form-control" placeholder="Buscar livro, autor ou membro..." aria-label="Campo de busca" />
              <button className="btn btn-secondary" type="button">Pesquisar</button>
            </div>
          </div>
        </section>

        {/* === CARDS SECTION === */}
        <section className="cards-section mb-4">
          <div className="row g-3">
            
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h6 className="card-subtitle mb-2 text-dark fw-semibold">Total de Membros</h6>
                  <h2 className="card-title mb-2 text-dark fw-bold">Nº</h2>
                  <p className="card-text small mb-4 text-dark fw-medium">Nº novos este mês</p>
                  <button className="btn btn-outline-secondary btn-sm mt-auto w-100">Gerenciar Membros</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h6 className="card-subtitle mb-2 text-dark fw-semibold">Empréstimos Ativos</h6>
                  <h2 className="card-title mb-2 text-dark fw-bold">Nº</h2>
                  <p className="card-text small mb-4 text-dark fw-medium">Nº em atraso</p>
                  <button className="btn btn-outline-secondary btn-sm mt-auto w-100">Ver Empréstimos</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h6 className="card-subtitle mb-2 text-dark fw-semibold">Livro Mais Retirado</h6>
                  <h2 className="card-title mb-3 h4 fw-bold text-dark">Livro</h2>
                  <ul className="list-unstyled small mb-3 text-dark">
                    <li>Autor: Fulano</li>
                    <li>Retiradas no mês: Nº</li>
                  </ul>
                  <button className="btn btn-outline-secondary btn-sm mt-auto w-100 text-secondary">Ver Detalhes</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h6 className="card-subtitle mb-2 text-dark fw-semibold">Acervo Total</h6>
                  <h2 className="card-title mb-2 text-dark fw-bold">Nº</h2>
                  <p className="card-text small mb-4 text-dark">Títulos disponíveis</p>
                  <button className="btn btn-outline-secondary btn-sm mt-auto w-100">Acessar Catálogo</button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* === STATISTICS SECTION === */}
        <section className="statistics-section mb-4">
          <div className="row g-4">
            
            {/* Gráfico Principal */}
            <div className="col-12 col-lg-7">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-header bg-transparent border-0 pt-4 pb-0">
                  <h3 className="h5 mb-0 fw-bold text-dark">Gêneros Favoritos (ano)</h3>
                </div>
                <div className="card-body d-flex flex-column justify-content-center">
                  <div className="chart-container w-100 p-4 border rounded d-flex flex-column align-items-center justify-content-center bg-light" style={{ minHeight: '300px' }}>
                    <p className="mb-0 text-muted">O componente do gráfico (ex: Recharts) será inserido aqui.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabelas Laterais */}
            <div className="col-12 col-lg-5 d-flex flex-column gap-4">
              
              {/* Tabela 1: Últimos Cadastros */}
              <div className="card shadow-sm border-0">
                <div className="card-header bg-transparent border-0 pt-4 pb-2">
                  <h3 className="h6 mb-0 fw-bold text-dark">Membros Recentes</h3>
                </div>
                <div className="card-body table-responsive pt-0">
                  <table className="table table-sm table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Nome</th>
                        <th>Plano</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Fulano</td>
                        <td>Lorem</td>
                        <td><span className="badge bg-secondary">Ativo</span></td>
                      </tr>
                      <tr>
                        <td>Fulano</td>
                        <td>Lorem</td>
                        <td><span className="badge bg-secondary">Ativo</span></td>
                      </tr>
                      <tr>
                        <td>Fulano</td>
                        <td>Lorem</td>
                        <td><span className="badge bg-secondary text-light">Ativo</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tabela 2: Aluguéis */}
              <div className="card shadow-sm border-0">
                <div className="card-header bg-transparent border-0 pt-4 pb-2">
                  <h3 className="h6 mb-0 fw-bold text-secondary">Aluguéis</h3>
                </div>
                <div className="card-body table-responsive pt-0">
                  <table className="table table-sm table-hover align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Livro</th>
                        <th>Membro</th>
                        <th className="text-end">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span className="text-truncate d-inline-block">Livro - Autor</span></td>
                        <td>Fulano</td>
                        <td className="text-secondary fw-bold">(data)</td>
                        <td className="text-end">
                          <button className="btn btn-outline-secondary btn-sm me-1" title="Notificar">Botão</button>
                          <button className="btn btn-outline-secondary btn-sm" title="Baixa">Botão</button>
                        </td>
                      </tr>
                      <tr>
                        <td><span className="text-truncate d-inline-block">Livro - Autor</span></td>
                        <td>Fulano</td>
                        <td className="text-secondary fw-bold">(data)</td>
                        <td className="text-end">
                          <button className="btn btn-outline-secondary btn-sm me-1" title="Botão">Botão</button>
                          <button className="btn btn-outline-secondary btn-sm" title="Botão">Botão</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default DashboardSection;