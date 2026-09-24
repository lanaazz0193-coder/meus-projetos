import { useState } from "react";
import CardSkeleton from "./CardSkeleton";

/**
 * Componente de Card adaptado para receber dados do banco de dados (via API).
 *
 * Suporta:
 *   - Prop `projeto` (objeto vindo do banco ou service)
 *   - Ou propriedades individuais (`title`, `text`, `imageSrc`, `link`, `tech`)
 *   - Estado de carregando via prop `loading={true}` ou `status="carregando"`
 *   - Estado de erro via prop `status="erro"`
 *   - Fallback elegante para imagens indisponíveis
 *   - Badges dinâmicas para qualquer número de tecnologias
 *   - Ações opcionais de edição/exclusão (onEditar, onExcluir)
 */
const Card = ({
  projeto,
  title,
  text,
  imageSrc,
  imageAlt,
  link,
  linkUrl,
  linkText,
  tech,
  tecnologias,
  loading = false,
  status = "sucesso",
  errorMessage,
  onRetry,
  onEditar,
  onExcluir,
}) => {
  const [imgError, setImgError] = useState(false);

  // Estado 1: Carregando
  if (loading || status === "carregando") {
    return <CardSkeleton />;
  }

  // Estado 2: Erro no card individual
  if (status === "erro") {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="project-card-secondary h-100 rounded-4 overflow-hidden p-4 d-flex flex-column justify-content-center align-items-center text-center border-danger">
          <i
            className="bi bi-exclamation-triangle-fill text-danger mb-3"
            style={{ fontSize: "2rem" }}
          />
          <h6 className="fw-bold f-white mb-2">Erro ao carregar card</h6>
          <p className="small text-muted mb-3">
            {errorMessage || "Não foi possível carregar os dados deste projeto."}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="btn btn-sm btn-outline-danger px-3 rounded-1"
            >
              Tentar novamente
            </button>
          )}
        </div>
      </div>
    );
  }

  // Estado 3: Sucesso — Processa os dados do banco de dados
  const proj = projeto || {};

  const cardTitle =
    proj.title ?? proj.titulo ?? title ?? "Projeto sem título";
  const cardText =
    proj.text ??
    proj.descricao ??
    text ??
    "Sem descrição cadastrada para este projeto.";
  const cardImage =
    proj.imageSrc ?? proj.imagem ?? imageSrc ?? "";
  const cardLink =
    proj.linkUrl ?? proj.link ?? link ?? linkUrl ?? "#";
  const cardLinkText =
    proj.linkText ?? linkText ?? "Detalhes";
  const cardAlt =
    imageAlt || `Capa do projeto ${cardTitle}`;

  // Processamento seguro das tecnologias
  let techList = [];
  const rawTech = proj.tech ?? proj.tecnologias ?? tech ?? tecnologias;

  if (Array.isArray(rawTech)) {
    techList = rawTech;
  } else if (typeof rawTech === "string") {
    const trimmed = rawTech.trim();
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed);
        techList = Array.isArray(parsed) ? parsed : [String(parsed)];
      } catch {
        techList = trimmed
          .replace(/[\[\]"]/g, "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);
      }
    } else if (trimmed) {
      techList = trimmed
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }
  }

  const hasImage = Boolean(cardImage && !imgError);

  return (
    <div className="col-md-6 col-lg-4">
      <div className="project-card-secondary h-100 rounded-4 overflow-hidden position-relative">
        {/* Ações administrativas opcionais (hover) */}
        {(onEditar || onExcluir) && (
          <div className="project-admin-actions">
            {onEditar && (
              <button
                type="button"
                className="project-admin-btn"
                title="Editar projeto"
                onClick={() => onEditar(proj)}
              >
                <i className="bi bi-pencil" />
              </button>
            )}
            {onExcluir && (
              <button
                type="button"
                className="project-admin-btn project-admin-btn-delete"
                title="Excluir projeto"
                onClick={() => onExcluir(proj)}
              >
                <i className="bi bi-trash" />
              </button>
            )}
          </div>
        )}

        {/* Imagem do Card com fallback */}
        <div className="project-img-wrapper" style={{ minHeight: "200px" }}>
          {hasImage ? (
            <img
              src={cardImage}
              className="project-img-custom"
              alt={cardAlt}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="project-img-placeholder d-flex flex-column align-items-center justify-content-center h-100 p-4 text-center">
              <i
                className="bi bi-code-slash text-secondary opacity-50 mb-2"
                style={{ fontSize: "2.5rem" }}
              />
              <span className="small text-secondary fw-semibold">
                {cardTitle}
              </span>
            </div>
          )}
        </div>

        {/* Informações do Card */}
        <div className="p-4 d-flex flex-column flex-grow-1">
          <h5 className="fw-bold mb-2 f-white fs-4">{cardTitle}</h5>
          <p className="small mb-4 f-lightgray flex-grow-1">{cardText}</p>

          {/* Badges de Tecnologias dinâmicas */}
          {techList.length > 0 && (
            <div className="d-flex flex-wrap gap-2 mb-4">
              {techList.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="badge badge-project rounded-1 px-2 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Link externo ou interno */}
          <div>
            <a
              href={cardLink}
              className="link-project-custom"
              target={cardLink.startsWith("http") ? "_blank" : undefined}
              rel={cardLink.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {cardLinkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.Skeleton = CardSkeleton;

export { CardSkeleton };
export default Card;