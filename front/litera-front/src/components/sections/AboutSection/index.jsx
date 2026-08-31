const About = () => {
  return (
    <section 
      className="position-relative d-flex align-items-center py-5"
    >
      <div className="position-absolute top-0 start-0 w-100 h-100"><img  src="" alt="" className="position-absolute top-0 start-0 w-100 h-100"/></div>

      <div className="container position-relative z-1 py-5">
        
        <div className="bg-dark p-4 p-md-5 shadow-lg mx-auto">
          
          <div className="row align-items-center">

            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="position-relative bg-light">
                <img src="" alt="" className="img-fluid w-100 shadow-sm" style={{ objectFit: 'cover', minHeight: '450px' }} 
                />
              </div>
            </div>

            <div className="col-lg-7 px-lg-5">
              
              <div className="d-flex align-items-center mb-4">
                <span  className="text-uppercase text-light small fw-bold">Sobre a Plataforma</span>
              </div>

              <h2 className="display-6 fw-light mb-4 text-light">"A leitura deve ser uma jornada documentada, e não apenas lembranças soltas na memória."</h2>

             
              <p className="text-light lh-lg mb-4">Nascido da necessidade de organizar o caos maravilhoso que é a vida de um leitor assíduo. Diferente de planilhas complexas ou anotações perdidas em cadernos, este projeto foi criado para ser o seu diário literário definitivo.</p>

              <p className="text-light lh-lg">Aqui, cada livro conta para a sua história. Catalogue as obras que passaram pelas suas mãos, escreva resenhas detalhadas para não esquecer suas impressões e acompanhe estatísticas ricas que mostram exatamente como o seu gosto e ritmo de leitura evoluem ano após ano.</p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;