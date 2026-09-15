import { useState } from "react";
import { Link } from "react-router"; 
import { useLivrosCrud } from "../useLivrosCrud"; 
import '../dashboard.css'; 

// Importação do Modal (Ajuste a quantidade de "../" conforme a sua pasta)
import LivroDetalhesModal from "../../../ui/LivroDetalhesModal";

/* ==========================================================================
   📦 SKELETON GENÉRICO
   ========================================================================== */
function Skeleton({ height = "1rem", width = "60%" }) {
  return (
    <span
      className="skeleton-block"
      style={{ height, width }}
      aria-hidden="true"
    />
  );
}

/* ==========================================================================
   📦 SKELETON DO CARD DE LIVRO
   ========================================================================== */
function BookCardSkeleton() {
  return (
    <div className="book-card" style={{ pointerEvents: "none" }}>
      <div className="book-cover-wrapper">
        <Skeleton height="100%" width="100%" style={{ position: "absolute", top: 0, left: 0 }} />
      </div>
      <div className="book-info">
        <div className="mb-2"><Skeleton height="1rem" width="90%" /></div>
        <div className="mb-3"><Skeleton height="0.8rem" width="60%" /></div>
        <div className="book-genre-wrapper mt-auto">
          <Skeleton height="1.2rem" width="40%" />
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   📦 COMPONENTE: CARD DO LIVRO
   ========================================================================== */
function LivroCard({ livro, onClick }) {
  const imageUrl = livro.capaUrl || livro.capa || livro.imagem;

  return (
    // Voltamos para <div> com onClick para o Modal abrir corretamente
    <div className="book-card text-decoration-none" onClick={() => onClick(livro)}>
      <div className="book-cover-wrapper">
        {imageUrl ? (
          <img src={imageUrl} alt={`Capa de ${livro.titulo}`} className="book-cover-img" />
        ) : (
          <div className="book-cover-placeholder">
            <i className="bi bi-book"></i>
            <span style={{ fontSize: '0.7rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Sem Capa
            </span>
          </div>
        )}
      </div>

      <div className="book-info text-dark">
        <h3 className="book-title" title={livro.titulo}>{livro.titulo}</h3>
        <p className="book-author" title={livro.autor}>{livro.autor}</p>
        
        <div className="book-genre-wrapper">
          <span className="genre-badge">{livro.genero || "Diversos"}</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   📦 COMPONENTE PRINCIPAL: CATÁLOGO
   ========================================================================== */
const CatalogoSection = () => {
  const { livros, loading, erro } = useLivrosCrud();
  const [busca, setBusca] = useState("");
  
  // ⭐️ Estado que controla qual livro está no Modal
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  // Filtra os livros pela busca
  const livrosFiltrados = livros.filter(l => 
    l.titulo.toLowerCase().includes(busca.toLowerCase()) || 
    l.autor.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="dashboard-wrapper">
      
      <div className="mb-4">
        <Link to="/litera-app/dashboard" className="text-decoration-none" style={{ color: 'var(--millbrook)', fontSize: '0.9rem' }}>
          <i className="bi bi-arrow-left me-2"></i>
          Voltar para o Dashboard
        </Link>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="dashboard-title">Catálogo do Acervo</h1>
          <p className="dashboard-subtitle">Explore todos os livros disponíveis</p>
        </div>

        <div className="position-relative" style={{ minWidth: "280px" }}>
          <i className="bi bi-search position-absolute" style={{ top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--millbrook)' }}></i>
          <input 
            type="text" 
            className="form-control ps-5 py-2" 
            placeholder="Buscar por título ou autor..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            style={{ borderRadius: '2rem', border: '1px solid #e8ddd5', backgroundColor: '#fff', fontSize: '0.85rem' }}
          />
        </div>
      </div>

      {erro && (
        <div className="alert alert-danger mb-4">
          <i className="bi bi-exclamation-triangle me-2"></i> {erro}
        </div>
      )}

      <div className="row g-4">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <BookCardSkeleton />
            </div>
          ))
        ) : livrosFiltrados.length === 0 ? (
          <div className="col-12">
            <div className="empty-state data-card p-5 mt-3">
              <i className="bi bi-journal-x" style={{ fontSize: '3rem' }}></i>
              <h4 className="mt-3" style={{ color: 'var(--graphite)' }}>Nenhum livro encontrado</h4>
              <p>
                {busca 
                  ? "Tente buscar por termos diferentes." 
                  : "Não há livros cadastrados no acervo ainda."}
              </p>
            </div>
          </div>
        ) : (
          livrosFiltrados.map((livro) => (
            <div key={livro.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
              {/* ⭐️ Ao clicar, salva o livro no estado para abrir o modal */}
              <LivroCard livro={livro} onClick={(l) => setLivroSelecionado(l)} />
            </div>
          ))
        )}
      </div>

      {/* ⭐️ Renderiza o Modal de Detalhes e Resenhas */}
      <LivroDetalhesModal
        aberto={livroSelecionado !== null}
        onFechar={() => setLivroSelecionado(null)}
        livro={livroSelecionado}
      />

    </div> // Fim do dashboard-wrapper
  ); // Fim do return
}; // Fim da função CatalogoSection

export default CatalogoSection;