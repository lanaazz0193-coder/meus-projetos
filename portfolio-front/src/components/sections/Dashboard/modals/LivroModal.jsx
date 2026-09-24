// Importa os hooks essenciais do React:
// - useState: gerencia dados locais (valores dos campos e erros de validação).
// - useEffect: executa efeitos colaterais (preenche o formulário quando o modal abre ou o livro muda).
import { useEffect, useState } from "react";

// Importa o componente base Modal para servir de container visual da janela flutuante
import Modal from "./Modal";

// Objeto constante com a estrutura padrão inicial dos campos em branco.
// Garante consistência ao resetar o formulário após cadastros ou fechamentos.
const CAMPOS_VAZIOS = {
  titulo: "",
  autor: "",
  genero: "",
  editora: "",
  data_lancamento: "",
};

/**
 * Componente modal para Create (Criação) e Update (Edição) do CRUD de livros.
 * Recebe as props:
 * - aberto: boolean que controla a visibilidade do modal.
 * - onFechar: callback disparado ao fechar sem salvar ou ao cancelar.
 * - onSalvar: função assíncrona callback chamada ao submeter o formulário válido (faz o POST ou PUT).
 * - livro: objeto livro se for edição; se for null/undefined, funciona em modo criação.
 * - carregando: boolean que bloqueia botões durante o envio para o backend.
 * - erroApi: string contendo mensagens de erro retornadas pelo servidor/API.
 */
