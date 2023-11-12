<script setup></script>

<template>
  <!-- Seccion Coordinacion  -->
  <section class="section-coordination">
    <div class="container principal">
      <div class="row">
        <div class="col-lg-6 d-flex justify-content-center flex-column py-3">
          <h1 class="section-title">Coordinaci&oacute;n</h1>
          <div class="section-icon">
            <i class="bi bi-layers-fill"></i>
          </div>
          <p class="mini-section-title">Responsable del Observatorio</p>
          <div>
            <h2 class="text-subtitle">
              Mtra. Nurian Yamileth Luna de Quintanilla
            </h2>
          </div>
        </div>
        <div class="col-lg-6 d-flex justify-content-center">
          <img src="/img/contactImages/coordinadora.jpg" class="content-img" />
        </div>
      </div>
    </div>
  </section>

  <!-- Seccion forma de contactanos -->
  <section class="section-contact py-5">
    <div class="container text-center">
      <div class="section-icon">
        <i class="bi bi-layers-fill"></i>
      </div>
      <p class="mini-section-title">Contactanos</p>
      <h1 class="section-title">Formas de Contactarnos</h1>
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
                  <strong>UBG Campus San Miguel</strong><br />
                  Calle Las Flores y Avenida Las Magnolias, <br />
                  Avenida Colonia Escalon, San Miguel
                </p>
              </div>
              <div class="info-text">
                <i class="bi bi-geo-alt"></i>
                <p>
                  <strong>UBG Campus Salitre</strong><br />
                  Calle Antigua a Quelepa, Caserío El Salitre, San Miguel.
                  <br />
                  Entrada contigua a Centro Escolar el Salitre
                </p>
              </div>
              <div class="info-text">
                <i class="bi bi-envelope"></i>
                <p>observatorio@ugb.edu.sv</p>
              </div>
              <div class="info-text">
                <i class="bi bi-telephone"></i>
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
  background-image: url(/img/contactImages/background.svg);
  background-size: cover;
  background-position: center;
}

.text-subtitle {
  font-size: 28px;
  font-weight: 700;
  color: var(--black);
  letter-spacing: var(--letter-spacing);
  margin-top: 3px;
  color: var(--green-900);
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
  text-align: center;
}
.seccion-mapa {
  background: var(--white);
  margin-bottom: 80px;
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
  color: var(--green-900);
}

.info p {
  padding: 0 0 10px 42px;
  line-height: 30px;
  font-size: 16px;
  color: var(--gray);
}

.info p strong {
  font-size: 28px;
  font-weight: 700;
  color: var(--black);
  letter-spacing: var(--letter-spacing);
  margin-top: 8px;
  margin: 0;
}

.principal {
  padding: 64px 16px;
  text-align: center;
}

@media (max-width: 992px) {
  .text-subtitle {
    font-size: 24px;
  }
  .content-img {
    max-width: 100%;
  }
  .text-content {
    font-size: 19px;
  }
  .info p {
    padding: 0 0 10px 42px;
    line-height: 30px;
    font-size: 12px;
  }
  .info i {
    font-size: 28px;
  }

  .row {
    flex-direction: column;
  }

  .principal {
    padding: 32px 16px;
  }

  div img {
    margin-top: 16px;
  }

  .informacion {
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .text-subtitle {
    font-size: 24px;
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
    font-size: 12px;
  }
  .info i {
    font-size: 28px;
  }
}

@media (max-width: 576px) {
  .text-subtitle {
    font-size: 19px;
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
    font-size: 13px;
  }
  .info i {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .text-subtitle {
    font-size: 16px;
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
    font-size: 13px;
  }
  .info i {
    font-size: 28px;
  }
}
</style>
