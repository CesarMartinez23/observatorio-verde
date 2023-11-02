<script setup></script>

<template>
  <!-- Seccion Coordinacion  -->
  <section class="section-coordination">
    <div class="container principal">
      <div class="row">
        <div class="col-lg-6 d-flex justify-content-center flex-column py-3">
          <h1 class="text-title">Coordinación</h1>
          <div>
            <p class="title">Responsable del Observatorio</p>
            <h2 class="text-subtitle">
              Mtra. Nurian Yamileth Luna de Quintanilla
            </h2>
          </div>
        </div>
        <div class="col-lg-6 d-flex justify-content-center">
          <img src="/img/contacto/coordinadora.jpg" class="content-img" />
        </div>
      </div>
    </div>
  </section>

  <!-- Seccion forma de contactanos -->
  <section class="section-contact py-5">
    <div class="container text-center">
      <div class="secion-icon">
        <i class="bi bi-layers-fill"></i>
      </div>
      <p class="title">Observatorio verde</p>
      <h1 class="text-title">Formas de Contactarnos</h1>
      <p class="text-content">
        Puedes contactarnos a través de las redes sociales de la Universidad
        Gerardo Barrios.
      </p>
    </div>
  </section>

  <section class="seccion-mapa">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 informacion">
          <div class="contenedor-info">
            <div class="info">
              <div class="info-text">
                <i class="bi bi-geo-alt"></i>
                <p>
                  <strong>UBG Campos San Miguel</strong><br />
                  Calle Las Flores y Avenida Las Magnolias, <br />
                  Avenida Colonia Escalon, San Miguel
                </p>
              </div>
              <div class="info-text">
                <i class="bi bi-geo-alt"></i>
                <p>
                  <strong>UBG Campos Salitre</strong><br />
                  Calle Antigua a Quelepa, Caserío El Salitre, San Miguel.
                  <br />
                  Entrada contigua a Centro Escolar el Salitre
                </p>
              </div>
              <div class="info-text">
                <i class="bi bi-envelope-fill"></i>
                <p>observatorio@ugb.edu.sv</p>
              </div>
              <div class="info-text">
                <i class="bi bi-telephone-fill"></i>
                <p>
                  +503 2645 – 6585 <br />
                  +503 7743 – 4301
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 justify-content-center align-items-center">
          <div class="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.758631478354!2d-88.19462332573701!3d13.488965303326193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7b2a58d2095515%3A0xfb0914d1181e605f!2sUniversidad%20Gerardo%20Barrios!5e0!3m2!1ses-419!2ssv!4v1688014473014!5m2!1ses-419!2ssv"
              width="750"
              height="750"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.map-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 100%;
}

.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

.section-coordination {
  background-image: url(/img/contacto/background.svg);
  background-size: cover;
  background-position: center;
}
.text-title {
  color: var(--black);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  font-family: var(--font);
}
.text-subtitle {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--black);
  letter-spacing: var(--letter-spacing);
  margin-top: 0.2rem;
  color: var(--greenB);
}
.content-img {
  max-width: 75%;
  height: auto;
  box-shadow: 12px 10px 26px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8f5e9;
}

.section-contact {
  background-color: var(--white);
}
.text-content {
  font-size: 20px;
  color: var(--gray);
  letter-spacing: var(--letter-spacing2);
  font-family: var(--font);
  text-align: center;
}
.seccion-mapa {
  background: var(--white);
  margin-bottom: 5rem;
}
.contenedor-info {
  padding: 50px;
  background: var(--white);
  box-shadow: 12px 10px 26px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8f5e9;
  height: 100%;
}

.info-text {
  display: flex;
}
.info i {
  font-size: 32px;
  line-height: 1;
  color: var(--greenB);
}

.info p {
  padding: 0 0 10px 42px;
  line-height: 30px;
  font-size: 1rem;
  font-family: var(--font);
  color: var(--gray);
}

.info p strong {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--black);
  letter-spacing: var(--letter-spacing);
  margin-top: 0.5rem;
  margin: 0;
}

.principal {
  padding: 4rem 1rem;
  text-align: center;
}

@media (max-width: 992px) {
  .text-title {
    font-size: 2.5rem;
  }
  .text-subtitle {
    font-size: 1.5rem;
  }
  .content-img {
    max-width: 100%;
  }
  .text-content {
    font-size: 18px;
  }
  .info p {
    padding: 0 0 10px 42px;
    line-height: 30px;
    font-size: 0.8rem;
  }
  .info i {
    font-size: 28px;
  }

  .row {
    flex-direction: column;
  }

  .principal {
    padding: 2rem 1rem;
  }

  div img {
    margin-top: 1rem;
  }

  .informacion {
    margin-bottom: 3rem;
  }
}

@media (max-width: 768px) {
  .text-title {
    font-size: 2.5rem;
  }
  .text-subtitle {
    font-size: 1.5rem;
  }
  .content-img {
    max-width: 100%;
  }
  .text-content {
    font-size: 18px;
  }
  .info p {
    padding: 0 0 10px 42px;
    line-height: 30px;
    font-size: 0.8rem;
  }
  .info i {
    font-size: 28px;
  }
}

@media (max-width: 576px) {
  .text-title {
    font-size: 2rem;
  }
  .text-subtitle {
    font-size: 1.2rem;
  }
  .content-img {
    max-width: 100%;
  }
  .text-content {
    font-size: 16px;
  }
  .info p {
    padding: 0 0 10px 42px;
    line-height: 30px;
    font-size: 0.8rem;
  }
  .info i {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .text-title {
    font-size: 1.8rem;
  }
  .text-subtitle {
    font-size: 1rem;
  }
  .content-img {
    max-width: 100%;
  }
  .text-content {
    font-size: 16px;
  }
  .info p {
    padding: 0 0 10px 42px;
    line-height: 30px;
    font-size: 0.8rem;
  }
  .info i {
    font-size: 28px;
  }
}
</style>
