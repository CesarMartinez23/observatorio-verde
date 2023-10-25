<script setup></script>
<template>
  <section class="section-ugb-verde">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center text-center">
        <div class="contenedor">
          <h1 class="titulo">UGB Verde</h1>
          <p class="subtitulo">Pequeñas acciones, grandes cambios.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Seccion de logros -->
</template>
<style scoped>
.section-ugb-verde {
  background-image: url(/img/ugb-verde/heroTitle.png);
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
}
.contenedor {
  background-color: #ffffffd9;
  padding: 2rem;
  width: 90%;
  border-radius: 0.5rem;
  /* box shadow in rems */
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
}
.titulo {
  color: var(--greenB);
  font-size: 3rem;
  font-weight: 700;
  font-family: var(--font);
}
.titulo::before {
  content: "";
  width: 8%;
  height: 3px;
  background: var(--black);
  display: inline-block;
  margin: 0 15px 10px 0;
  border-radius: 0.5rem;
}
.titulo::after {
  content: "";
  width: 8%;
  height: 3px;
  background: var(--black);
  display: inline-block;
  margin: 0 0 10px 15px;
  border-radius: 0.5rem;
}
.subtitulo {
  font-size: 1.5rem;
  color: var(--black);
  font-weight: 500;
  font-family: var(--font);
}
</style>
