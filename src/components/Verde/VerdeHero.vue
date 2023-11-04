<script setup></script>
<template>
  <section class="section-ugb-verde">
    <div class="container">
      <div class="d-flex justify-content-center text-center">
        <div class="contenedor">
          <h1 class="titulo">UGB Verde</h1>
          <p class="subtitulo">Pequeñas acciones, grandes cambios</p>
        </div>
      </div>
    </div>
  </section>
  <section class="origenes">
    <div class="container hero">
      <div class="row">
        <div class="col-lg-6 d-flex justify-content-center flex-column py-3">
          <h2 class="text-title">Origenes del Proyecto</h2>
          <p class="sub-title">
            El 23 de abril del 2016 iniciamos nuestro proyecto UGB Verde, se
            encarga de fomentar las buenas prácticas ambientales y expandirlas
            en la zona oriental. El proyecto UGB Verde consiste en preservar la
            naturaleza garantizando una calidad de vida a nuestra comunidad UGB,
            implementando pequeñas acciones que generen grandes cambios.
          </p>
        </div>
        <div class="col-lg-6 d-flex justify-content-center">
          <img src="/img/ugbVerde/mano.jpg" class="content-img" />
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container py-5">
      <h1 class="titulo text-center py-4">Logros</h1>
      <div class="row my-5">
        <div
          class="col-lg-6 d-flex justify-content-center flex-column py-5 my-5 box-shadow"
        >
          <div class="secion-icon text-center">
            <i class="bi bi-recycle"></i>
          </div>
          <h2 class="text-title text-center">Reciclaje</h2>
          <p class="sub-title">
            En UGB San Miguel contamos con 43 estaciones de reciclaje
            distribuidas en todo el campus.
          </p>
        </div>
        <div class="col-lg-6 d-flex justify-content-center my-4">
          <img src="/img/ugbVerde/basureros.jpg" class="content-img" />
        </div>
      </div>
      <div class="row my-4">
        <div
          class="col-lg-6 d-flex justify-content-center flex-column py-3 my-4 box-shadow"
        >
          <div class="secion-icon text-center">
            <i class="bi bi-lightbulb-fill"></i>
          </div>
          <h2 class="text-title text-center">Energía Limpia</h2>
          <p class="sub-title">
            Se han construido dos plantas generadoras de energía solar, en el
            parqueo se instalaron 44 paneles policristalinos, en el edificio
            Gerardo Barrios 108 paneles policristalinos, no contaminando el
            medio ambiente.
          </p>
        </div>
        <div class="col-lg-6 d-flex justify-content-center my-4">
          <img src="/img/ugbVerde/paneles.jpg" class="content-img" />
        </div>
      </div>
    </div>
  </section>
  <section class="origenes">
    <div class="container py-5">
      <p class="sub-title">
        La Universidad Gerardo Barrios a través de la ejecución de proyectos en
        el Campus San Miguel y UGB Verde ha realizado diversidad de proyectos en
        los que se ha contribuido al medio ambiente de la manera siguiente:
      </p>
      <div class="row">
        <div class="col-md-3 barra">
          <div class="parrafo">
            <div class="secion-icon text-center py-3">
              <i class="bi bi-check-all"></i>
            </div>
            <p class="sub-title">
              Desde el año 2015, la UGB ha dejado de emitir 40 kg de CO2,
              equivalente a 1,030 árboles absorbiendo CO2. Esto se compara con
              un volumen de 20 veces el edificio de Biblioteca UGB campus San
              Miguel.
            </p>
          </div>
        </div>
        <div class="col-md-3 barra">
          <div class="parrafo">
            <div class="secion-icon text-center py-3">
              <i class="bi bi-check-all"></i>
            </div>
            <p class="sub-title">
              Se reciclaron 16,537.10 kg de lata, plástico, papel y hierro, esto
              es equivalente al peso de microbuses tipo coaster.
            </p>
          </div>
        </div>
        <div class="col-md-3 barra">
          <div class="parrafo">
            <div class="secion-icon text-center py-3">
              <i class="bi bi-check-all"></i>
            </div>
            <p class="sub-title">
              Las bolsas de plástico que se dejaron de utilizar equivalen a
              cubrir 13 veces con ese plástico la Avenida Roosevelt de San
              Miguel ó Cubrir 2 veces el camino desde San Miguel hasta San
              Francisco Gotera o Cubrir 2.5 veces el estadio de futbol más
              grande de Europa con capacidad de 99,354 personas.
            </p>
          </div>
        </div>
        <div class="col-md-3 barra">
          <div class="parrafo">
            <div class="secion-icon text-center py-3">
              <i class="bi bi-check-all"></i>
            </div>
            <p class="sub-title">
              1,142 metros cuadrados de tierra reforestada, es decir, 4,000
              árboles aproximadamente sembrados en Campus Salitre.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Seccion de logros -->
