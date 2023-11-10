<script setup></script>
<template>
  <section class="section-directorio">
    <div class="section-directorio-sombra">
      <div class="container">
        <div class="content">
          <h1 class="titulo">Instituciones Ligadas al Proyecto</h1>
          <div class="sub-titulo">
            <p>Trabajando juntos, hacemos más...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-card">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
          <div class="card-instituciones">
            <div class="img-instituciones"></div>
            <div class="content-instituciones">
              <h3>Mesa de Cambio Climático de El Salvador</h3>
              <p>
                <i class="bi bi-globe"></i>
                <a href="mesacambioclimatico@gmail.com" target="_blank"
                  >mesacambioclimatico@gmail.com</a
                >
              </p>
              <p><i class="bi bi-telephone"></i>7744-4576</p>
              <p>
                <i class="bi bi-geo-alt"></i>Mesa de Cambio Climático El
                Salvador
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="card-instituciones">
            <div class="img-instituciones"></div>
            <div class="content-instituciones">
              <h3>Ministerio de Medio Ambiente</h3>
              <p>
                <i class="bi bi-globe"></i>
                <a href="https://marn.gob.sv/" target="_blank"
                  >https://marn.gob.sv/</a
                >
              </p>
              <p><i class="bi bi-telephone"></i>2665-8383</p>
              <p>
                <i class="bi bi-geo-alt"></i>Colonia Ciudad Jardín, calle Los
                Naranjos, #22, San Miguel.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="card-instituciones">
            <div class="img-instituciones"></div>
            <div class="content-instituciones">
              <h3>Fundación Segundo Montes</h3>
              <p>
                <i class="bi bi-globe"></i>
                <a href="Fsegundomontes@gmail.com" target="_blank"
                  >Fsegundomontes@gmail.com</a
                >
              </p>
              <p><i class="bi bi-telephone"></i>2680-5574</p>
              <p>
                <i class="bi bi-geo-alt"></i>Carretera a Perkin Km 192 1/2,
                caserío San Luis, Meanguera Morazán.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="card-instituciones">
            <div class="img-instituciones"></div>
            <div class="content-instituciones">
              <h3>Programa de las Naciones Unidas para el Desarrollo</h3>
              <p>
                <i class="bi bi-envelope"></i>
                <a href="registry.sv@undp.org" target="_blank"
                  >registry.sv@undp.org</a
                >
              </p>
              <p><i class="bi bi-telephone"></i>2263-0066</p>
              <p>
                <i class="bi bi-geo-alt"></i>Edificio Naciones Unidas, Blvd.
                Orden de Malta Sur, No. 2-B, Santa Elena, Antiguo Cuscatlan, La
                Libertad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-directorio {
  background: url("/img/directoryImages/portadaDirectorio.jpg") center;
  width: 100%;
  min-height: 80vh;
  background-size: cover;
  position: relative;
  z-index: 3;
}
.section-directorio-sombra {
  position: absolute;
  background: rgba(27, 47, 69, 0.8);
  inset: 0;
}
.content {
  padding: 200px 0;
}

.titulo {
  color: var(--green-900);
  font-size: 3rem;
  font-weight: 700;
  font-family: var(--font);
}
.sub-titulo {
  color: var(--white);
  padding-left: 20px;
  font-family: var(--font);
  border-left: 2px solid var(--green-900);
  margin: 40px 0;
  font-size: 1.8rem;
  margin-top: 0.2rem;
}
.sub-titulo p {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.card-instituciones {
  margin-bottom: 40px;
  width: 100%;
  height: 250px;
  float: left;
  border-radius: 5px;
  background: var(--white);
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
.img-instituciones {
  width: 100%;
  float: left;
  position: relative;
  overflow: hidden;
}
.img-instituciones img {
  width: 50px;
  height: auto;
}
.content-instituciones {
  padding: 20px 30px;
  clear: both;
}
.card-instituciones h3 {
  font-weight: 700;
  line-height: 34px;
  font-size: 1.2rem;
  margin: 0 0 8px;
  font-family: var(--font);
}
.card-instituciones p {
  font-size: 1rem;
  color: var(--black);
}
.card-instituciones p i {
  color: var(--green-900);
  margin-right: 5px;
  padding: 50px 0px;
}

@media (max-width: 768px) {
  .titulo {
    font-size: 2rem;
  }
  .sub-titulo {
    font-size: 1.2rem;
  }
  .card-instituciones {
    margin-bottom: 20px;
  }
  .card-instituciones h3 {
    font-size: 1rem;
  }
  .card-instituciones p {
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .titulo {
    font-size: 1.5rem;
  }
  .sub-titulo {
    font-size: 1rem;
  }
  .card-instituciones {
    margin-bottom: 20px;
  }
  .card-instituciones h3 {
    font-size: 0.8rem;
  }
  .card-instituciones p {
    font-size: 0.7rem;
  }

  .section-directorio {
    min-height: 60vh;
  }

  .content {
    padding: 100px 0;
  }

  .row {
    margin-left: 0px;
    margin-right: 0px;
  }
}

@media (max-width: 400px) {
  .titulo {
    font-size: 1.2rem;
  }
  .sub-titulo {
    font-size: 0.8rem;
  }
  .card-instituciones {
    margin-bottom: 20px;
  }
  .card-instituciones h3 {
    font-size: 0.7rem;
  }
  .card-instituciones p {
    font-size: 0.6rem;
  }
}
p {
  font-family: var(--font);
}
</style>
