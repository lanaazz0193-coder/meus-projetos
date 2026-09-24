import { useEffect, useState } from "react";
import Modal from "./Modal";

const CAMPOS_VAZIOS = {
  titulo: "",
  descricao: "",
  imagem: "",
  link: "",
  tecnologias: "",
};

/**
 * Modal de criação e edição de projeto do portfólio.
 * Segue o mesmo padrão do LivroModal/ProjetoModal, mas com estilo dark do portfólio.
 *
 * Props:
 *   aberto      — boolean
 *   onFechar    — callback ao fechar sem salvar
 *   onSalvar    — async callback(dados)
 *   projeto     — objeto projeto para edição (null = criação)
 *   carregando  — boolean
 *   erroApi     — string | null
 */
const PortfolioProjetoModal = ({ aberto, onFechar, onSalvar, projeto, carregando, erroApi }) => {
  const [form, setForm] = useState(CAMPOS_VAZIOS);
  const [erros, setErros] = useState({});

  // Preenche o form ao abrir em modo edição
  // A Resource retorna: title, text, imageSrc, linkUrl, tech (array)
  useEffect(() => {
    if (projeto) {
      const techStr = Array.isArray(projeto.tech)
        ? projeto.tech.join(", ")
        : (projeto.tecnologias ?? "");

      setForm({
        titulo:      projeto.title    ?? projeto.titulo    ?? "",
        descricao:   projeto.text     ?? projeto.descricao ?? "",
        imagem:      projeto.imageSrc ?? projeto.imagem    ?? "",
        link:        projeto.linkUrl  ?? projeto.link      ?? "",
        tecnologias: techStr,
      });
    } else {
      setForm(CAMPOS_VAZIOS);
    }
    setErros({});
  }, [projeto, aberto]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErros((prev) => ({ ...prev, [name]: undefined }));
  }

  function validar() {
    const novosErros = {};
    if (!form.titulo.trim())    novosErros.titulo    = "Título é obrigatório.";
    if (!form.descricao.trim()) novosErros.descricao = "Descrição é obrigatória.";
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!validar()) return;
    onSalvar(form);
  }

  const modoEdicao = Boolean(projeto);

  return (
    <Modal
      aberto={aberto}
      onFechar={onFechar}
      titulo={modoEdicao ? "Editar projeto" : "Adicionar projeto ao portfólio"}
      tamanho="lg"
    >
      <form onSubmit={onSubmit} noValidate>
        <div className="p-4 d-flex flex-column gap-3">

          {erroApi && (
            <div className="alert alert-danger py-2 small mb-0">{erroApi}</div>
          )}

          {/* Título */}
          <div>
            <label htmlFor="port-titulo" className="form-label fw-semibold small">
              Título <span className="text-danger">*</span>
            </label>
            <input
              id="port-titulo"
              name="titulo"
              type="text"
              className={`form-control ${erros.titulo ? "is-invalid" : ""}`}
              value={form.titulo}
              onChange={onChange}
              placeholder="Ex: Litera — Sistema de Biblioteca"
              autoFocus
              disabled={carregando}
            />
            {erros.titulo && <div className="invalid-feedback">{erros.titulo}</div>}
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="port-descricao" className="form-label fw-semibold small">
              Descrição <span className="text-danger">*</span>
            </label>
            <textarea
              id="port-descricao"
              name="descricao"
              rows={3}
              className={`form-control ${erros.descricao ? "is-invalid" : ""}`}
              value={form.descricao}
              onChange={onChange}
              placeholder="Descreva o projeto de forma resumida..."
              disabled={carregando}
            />
            {erros.descricao && <div className="invalid-feedback">{erros.descricao}</div>}
          </div>

          {/* Link + Imagem */}
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="port-link" className="form-label fw-semibold small">
                Link do projeto
              </label>
              <input
                id="port-link"
                name="link"
                type="url"
                className="form-control"
                value={form.link}
                onChange={onChange}
                placeholder="https://github.com/..."
                disabled={carregando}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="port-imagem" className="form-label fw-semibold small">
                URL da imagem de capa
              </label>
              <input
                id="port-imagem"
                name="imagem"
                type="url"
                className="form-control"
                value={form.imagem}
                onChange={onChange}
                placeholder="https://..."
                disabled={carregando}
              />
            </div>
          </div>

          {/* Tecnologias */}
          <div>
            <label htmlFor="port-tecnologias" className="form-label fw-semibold small">
              Tecnologias
              <span className="text-muted fw-normal ms-1">(separadas por vírgula)</span>
            </label>
            <input
              id="port-tecnologias"
              name="tecnologias"
              type="text"
              className="form-control"
              value={form.tecnologias}
              onChange={onChange}
              placeholder="Ex: React, Laravel, MySQL"
              disabled={carregando}
            />
          </div>

          {/* Preview da imagem */}
          {form.imagem && (
            <div>
              <p className="form-label fw-semibold small mb-2">Preview da imagem</p>
              <img
                src={form.imagem}
                alt="Preview"
                className="rounded"
                style={{ maxHeight: "140px", objectFit: "cover", width: "100%" }}
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-top d-flex gap-2 justify-content-end">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onFechar}
            disabled={carregando}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn btn-dark px-4"
            disabled={carregando}
          >
            {carregando ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" />
                {modoEdicao ? "Salvando..." : "Adicionando..."}
              </>
            ) : modoEdicao ? (
              "Salvar alterações"
            ) : (
              "Adicionar ao portfólio"
            )}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default PortfolioProjetoModal;
