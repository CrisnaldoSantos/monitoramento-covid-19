import React from 'react'
import RecommendationItem from '../components/card-recommendation';
import NavBar from '../components/navbar';
import Head from 'next/head'
import img1 from '../assets/img1-maos.png';
import img2 from '../assets/img2-tosse.png';
import img3 from '../assets/img3-pessoas.png';
import img4 from '../assets/img4-janela.png';
import img5 from '../assets/img5-objetos.png';


const Recommendations = ()=>{
    return(
<>
  <NavBar act1="" act2="" act3="active"/>
  <div className="container py-2">
    <Head>
      <title>Covid-19</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
    </Head>
    
    <main>
      <h1 className="text-center mt-5">
        Recomendações para prevenir o contágio
      </h1>
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-sm-12 col-md-4 mb-3">
          <RecommendationItem img={img1} alt="Lavar as mãos" description="Lave as mãos com água e sabão ou use álcool em gel." />
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <RecommendationItem img={img2} alt="Tosse" description="Cubra o nariz e boca ao espirrar ou tossir." />
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <RecommendationItem img={img3} alt="Aglomeração" description="Evite aglomerações se estiver doente." />
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <RecommendationItem img={img4} alt="Ambiente Ventilado" description="Mantenha os ambientes bem ventilados." />  
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <RecommendationItem img={img5} alt="Objetos Pessoais" description="Não compartilhe objetos pessoais." />  
        </div>
      </div>
      <div className="text-center mt-3 pb-3">
        <p>Fonte: <a href="https://coronavirus.saude.gov.br/">https://coronavirus.saude.gov.br/</a></p>
      </div>

    </main>
  </div>
  <footer className="fixed-bottom text-center bg-dark text-light mt-4">
      Crisnaldo Carvalho Santos © 2020
  </footer>
</>
);}





export default Recommendations;