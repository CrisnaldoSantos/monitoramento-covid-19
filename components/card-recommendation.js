import React from 'react';
import Link from 'next/link';

const RecommendationItem = (props) => (
<div className="card rounded border-white" >
  <div className="card-body text-center p-2">
    <img src={props.img} alt={props.alt} className="img-fluid w-50" style={{width:'200px'}}/>
    <p className="card-subtitle text-muted mt-2">{props.description}</p>
  </div>
</div>
)

export default RecommendationItem;