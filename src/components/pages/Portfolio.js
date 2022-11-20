import React from 'react';
const blue = require ('../../image/blue.jpg');
const chocolate = require ('../../image/chocolate.jpg');
const egg = require ('../../image/egg.jpg');
const green = require ('../../image/green.jpg');
const plain = require ('../../image/plain.jpg');
const puple = require ('../../image/puple.jpg');

const PortfolioArr = [
    {
      id:1,
      name:'Easy Note Taker' ,
      image:blue,
      url: "https://github.com/Kayexie/easy-note-taker"
    },
    {
      id:2,
      name:'Employee Tracker' ,
      image:chocolate,
      url: "https://github.com/Kayexie/employee-tracker"
    },
    {
      id:3,
      name:'Social Network API' ,
      image:egg,
      url: "https://github.com/Kayexie/social-network-API"
    },
    {
      id:4,
      name:'Team Profile Generator' ,
      image:green,
      url: "https://github.com/Kayexie/team-profile-generator"
    },
    {
      id:5,
      name:'Weather Report' ,
      image:plain,
      url: "https://github.com/Kayexie/city-weather-report"
    },
    {
      id:6,
      name:'Work Day Planner' ,
      image:puple,
      url: "https://github.com/Kayexie/work-day-planner"
    },

];

export default function Portfolio() {//i already have access to this object array since its in the same page.
  return(
<div class="containerP">
<h1>Portfolio</h1>
<dl className="list-group ">
{PortfolioArr.map((portfolio) => (
  <dd className="list-group-item" key={portfolio.id}>
           <div class="row row-cols-1 row-cols-md-3">
             <div class="col mb-3">
              <div class="card">
                <a target='_blank' rel='noreferrer' href={portfolio.url}> <img src={portfolio.image} class="card-img-top" alt="..."/>  </a>
              <div class="card-body">
                <h5 class="card-title">{portfolio.name}</h5>
              </div>
              </div>
             </div>
           </div>
  </dd>
))}
</dl>
</div>
  )
};