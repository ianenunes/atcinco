import React from "react";

export default function Home() {
  return (
    <>
      <header>
        <h1>Agência de Viagens</h1>
        <p>Viaje com a melhor agência de viagem do Brasil.</p>
        <p>Proporcionamos viagens para os melhores destinos para que você e sua família viva momentos inesqueciveis.</p>
        <p>Aproveite nossos pacotes promocionais. </p>


      </header>

      <body>

        <center>
          <div classname="container-fluid">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div data-interval="1000" className="carousel-item active">

                  <img className="w-75 ml-5" src="https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=2&" alt="Primeiro Slide" />
                </div>

                <div className="carousel-item">
                  <img className="w-75 ml-5 " src="https://cdn.pixabay.com/photo/2016/02/12/23/40/salvador-1197085_1280.jpg" alt="Segundo Slide" />
                </div>
                <div className="carousel-item">
                  <img className="w-75 ml-5 " src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&" alt="Terceiro Slide" />
                </div>
              </div>
            </div>
          </div>

        </center>
      </body>
    </>
  );
}