import { useState } from "react";
import "../sections/Dashboard/dashboard.css";

export default function LivroDetalhesModal({ aberto, onFechar, livro }) {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState("");

  if (!aberto || !livro) return null;

  const imageUrl = livro.capaUrl || livro.capa || livro.imagem;

  const handleSalvarResenha = () => {
    console.log("Resenha salva:", { livroId: livro.id, nota, comentario });
    // Futuramente, aqui você chamará uma função do seu hook para salvar no banco!
    alert("Resenha salva com sucesso!");
    setNota(0);
    setComentario("");
  };

  return (
    <div className="modal-overlay" onClick={onFechar}>
      {/* Impede que clicar dentro do modal feche ele */}
      <div className="modal-content-litera" onClick={(e) => e.stopPropagation()}>
        
        {/* Cabeçalho do Modal */}
        <div className="d-flex justify-content-between p-4 border-bottom">
          <h2 className="dashboard-title mb-0">Detalhes e Resenhas</h2>
          <button className="btn-close" onClick={onFechar}></button>
        </div>

        {/* Corpo do Modal */}
        <div className="p-4">
          <div className="row mb-4">
            {/* Foto do Livro */}
            <div className="col-4 col-md-3">
              {imageUrl ? (
                <img src={imageUrl} alt="Capa" className="img-fluid rounded shadow-sm" />
              ) : (
                <div className="book-cover-placeholder rounded shadow-sm" style={{ paddingBottom: '150%' }}>
                  <i className="bi bi-book mt-4"></i>
                </div>
              )}
            </div>
            
            {/* Infos do Livro */}
            <div className="col-8 col-md-9 d-flex flex-column justify-content-center">
              <h3 className="fw-bold" style={{ color: 'var(--graphite)' }}>{livro.titulo}</h3>
              <p className="text-muted mb-2">por {livro.autor}</p>
              <div className="mb-2">
                <span className="genre-badge">{livro.genero}</span>
              </div>
              <p className="small mt-2" style={{ color: 'var(--millbrook)' }}>
                {livro.descricao || "Nenhuma sinopse disponível para este livro."}
              </p>
            </div>
          </div>

          <hr className="my-4" style={{ borderColor: '#f0e8e0' }} />

          {/* Área de Criar Avaliação */}
          <h5 className="fw-bold mb-3" style={{ color: 'var(--graphite)' }}>Deixe sua avaliação</h5>
          
          <div className="mb-3">
            <label className="form-label small fw-bold" style={{ color: 'var(--millbrook)' }}>Nota:</label>
            <div className="star-rating">
              {[5, 4, 3, 2, 1].map((valor) => (
                <div key={valor}>
                  <input 
                    type="radio" 
                    id={`star${valor}`} 
                    name="rating" 
                    value={valor}
                    checked={nota === valor}
                    onChange={() => setNota(valor)}
                  />
                  <label htmlFor={`star${valor}`}><i className="bi bi-star-fill"></i></label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <textarea 
              className="form-control" 
              rows="3" 
              placeholder="O que você achou desta leitura?"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              style={{ backgroundColor: '#faf3ee', border: '1px solid #e8ddd5' }}
            ></textarea>
          </div>
          
          <button 
            className="btn-litera w-100 mb-4" 
            onClick={handleSalvarResenha}
            disabled={nota === 0 || comentario.trim() === ""}
          >
            Publicar Avaliação
          </button>

          {/* Lista de Avaliações (Mockada para testar o visual) */}
          <h5 className="fw-bold mb-3 mt-4" style={{ color: 'var(--graphite)' }}>Avaliações da Comunidade</h5>
          
          <div className="review-card">
            <div className="review-header">
              <div>
                <span className="review-author">Maria Silva</span>
                <div className="text-warning small">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
              </div>
              <span className="review-date">Há 2 dias</span>
            </div>
            <p className="review-text">História incrível! Não consegui parar de ler. Super recomendo para quem gosta de um bom mistério.</p>
          </div>

        </div>
      </div>
    </div>
  );
}