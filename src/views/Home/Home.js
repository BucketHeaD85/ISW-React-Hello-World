import React, { Component } from 'react';

class Home extends Component {
  render(){
    return(
      <div>
        <h1>
          Bienvenidos a mi super pagina web
        </h1>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Nikola_Tesla_by_Sarony_c1885-crop.png/220px-Nikola_Tesla_by_Sarony_c1885-crop.png'
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src='https://historia.nationalgeographic.com.es/medio/2019/07/09/nikola-tesla_b0f93a52_1280x1671.jpeg'
                className="d-block w-100"
                alt="..."
              />            </div>
            <div className="carousel-item">
              <img
                src='https://ep01.epimg.net/internacional/imagenes/2019/08/22/actualidad/1566496330_808295_1566497125_noticia_normal.jpg'
                className="d-block w-100"
                alt="..."
              />            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;