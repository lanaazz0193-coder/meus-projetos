// Importa o componente base 'Modal' que está na mesma pasta.
// Ele é responsável pela casca da janela flutuante (fundo escuro/backdrop, cabeçalho, animação de fechar, etc.).
import Modal from "./Modal";

/**
 * Componente funcional que atua como uma caixa de diálogo de confirmação (Delete do CRUD).
 * Desestrutura as 'props' (propriedades) recebidas do componente pai:
 * - aberto: boolean que diz se o modal deve estar visível ou oculto.
 * - onFechar: função callback disparada para fechar a janela sem realizar a ação.
 * - onConfirmar: função callback disparada quando o usuário clica para apagar de fato (onde costuma rodar o DELETE via API/Axios).
 * - titulo: o nome/título do registro selecionado que será exibido para conferência.
 * - carregando: boolean que indica se a requisição de exclusão está em andamento (loading).
 */
const ConfirmModal = ({ aberto, onFechar, onConfirmar, titulo, carregando }) => {
  return (
    /* Renderiza o componente Modal genérico passando as configurações básicas:
       - 'tamanho="sm"' aplica um modal pequeno (ideal para confirmações simples).
       - 'titulo' define o texto padrão do cabeçalho da janela. */
    <Modal aberto={aberto} onFechar={onFechar} titulo="Confirmar exclusão" tamanho="sm">
      
      {/* Container com espaçamento interno (padding: p-4) para organizar o conteúdo */}
      <div className="p-4">
        
        {/* Mensagem descritiva com cor atenuada (text-muted) e margem inferior pequena (mb-1) */}
        <p className="text-muted mb-1">Você está prestes a excluir:</p>
        
        {/* Exibe o nome do item dinamicamente em negrito suave (fw-semibold) para o usuário ter certeza do que está apagando */}
        <p className="fw-semibold text-dark mb-4">"{titulo}"</p>
        
        {/* Alerta em vermelho (text-danger) informando que a operação é irreversível */}
        <p className="small text-danger mb-4">
          ⚠️ Esta ação não pode ser desfeita.
        </p>

        {/* Linha de botões alinhada à direita (justify-content-end) com espaçamento entre eles (gap-2) */}
        <div className="d-flex gap-2 justify-content-end">
          
          {/* Botão Cancelar:
              - onClick={onFechar}: aciona o fechamento do modal sem deletar nada.
              - disabled={carregando}: trava o botão se a exclusão já estiver acontecendo, evitando cliques acidentais. */}
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onFechar}
            disabled={carregando}
          >
            Cancelar
          </button>
          
          {/* Botão de Confirmação (Perigo):
              - onClick={onConfirmar}: dispara a rotina de exclusão no backend/estado.
              - disabled={carregando}: desativa o botão para evitar envio duplo da requisição. */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={onConfirmar}
            disabled={carregando}
          >
            {/* Renderização condicional usando operador ternário:
                Se 'carregando' for true, exibe um ícone giratório (spinner) e o texto "Excluindo...".
                Se for false, mostra o texto padrão "Sim, excluir". */}
            {carregando ? (
              <>
                {/* Ícone de rotação nativo do Bootstrap */}
                <span className="spinner-border spinner-border-sm me-2" role="status" />
                Excluindo...
              </>
            ) : (
              "Sim, excluir"
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};

// Exporta o componente para poder ser importado e reutilizado na Dashboard ou em outras telas de listagem.
export default ConfirmModal;