/**
 * Componente Skeleton para representar o estado de "carregando" (loading)
 * de um card de projeto, com efeito visual de pulsação/shimmer.
 */
const CardSkeleton = () => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="project-card-secondary h-100 rounded-4 overflow-hidden">
        {/* Placeholder de imagem animado */}
        <div
          className="project-img-wrapper d-flex align-items-center justify-content-center"
          style={{ minHeight: "200px", backgroundColor: "#141414" }}
        >
          <div
            className="skeleton-project w-100 h-100 position-absolute top-0 start-0"
            style={{ opacity: 0.35 }}
          />
          <i
            className="bi bi-image text-secondary opacity-25"
            style={{ fontSize: "2.5rem" }}
          />
        </div>

        {/* Conteúdo skeleton */}
        <div className="p-4 d-flex flex-column gap-3 flex-grow-1">
          {/* Título */}
          <div
            className="skeleton-project"
            style={{ height: "1.4rem", width: "70%" }}
          />

          {/* Descrição em 2 linhas */}
          <div className="d-flex flex-column gap-2">
            <div
              className="skeleton-project"
              style={{ height: "0.85rem", width: "100%" }}
            />
            <div
              className="skeleton-project"
              style={{ height: "0.85rem", width: "85%" }}
            />
          </div>

          {/* Badges de tecnologias */}
          <div className="d-flex flex-wrap gap-2 mt-2">
            <div
              className="skeleton-project"
              style={{ height: "1.5rem", width: "65px", borderRadius: "4px" }}
            />
            <div
              className="skeleton-project"
              style={{ height: "1.5rem", width: "55px", borderRadius: "4px" }}
            />
            <div
              className="skeleton-project"
              style={{ height: "1.5rem", width: "75px", borderRadius: "4px" }}
            />
          </div>

          {/* Link / Botão */}
          <div
            className="skeleton-project mt-auto pt-2"
            style={{ height: "1rem", width: "85px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
