<template>
  <main class="custom-container d-flex justify-content-between flex-wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 video">
          <div class="w-100 h-100">
            <iframe
              class="w-100 h-100"
              src="https://www.youtube.com/embed/vTou7sBeAaQ"
              allowfullscreen
            />
          </div>
        </div>
        <div class="col-lg-5 container">
          <div class="section-icon">
            <i class="bi bi-layers-fill" />
          </div>
          <p class="mini-section-title">Conoce m&aacute;s</p>
          <h1 class="section-title">Sobre Nosotros</h1>
          <p class="content-description ps-lg-4">
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

@media (max-width: 992px) {
  .video {
    margin-bottom: 2.5rem;
    height: 30rem;
  }
}
</style>
