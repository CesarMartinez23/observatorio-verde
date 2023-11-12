<script setup>
import ItemCardCounter from "./ItemCardCounter.vue";
import ItemCardInfo from "./ItemCardInfo.vue";
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
    <div class="hero">
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
    <div class="custom-container">
      <div class="row">
        <div class="section-icon">
          <i class="bi bi-layers-fill"></i>
        </div>
        <p class="mini-section-title">Logros</p>
        <h1 class="section-title">Datos relevantes</h1>

        <div class="row">
          <ItemCardCounter
            numberTitle="43"
            description="Estaciones de reciclaje distribuidas en todo el campus."
          >
            <template v-slot:icon>
              <i class="bi bi-recycle medium-icon"></i>
            </template>
          </ItemCardCounter>

          <ItemCardCounter
            numberTitle="4"
            description="Paneles policristalinos en el parqueo."
          >
            <template v-slot:icon>
              <!-- Cars -->
              <i class="bi bi-car-front-fill medium-icon"></i>
            </template>
          </ItemCardCounter>

          <ItemCardCounter
            numberTitle="108"
            description="Paneles policristalinos en el edificio Gerardo Barrios."
          >
            <template v-slot:icon>
              <i class="bi bi-building-fill-check medium-icon"></i>
            </template>
          </ItemCardCounter>
        </div>
      </div>
    </div>
  </section>

  <section class="custom-container">
    <p class="content-description">
      La Universidad Gerardo Barrios a través de la ejecución de proyectos en el
      Campus San Miguel y UGB Verde ha realizado diversidad de proyectos en los
      que se ha contribuido al medio ambiente de la manera siguiente:
    </p>

    <div class="row d-flex">
      <ItemCardInfo
        description="Desde el año 2015, la UGB ha dejado de emitir 40 kg de CO2, equivalente a 1,030 árboles absorbiendo CO2. Esto se compara con un volumen de 20 veces el edificio de Biblioteca UGB campus San Miguel."
      />

      <ItemCardInfo
        description="Se reciclaron 16,537.10 kg de lata, plástico, papel y hierro, esto es equivalente al peso de microbuses tipo coaster."
      />

      <ItemCardInfo
        description="Las bolsas de plástico que se dejaron de utilizar equivalen a
                cubrir 13 veces con ese plástico la Avenida Roosevelt de San
                Miguel ó Cubrir 2 veces el camino desde San Miguel hasta San
                Francisco Gotera o Cubrir 2.5 veces el estadio de futbol más
                grande de Europa con capacidad de 99,354 personas."
      />

      <ItemCardInfo
        description="1,142 metros cuadrados de tierra reforestada, es decir, 4,000 árboles aproximadamente sembrados en Campus Salitre."
      />
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

.ack {
  background-color: var(--f4);
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
