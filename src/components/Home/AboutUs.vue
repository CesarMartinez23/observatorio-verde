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
            />
          </div>
        </div>
        <div class="col-lg-5 content-column">
          <div class="section-icon">
            <i class="bi bi-layers-fill" />
          </div>
          <p class="mini-section-title">Conoce más</p>
          <h1 class="section-title">Sobre nosotros</h1>
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
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.custom-container {
  background-color: var(--f4);
}

.video-column {
  display: flex;
  justify-content: center;
}

.video-wrapper {
  position: relative;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 15px;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
