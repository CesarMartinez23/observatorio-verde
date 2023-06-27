<script setup></script>

<template>
  <main class="custom-container">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 video-column">
          <div class="video-wrapper">
            <iframe class="video" src="https://www.youtube.com/embed/vTou7sBeAaQ" frameborder="0"
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-lg-6 content-column">
          <h1 class="content-title">¿QUI&Eacute;NES SOMOS?</h1>
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
          <a href="#" class="btn content-button fw-bold">Documentos Relacionados</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.custom-container {
  background-color: var(--green);
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
  justify-content: center;
  align-items: center;
}

.content-title {
  color: var(--white);
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px;
}

.content-description {
  font-size: 22px;
  margin-bottom: 30px;
  color: var(--white);
  text-align: justify;
  text-justify: inter-word;
}

.content-button {
  font-size: 1rem;
  padding: 12px 30px;
  border-radius: 30px;
  background-color: var(--green-600);
  color: var(--white);
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

.content-button:hover {
  color: var(--white);
  background-color: var(--green-500);
  transform: scale(1.1);
}

@media (max-width: 991px) {
  .custom-container {
    padding: 2rem;
  }

  .content-title {
    font-size: 35px;
    margin-top: 1rem;
  }

  .content-description {
    font-size: 18px;
  }

}

@media (max-width: 767px) {
  .custom-container {
    padding: 1rem;
  }

  .content-title {
    font-size: 25px;
  }

  .content-description {
    font-size: 16px;
  }

  .video-wrapper {
    margin-top: 1rem;
  }
}

@media (max-width: 575px) {
  .custom-container {
    padding: 0.5rem;
  }

  .content-title {
    font-size: 20px;
  }

  .content-description {
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .custom-container {
    padding: 0.5rem;
  }

  .content-title {
    font-size: 18px;
  }

  .content-description {
    font-size: 12px;
  }
}
</style>