</template>
<style scoped>
.section-ugb-verde {
  background-image: url(/img/ugbVerde/heroTitle.png);
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
}
.contenedor {
  background-color: #ffffffd9;
  padding: 2rem;
  width: 1000px;
  border-radius: 5px;
  box-shadow: 12px 10px 26px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8f5e9;
}

.hero {
  padding: 4rem 1rem;
  text-align: center;
}
.titulo {
  color: var(--greenB);
  font-size: 3rem;
  font-weight: 700;
  font-family: var(--font);
}
.titulo::before {
  content: "";
  width: 70px;
  height: 3px;
  background: var(--black);
  display: inline-block;
  margin: 0 15px 10px 0;
  border-radius: 5px;
}
.titulo::after {
  content: "";
  width: 70px;
  height: 3px;
  background: var(--black);
  display: inline-block;
  margin: 0 0 10px 15px;
  border-radius: 5px;
}
.subtitulo {
  font-size: 1.8rem;
  color: var(--black);
  margin-top: 0.2rem;
}
.text-title {
  color: var(--black);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  font-family: var(--font);
}
.sub-title {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--gray);
  text-align: justify;
  font-family: var(--font);
  line-height: 30px;
  padding: 0px 0.5rem;
}
.content-img {
  width: 75%;
  height: 100%;
  box-shadow: 12px 10px 26px rgba(0, 0, 0, 0.08);
}
.origenes {
  background-color: #f4f4f4;
}
.box-shadow {
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.2);
  padding: 50px;
}
.secion-icon i {
  font-size: 20px;
  line-height: 1;
  color: var(--greenB);
}
.barra {
  position: relative;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--gray);
  margin-top: 30px;
}
.parrafo {
  padding: 10px 0px 10px 40px;
}

@media (max-width: 768px) {
  .titulo {
    font-size: 2rem;
  }
  .titulo::before {
    width: 50px;
  }
  .titulo::after {
    width: 50px;
  }
  .subtitulo {
    font-size: 1.5rem;
  }
  .text-title {
    font-size: 2rem;
  }
  .sub-title {
    font-size: 1rem;
  }
  .content-img {
    width: 100%;
    height: 100%;
  }
  .box-shadow {
    box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.2);
    padding: 50px;
  }
  .barra {
    position: relative;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: var(--gray);
    margin-top: 30px;
  }
  .parrafo {
    padding: 10px 0px 10px 40px;
  }
}

@media (max-width: 576px) {
  .titulo {
    font-size: 1.5rem;
  }
  .titulo::before {
    width: 50px;
  }
  .titulo::after {
    width: 50px;
  }
  .subtitulo {
    font-size: 1.2rem;
  }
  .text-title {
    font-size: 1.5rem;
  }
  .sub-title {
    font-size: 1rem;
  }
  .content-img {
    width: 100%;
    height: 100%;
  }
  .box-shadow {
    box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.2);
    padding: 50px;
  }
  .barra {
    position: relative;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: var(--gray);
    margin-top: 30px;
  }
  .parrafo {
    padding: 10px 0px 10px 40px;
  }

  .hero {
    padding: 2rem;
  }

  .container {
    padding: 0px 2rem;
  }
}

@media (max-width: 375px) {
  .titulo {
    font-size: 1.5rem;
  }
  .titulo::before {
    width: 50px;
  }
  .titulo::after {
    width: 50px;
  }
  .subtitulo {
    font-size: 1.2rem;
  }
  .text-title {
    font-size: 1.5rem;
  }
  .sub-title {
    font-size: 1rem;
  }
  .content-img {
    width: 100%;
    height: 100%;
  }
  .box-shadow {
    box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.2);
    padding: 50px;
  }
  .barra {
    position: relative;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: var(--gray);
    margin-top: 30px;
  }
  .parrafo {
    padding: 10px 0px 10px 40px;
  }
}
</style>
