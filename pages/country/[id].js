import React from 'react';
import {useRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import NavBar from '../../components/navbar';
import Head from 'next/head';
import Card from '../../components/card';

const Country = (country)=>{
    const router = useRouter();

    function returnPage(){
        router.push('/countries');
    }

return(
<>
  <NavBar act1="" act2="active" act3=""/>
  <div className="container py-2">
    <Head>
      <title>Moni. Covid-19 | {router.query.id}</title>
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
        {country.country}
      </h1>

    <div className="row align-items-center justify-content-center mt-5">
        <div className="col-sm-12 col-md-12 mb-3">
          <h3 className="text-center">{country.cases} casos</h3>
        </div>
    </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 col-md-4 mb-3">
          <Card titulo="Casos ativos" subtitulo={country.active}/>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <Card titulo="Casos Recuperados:" subtitulo={country.recovered}/>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <Card titulo="Óbitos:" subtitulo={country.deaths}/>
        </div>
    </div>

      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 col-md-4 mb-3">
          <Card titulo="Casos críticos" subtitulo={country.critical}/>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <Card titulo="Novos casos hoje:" subtitulo={country.todayCases}/>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <Card titulo="Óbitos hoje:" subtitulo={country.todayDeaths}/>
        </div>
    </div>
    <div className="row align-items-center justify-content-center">
        <div className="text-center col-sm-12 col-md-4 col-lg-12 mb-5 mt-4">
          <button onClick={returnPage} className="btn btn-dark md-btn-block">Voltar</button>
        </div>
    </div>

    </main>
  </div>
  <footer className="fixed-bottom text-center bg-dark text-light mt-4">
      Crisnaldo Carvalho Santos © 2020
  </footer>
</>
);}



Country.getInitialProps = async (context) => {
    const res = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${context.query.id}`)
    const country = await res.json()
    console.log(country)
    return country;
}

export default Country;