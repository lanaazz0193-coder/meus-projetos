const Card = ({
  title = "Título do Projeto",
  text = "Descrição genérica do projeto. Aqui você pode explicar o objetivo, a lógica e o que foi desenvolvido.",
  imageSrc = "https://via.placeholder.com/400x200", // Imagem genérica de placeholder
  imageAlt = "Imagem de capa do projeto",
  link = "#",
  tech = ["HTML", "CSS"]
}) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="project-card-secondary h-100 rounded-4 overflow-hidden">
        <div className="project-img-wrapper" style={{ minHeight: '200px' }}>
          <img src={imageSrc} className="project-img-custom" alt={imageAlt} />
        </div>
        <div className="p-4 d-flex flex-column flex-grow-1">
          <h5 className="fw-bold mb-2 f-white fs-4">{title}</h5>
          <p className="small mb-4 f-lightgray flex-grow-1">{text}</p>

            <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge badge-project rounded-1 px-2 py-1">{tech}</span>
                <span className="badge badge-project rounded-1 px-2 py-1">{tech}</span>
            </div>
          
          <a href={link} className="link-project-custom" target="_blank" rel="noopener noreferrer">
            Detalhes
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;