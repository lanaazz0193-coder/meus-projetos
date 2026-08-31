const Gallery = () => {
  return (
    <section className="py-5 bg-white overflow-hidden" id="funcionalidades">
      <div className="container py-5">
        
        <div className="text-center mb-5 pb-4">
          <h2 className="display-5 fw-bold text-dark mb-3">Tudo o que você precisa</h2>
          <p className="text-secondary fs-5 mx-auto" >
            Explore as ferramentas pensadas para tornar sua experiência literária ainda mais completa.
          </p>
        </div>

        <div className="row align-items-center mb-5 pb-5">
          <div className="col-lg-6 position-relative mb-4 mb-lg-0">

            <img 
              src="" 
              alt="" 
              className="img-fluid shadow-lg"
              style={{borderRadius: '2rem 6rem 2rem 1rem', transform: 'rotate(-2deg)'}} 
            />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="d-flex align-items-center mb-3">
              <h3 className="fw-bold mb-0">Estante Virtual</h3>
            </div>
            <p className="text-secondary lh-lg fs-5">
              Separe seus livros entre "Lidos", "Lendo", "Quero Ler" e "Abandonados". Crie prateleiras personalizadas para organizar seu acervo do seu jeito.
            </p>
          </div>
        </div>

        <div className="row align-items-center flex-lg-row-reverse mb-5 pb-5">
          <div className="col-lg-6 position-relative mb-4 mb-lg-0">
            <img 
              src="" 
              alt="" 
              className="img-fluid shadow-lg"
              style={{borderRadius: '2rem 6rem 2rem 1rem', transform: 'rotate(-2deg)'}}
            />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="d-flex align-items-center mb-3">
              <h3 className="fw-bold mb-0">Avalie e Resenhe</h3>
            </div>
            <p className="text-secondary lh-lg fs-5">
              Dê sua nota, marque suas citações favoritas e escreva resenhas. Compartilhe sua opinião com a comunidade ou guarde apenas para você como um diário privado.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 position-relative mb-4 mb-lg-0">
            <img 
              src="" 
              alt="a" 
              className="img-fluid shadow-lg"
              style={{borderRadius: '2rem 6rem 2rem 1rem', transform: 'rotate(-2deg)'}} 
            />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="d-flex align-items-center mb-3">
              <h3 className="fw-bold mb-0">Metas e Estatísticas</h3>
            </div>
            <p className="text-secondary lh-lg fs-5">
              Descubra seu ritmo. Veja gráficos sobre as páginas que você leu no ano, seus gêneros literários mais frequentes e acompanhe o progresso do seu desafio anual.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;