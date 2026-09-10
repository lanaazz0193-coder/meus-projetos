// useEffect gerencia o efeito colateral de travar a rolagem da página.
import { useEffect } from "react";
// createPortal renderiza o elemento em outro nó do DOM (fora da árvore React pai direta).
import { createPortal } from "react-dom";

/**
 * Componente base de Modal independente.
 * Não depende dos scripts JS do Bootstrap nem de bibliotecas externas pesadas.
 * Props:
 * - aberto: flag booleana de visibilidade.
 * - onFechar: callback executado ao clicar no backdrop ou no 'X'.
 * - titulo: texto do topo do modal.
 * - tamanho: define a largura máxima ("sm", "md", "lg", "xl"), padrão "md".
 * - children: nós React / componentes passados dentro da tag <Modal>...</Modal>.
 */
const Modal = ({ aberto, onFechar, titulo, tamanho = "md", children }) => {
  
  /**
   * Controla a rolagem da página principal:
   * Evita que o usuário role a dashboard no fundo enquanto a janela estiver aberta.
   */
  useEffect(() => {
    if (aberto) {
      // Bloqueia a rolagem no elemento raiz <body>
      document.body.style.overflow = "hidden";
    } else {
      // Restaura o comportamento natural de rolagem
      document.body.style.overflow = "";
    }

    // Função de limpeza (cleanup): restaura a rolagem se o componente for desmontado
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  // Se 'aberto' for false, interrompe o ciclo aqui e não renderiza nada no DOM
  if (!aberto) return null;

  // Dicionário de larguras máximas associadas à prop 'tamanho'
  const maxWidths = {
    sm: "400px", // Usado em confirmações (ex: ConfirmModal)
    md: "560px", // Tamanho padrão intermediário
    lg: "760px", // Usado em formulários mais extensos (ex: LivroModal)
    xl: "960px", // Telas complexas ou tabelas internas
  };

  /**
   * createPortal(elementoJSX, nóDestino):
   * Renderiza o modal diretamente no <body>, evitando bugs visuais de z-index,
   * overflow:hidden ou transform que possam existir nos containers pais da Dashboard.
   */
  return createPortal(
    <>
      {/* Backdrop (Fundo escuro semitransparente) */}
      <div
        onClick={onFechar} // Permite fechar a janela ao clicar na área externa
        style={{
          position: "fixed",
          inset: 0, // Atalho CSS para top: 0, right: 0, bottom: 0, left: 0 (cobre a tela inteira)
          backgroundColor: "rgba(0,0,0,0.45)", // Escurece o fundo suavemente
          zIndex: 1040, // z-index padrão de backdrop do Bootstrap
        }}
      />

      {/* Container de posicionamento centralizado */}
      <div
        role="dialog" // Atributo de acessibilidade: identifica o elemento como diálogo para leitores de tela
        aria-modal="true" // Informa que o conteúdo fora do diálogo está inativo
        aria-labelledby="modal-titulo" // Conecta este diálogo ao elemento de título para leitura acessível
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1050, // Fica sobreposto ao backdrop (1040)
          display: "flex",
          alignItems: "center",     // Centraliza verticalmente na tela
          justifyContent: "center",  // Centraliza horizontalmente na tela
          padding: "1rem",          // Garante margem de respiro em telas de celular
        }}
      >
        {/* Caixa branca do Modal (Card flutuante) */}
        <div
          className="bg-white rounded-3 shadow-lg d-flex flex-column"
          style={{ width: "100%", maxWidth: maxWidths[tamanho] }} // Aplica largura máxima dinâmica
        >
          {/* Cabeçalho */}
          <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom">
            {/* O ID bate com o aria-labelledby do diálogo pai */}
            <h5 id="modal-titulo" className="mb-0 fw-bold text-dark">
              {titulo}
            </h5>
            {/* Botão de fechar nativo do Bootstrap ('X') */}
            <button
              type="button"
              className="btn-close"
              aria-label="Fechar"
              onClick={onFechar}
            />
          </div>

          {/* Área de conteúdo dinâmico (Children) */}
          <div 
            className="overflow-auto" // Adiciona barra de rolagem se o conteúdo ultrapassar o limite
            style={{ maxHeight: "80vh" }} // Trava a altura em no máximo 80% da altura da janela de visualização (viewport)
          >
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body // Injeta o fragmento no fim de <body>
  );
};

export default Modal;