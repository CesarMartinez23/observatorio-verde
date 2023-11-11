<script setup>
import ItemCounter from "./ItemCounter.vue";
</script>

<template>
  <section class="section-ugb-verde">
    <div class="container">
      <div class="d-flex justify-content-center text-center">
        <div class="contenedor">
          <h1 class="section-title">UGB Verde</h1>
          <p class="subtitulo">Pequeñas acciones, grandes cambios</p>
        </div>
      </div>
    </div>
  </section>

  <section class="custom-container">
    <div class="container hero">
      <div class="row">
        <div class="col-lg-6 d-flex justify-content-center flex-column py-3">
          <div class="section-icon">
            <i class="bi bi-layers-fill"></i>
          </div>
          <p class="mini-section-title">Orígenes</p>
          <h1 class="section-title">Sobre el proyecto</h1>
          <p class="content-description">
            El 23 de abril del 2016 iniciamos nuestro proyecto UGB Verde, se
            encarga de fomentar las buenas prácticas ambientales y expandirlas
            en la zona oriental. El proyecto UGB Verde consiste en preservar la
            naturaleza garantizando una calidad de vida a nuestra comunidad UGB,
            implementando pequeñas acciones que generen grandes cambios.
          </p>
        </div>
        <div class="col-lg-6 d-flex justify-content-center">
          <img src="/img/ugbVerdeImages/mano.jpg" class="content-img" />
        </div>
      </div>
    </div>
  </section>

  <section
    class="wow fadeIn animated ack"
    style="visibility: visible; animation-name: fadeIn"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center flex-column py-3">
          <div class="col-lg-12 d-flex justify-content-center flex-column py-3">
            <div class="section-icon">
              <i class="bi bi-layers-fill"></i>
            </div>
            <p class="mini-section-title">Logros</p>
            <h1 class="section-title">Datos relevantes</h1>
          </div>
          <div class="row">
            <ItemCounter
              number="43"
              description="Estaciones de reciclaje distribuidas en todo el campus"
            >
              <template v-slot:icon>
                <i class="bi bi-recycle medium-icon"></i>
              </template>
            </ItemCounter>

            <ItemCounter
              number="4"
              description="Paneles policristalinos en el parqueo"
            >
              <template v-slot:icon>
                <!-- Cars -->
                <i class="bi bi-car-front-fill medium-icon"></i>
              </template>
            </ItemCounter>

            <ItemCounter
              number="108"
              description="Paneles policristalinos en el edificio Gerardo Barrios"
            >
              <template v-slot:icon>
                <i class="bi bi-building-fill-check medium-icon"></i>
              </template>
            </ItemCounter>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="custom-container">
    <div class="container">
      <p class="content-description">
        La Universidad Gerardo Barrios a través de la ejecución de proyectos en
        el Campus San Miguel y UGB Verde ha realizado diversidad de proyectos en
        los que se ha contribuido al medio ambiente de la manera siguiente:
      </p>

      <div class="row">
        <div class="col-lg-3 d-flex justify-content-center flex-column py-3">
          <div class="card-wrap1">
            <div class="card-header1 four"></div>
            <div class="card-content1">
              <p class="card-text1">
                Desde el año 2015, la UGB ha dejado de emitir 40 kg de CO2,
                equivalente a 1,030 árboles absorbiendo CO2. Esto se compara con
                un volumen de 20 veces el edificio de Biblioteca UGB campus San
                Miguel.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-flex justify-content-center flex-column py-3">
          <div class="card-wrap1">
            <div class="card-header1 four"></div>
            <div class="card-content1">
              <p class="card-text1">
                Se reciclaron 16,537.10 kg de lata, plástico, papel y hierro,
                esto es equivalente al peso de microbuses tipo coaster.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 d-flex justify-content-center flex-column py-3">
          <div class="card-wrap1">
            <div class="card-header1 four"></div>
            <i class="fas fa-code"></i>
            <div class="card-content1">
              <p class="card-text1">
                Las bolsas de plástico que se dejaron de utilizar equivalen a
                cubrir 13 veces con ese plástico la Avenida Roosevelt de San
                Miguel ó Cubrir 2 veces el camino desde San Miguel hasta San
                Francisco Gotera o Cubrir 2.5 veces el estadio de futbol más
                grande de Europa con capacidad de 99,354 personas.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-flex justify-content-center flex-column py-3">
          <div class="card-wrap1">
            <div class="card-header1 four">
              <i class="fas fa-code"></i>
            </div>
            <div class="card-content1">
              <p class="card-text1">
                1,142 metros cuadrados de tierra reforestada, es decir, 4,000
                árboles aproximadamente sembrados en Campus Salitre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
i {
  display: block;
  margin: 0 0 10px;
}
.section-ugb-verde {
  background-image: url(/img/ugbVerdeImages/portadaUgbVerde.jpg);
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
}
.contenedor {
  background-color: #ffffffd9;
  padding: 32px;
  width: 1000px;
  border-radius: 5px;
  box-shadow: 12px 10px 26px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8f5e9;
}

.subtitulo {
  font-size: var(--h2);
  color: var(--black);
}

.content-img {
  width: 75%;
  height: 100%;
  box-shadow: 12px 10px 26px rgba(0, 0, 0, 0.08);
}

.container {
  margin-top: 100px;
}

.ack {
  background-color: var(--f4);
}

body {
  font-family: "Roboto", sans-serif;
  background: linear-gradient(to right, #8e9eab, #eef2f3);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.card-wrap1 {
  width: 100%;
  background: #fff;
  border: 1px solid #fff;
  overflow: hidden;
  color: var(--color-text);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.card-wrap1:hover {
  transform: scale(1.1);
}

.card-header1 {
  height: 5px;
  width: 100%;
  display: grid;
  place-items: center;
}

.card-header1 i {
  color: var(--green-900);
  font-size: 72px;
}

.card-content1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

.card-text1 {
  text-align: justify;
  font-size: 1em;
  margin: 20px;
  margin-top: 20px;
  font-family: var(--font);
  height: 300px;
}

.card-header1.four {
  background: linear-gradient(
    to bottom left,
    var(--card4-gradient-color1),
    var(--card4-gradient-color2)
  );
}

@media (max-width: 768px) {
  .subtitulo {
    font-size: 24px;
  }

  .content-img {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 576px) {
  .subtitulo {
    font-size: 19px;
  }

  .content-img {
    width: 100%;
    height: 100%;
  }

  .hero {
    padding: 32px;
  }

  .container {
    padding: 0px 32px;
  }
}

@media (max-width: 375px) {
  .subtitulo {
    font-size: 19px;
  }

  .content-img {
    width: 100%;
    height: 100%;
  }
}
</style>
