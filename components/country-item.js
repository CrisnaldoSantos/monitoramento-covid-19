import React from 'react';
import Link from 'next/link';

const CountryItem = (props) => (
<div className="card shadow" >
  <div className="card-body text-center p-2">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-subtitle text-muted">Total de casos: {props.subtitulo}</p>
    <Link href={`/country/${props.titulo}`}><a>Ver detalhes</a></Link>
  </div>
</div>
)

export default CountryItem;