const LivroModal = ({ aberto, onFechar, onSalvar, livro, carregando, erroApi }) => {
  // Estado que guarda os valores digitados nos inputs
  const [form, setForm] = useState(CAMPOS_VAZIOS);

  // Estado que guarda as mensagens de erro de validação de cada campo (ex: { titulo: "Título é obrigatório." })
  const [erros, setErros] = useState({});

  /**
   * Monitora alterações em 'livro' e 'aberto':
   * Toda vez que o modal abre ou o livro selecionado muda, este efeito roda.
   */
  useEffect(() => {
    if (livro) {
      // Se há um livro passado via prop, preenche o form com seus dados (Modo Edição)
      setForm({
        // O operador '??' (Nullish Coalescing) garante string vazia caso o valor venha nulo ou indefinido
        titulo: livro.titulo ?? "",
        autor: livro.autor ?? "",
        genero: livro.genero ?? "",
        editora: livro.editora ?? "",
        // Formata data ISO (ex: "2026-05-12T14:30:00Z") para "YYYY-MM-DD", formato aceito pelo <input type="date" />
        data_lancamento: livro.data_lancamento
          ? livro.data_lancamento.substring(0, 10)
          : "",
      });
    } else {
      // Se 'livro' for nulo, limpa os campos para criar um novo registro (Modo Criação)
      setForm(CAMPOS_VAZIOS);
    }
    // Limpa quaisquer erros visuais remanescentes de aberturas anteriores
    setErros({});
  }, [livro, aberto]);

  /**
   * Manipulador universal para inputs controlados:
   * Atualiza a chave do estado correspondente ao 'name' do input que disparou o evento.
   */
  function onChange(e) {
    const { name, value } = e.target;
    // Atualiza apenas a propriedade modificada, mantendo o restante do objeto intacto
    setForm((prev) => ({ ...prev, [name]: value }));
    // Remove o erro daquele campo específico em tempo real assim que o usuário digita algo
    setErros((prev) => ({ ...prev, [name]: undefined }));
  }

  /**
   * Validação síncrona no front-end antes do envio:
   * .trim() remove espaços em branco no início e fim para impedir preenchimento só com espaços.
   */
  function validar() {
    const novosErros = {};
    if (!form.titulo.trim()) novosErros.titulo = "Título é obrigatório.";
    if (!form.autor.trim()) novosErros.autor = "Autor é obrigatório.";
    if (!form.genero.trim()) novosErros.genero = "Gênero é obrigatório.";
    if (!form.editora.trim()) novosErros.editora = "Editora é obrigatória.";
    if (!form.data_lancamento) novosErros.data_lancamento = "Data de lançamento é obrigatória.";

    setErros(novosErros);
    // Retorna true se o objeto de erros estiver vazio (válido), ou false se houver pendências
    return Object.keys(novosErros).length === 0;
  }

  /**
   * Disparado no envio do formulário:
   */
  function onSubmit(e) {
    // Evita o recarregamento padrão da página pelo navegador
    e.preventDefault();
    // Interrompe a submissão se houver campos obrigatórios vazios
    if (!validar()) return;
    // Se estiver tudo preenchido, repassa os dados limpos ao componente pai
    onSalvar(form);
  }

  // Converte a existência do objeto livro em booleano para definir títulos e textos de botões
  const modoEdicao = Boolean(livro);

  return (
    <Modal
      aberto={aberto}
      onFechar={onFechar}
      titulo={modoEdicao ? "Editar livro" : "Cadastrar novo livro"}
      tamanho="lg" // Modal tamanho grande (Bootstrap modal-lg) para caber formulários confortavelmente
    >
      {/* noValidate desativa os balões nativos do navegador para usar as validações personalizadas do React */}
      <form onSubmit={onSubmit} noValidate>
        {/* Container flexível vertical com espaçamento padrão (gap-3) e padding (p-4) */}
        <div className="p-4 d-flex flex-column gap-3">

          {/* Renderização condicional: exibe o alerta vermelho somente se a API retornar erro */}
          {erroApi && (
            <div className="alert alert-danger py-2 small mb-0">{erroApi}</div>
          )}

          {/* Campo Título */}
          <div>
            <label htmlFor="titulo" className="form-label fw-semibold small">
              Título <span className="text-danger">*</span>
            </label>
            <input
              id="titulo"
              name="titulo"
              type="text"
              // Se houver erro, adiciona a classe 'is-invalid' do Bootstrap que deixa a borda vermelha
              className={`form-control ${erros.titulo ? "is-invalid" : ""}`}
              value={form.titulo}
              onChange={onChange}
              placeholder="Ex: Dom Casmurro"
              autoFocus // Foca automaticamente neste campo assim que o modal é aberto
            />
            {/* Mensagem de erro que aparece logo abaixo do input quando houver falha de validação */}
            {erros.titulo && (
              <div className="invalid-feedback">{erros.titulo}</div>
            )}
          </div>

          {/* Campo Autor */}
          <div>
            <label htmlFor="autor" className="form-label fw-semibold small">
              Autor <span className="text-danger">*</span>
            </label>
            <input
              id="autor"
              name="autor"
              type="text"
              className={`form-control ${erros.autor ? "is-invalid" : ""}`}
              value={form.autor}
              onChange={onChange}
              placeholder="Ex: Machado de Assis"
            />
            {erros.autor && (
              <div className="invalid-feedback">{erros.autor}</div>
            )}
          </div>

          {/* Grid do Bootstrap: Gênero e Editora dispostos lado a lado em telas maiores (col-sm-6) */}
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="genero" className="form-label fw-semibold small">
                Gênero <span className="text-danger">*</span>
              </label>
              <input
                id="genero"
                name="genero"
                type="text"
                className={`form-control ${erros.genero ? "is-invalid" : ""}`}
                value={form.genero}
                onChange={onChange}
                placeholder="Ex: Romance, Ficção..."
              />
              {erros.genero && (
                <div className="invalid-feedback">{erros.genero}</div>
              )}
            </div>
            <div className="col-sm-6">
              <label htmlFor="editora" className="form-label fw-semibold small">
                Editora <span className="text-danger">*</span>
              </label>
              <input
                id="editora"
                name="editora"
                type="text"
                className={`form-control ${erros.editora ? "is-invalid" : ""}`}
                value={form.editora}
                onChange={onChange}
                placeholder="Ex: Companhia das Letras"
              />
              {erros.editora && (
                <div className="invalid-feedback">{erros.editora}</div>
              )}
            </div>
          </div>

          {/* Campo Data de Lançamento */}
          <div className="col-sm-6">
            <label htmlFor="data_lancamento" className="form-label fw-semibold small">
              Data de lançamento <span className="text-danger">*</span>
            </label>
            <input
              id="data_lancamento"
              name="data_lancamento"
              type="date"
              className={`form-control ${erros.data_lancamento ? "is-invalid" : ""}`}
              value={form.data_lancamento}
              onChange={onChange}
            />
            {erros.data_lancamento && (
              <div className="invalid-feedback">{erros.data_lancamento}</div>
            )}
          </div>

        </div>

        {/* Rodapé fixo do modal com borda superior (border-top) e alinhamento à direita */}
        <div className="px-4 py-3 border-top d-flex gap-2 justify-content-end">
          {/* Botão Cancelar: fecha o modal e fica desabilitado durante requisições */}
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onFechar}
            disabled={carregando}
          >
            Cancelar
          </button>

          {/* Botão Submit: dispara o onSubmit do form e muda de estado durante o loading */}
          <button
            type="submit"
            className="btn btn-dark"
            disabled={carregando}
          >
            {carregando ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" />
                {modoEdicao ? "Salvando..." : "Cadastrando..."}
              </>
            ) : modoEdicao ? (
              "Salvar alterações"
            ) : (
              "Cadastrar livro"
            )}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LivroModal;