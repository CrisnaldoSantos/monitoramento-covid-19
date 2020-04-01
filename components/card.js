import React from 'react';

const Card = (props) => (
<div className="card shadow" >
  <div className="card-body text-center p-2">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-subtitle text-muted">{props.subtitulo}</p>
  </div>
</div>
)

export default Card;