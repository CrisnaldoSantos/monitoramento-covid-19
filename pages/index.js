import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Card from '../components/card'
import NavBar from '../components/navbar';
import MadicalImg from '../assets/medical.png';


const Home = (response) => (
  <>
  <NavBar act1="active" act2="" act3=""/>
  <div className="container py-2">
    <Head>
      <title>Moni. Covid-19 | Home</title>
      <meta name="robots" content="index/follow"/>
      <meta name="description" content="Monitoramento dos impactos do Covid-19 no mundo"/>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
    </Head>
    
    <main>
      <h1 className="text-center mt-5">
        Resumo Global do Covid-19
      </h1>
      <div className="row align-items-center justify-content-center">
        <img src={MadicalImg} alt="medical" className="img-fluid w-50 " style={{width:'300px'}}/>
      </div>

      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 col-md-4 mb-3">
          <Card titulo="Total de casos" subtitulo={response.cases}/>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <Card titulo="Casos Recuperados:" subtitulo={response.recovered}/>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <Card titulo="Óbitos:" subtitulo={response.deaths}/>
        </div>
      </div>
    </main>
  </div>
  <footer className="fixed-bottom text-center bg-dark text-light mt-4">
      Crisnaldo Carvalho Santos © 2020
  </footer>
</>
)

Home.getInitialProps = async () => {
  const res = await fetch('https://coronavirus-19-api.herokuapp.com/all')
  const response = await res.json()
  return response;
}

export default Home
