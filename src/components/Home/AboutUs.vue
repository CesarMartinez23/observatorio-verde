<script setup></script>

<template>
  <main class="custom-container">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 video-column">
          <div class="video-wrapper">
            <iframe
              class="video"
              src="https://www.youtube.com/embed/vTou7sBeAaQ"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-lg-5 content-column">
          <div class="section-icon">
            <i class="bi bi-layers-fill"></i>
          </div>
          <span class="title">Sobre nosotros</span>
          <h1 class="content-title">
            Conoce más <br />
            sobre nosotros
          </h1>
          <p class="content-description">
            A finales del año 2019, la Universidad Gerardo Barrios, a través de
            la Vicerrectoría de Investigación presentó el Observatorio Verde de
            Desarrollo Sostenible, que surge después de desarrollar dos
            simposios sobre economía circular en los que se identifica
            necesidades en la zona oriental, observando que es necesario un ente
            que ejecute y analice rigurosamente datos y que brinde un
            seguimiento a las acciones sustentables que se realizan, con el fin
            de llevar acabo los Objetivos de Desarrollo Sostenibles desde El
            Salvador.
          </p>
          <!--a href="#" class="btn content-button fw-bold">Documentos Relacionados</a-->
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.custom-container {
  background-color: var(--f4);
  padding: 4rem;
  text-align: center;
}

.video-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content-column {
  display: flex;
  flex-direction: column;
  text-align: justify;
}

.content-title {
  color: var(--black);
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: var(--font);
  text-align: center;
}

.content-description {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--gray);
  text-align: justify;
  text-justify: inter-word;
  font-family: var(--font);
  line-height: 30px;
  padding-left: 5px;
  padding-right: 40px;
}
.section-icon {
  align-self: center;
}

@media (max-width: 991.98px) {
  .video-column {
    margin-bottom: 2rem;
  }
}

@media (max-width: 767.98px) {
  .custom-container {
    padding: 2rem;
  }

  .content-title {
    font-size: 2rem;
  }

  .content-description {
    font-size: 1.4rem;
  }
}

@media (max-width: 575.98px) {
  .content-title {
    font-size: 1.5rem;
  }

  .content-description {
    font-size: 1.2rem;
  }

  .content-button {
    font-size: 1rem;
  }
}

button {
  background-color: var(--greenB);
  border: none;
  color: var(--white);
  padding: 10px 20px;
  border-radius: 0;
  font-size: 1.5rem;
  margin-top: 1rem;
  z-index: 50;
  text-align: left;
  opacity: 1;
  vertical-align: middle;
  padding: 10px 50px 10px;
}
button:hover {
  background-color: var(--white);
  color: var(--greenB);
}
</style>
