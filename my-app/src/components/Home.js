import React from 'react';
import moon from '../images/moon.jpg';
import lava from '../images/lava.jpg';
import underwater from '../images/underwater.jpg';
import phenics from '../images/phenics.jpg';
import unicorn from '../images/unicorn.jpg';
import dragon from '../images/dragon.jpg';
import blueB from '../images/blueB.jpg';
import greenB from '../images/greenB.jpg';
import orangeB from '../images/orangeB.jpg';



export default function Home() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={moon} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Space Realm</h5>
        <p>Starbound Adventures</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src= {lava} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Lava Realm</h5>
        <p>Flame Trails</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={underwater} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Underworld Realm</h5>
        <p>Shadows & Secrets</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="container my-5 d-flex justify-content-center">
        <div className="d-flex gap- flex-wrap justify-content-center gap-5">
          <div className="row my-3" style={{ minWidth:'auto',}}>
          </div>

{/* Card1 */}
<div className="card my-3" style={{width: '18rem'}}>
  <img src={dragon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Dragon Ride</h5>
    <p className="card-text">Soar beyond the stars on the wings of a blazing dragon.</p>
    <a href="https://www.makemytrip.com/holidays-india/3nights-udaipur-tour-packages.html" className="btn btn-primary">Ride on</a>
  </div>
  </div>
{/* Card2 */}
<div className="card my-3" style={{width: '18rem'}}>
  <img src={phenics} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Phoenix Ride</h5>
    <p className="card-text">Rise through fire and ash on the back of an immortal phoenix.</p>
    <a href="https://www.makemytrip.com/holidays-india/3nights-ooty-tour-packages.html" className="btn btn-primary">Ride on</a>
  </div>
</div>
{/* Card3 */}
<div className="card my-3" style={{width: '18rem'}}>
  <img src={unicorn} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Unicorn Ride</h5>
    <p className="card-text">Glide through shadows with the light of a legendary unicorn.</p>
    <a href="https://www.makemytrip.com/holidays-india/6nights-manali-tour-packages.html" className="btn btn-primary">Ride on</a>
  </div>
</div>

<div className="container my-5 d-flex justify-content-center">
        <div className="d-flex gap- flex-wrap justify-content-center gap-5">
          <div className="row my-3" style={{ minWidth:'auto',}}>
          </div>

{/* Card1 */}
<div className="card my-3" style={{width: '18rem'}}>
  <img src={blueB} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">The Blue Beyond</h5>
    <p className="card-text">Cool, calm, and full of cosmic wonders</p>
    <a href="/" className="btn btn-primary">travel guides.</a>
  </div>
  </div>
{/* Card2 */}
<div className="card my-3" style={{width: '18rem'}}>
  <img src={greenB} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">The Emerald Path</h5>
    <p className="card-text">Nature, growth, and fiery jungle secrets.</p>
    <a href="/" className="btn btn-primary">travel guides.</a>
  </div>
</div>
{/* Card3 */}
<div className="card my-3" style={{width: '18rem'}}>
  <img src={orangeB} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">The Amber Flame</h5>
    <p className="card-text">Warm, wild, and glowing with adventure.</p>
    <a href="/" className="btn btn-primary">travel guides.</a>
  </div>
</div>
    </div>
    </div>
    </div>
    </div>
    </div>
  

  )
}
