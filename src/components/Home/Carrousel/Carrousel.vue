<script setup>
import CarrouselItem from "./CarrouselItem.vue";
</script>

<template>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <CarrouselItem
        class="active"
        title="Observatorio Verde 1"
        description="Descubre lo mejor del observatorio verde"
        buttonLink="https://ugb.edu.sv/observatorioverde/"
        buttonText="Informacion"
      >
        <template v-slot:image>
          <img src="/img/carrouselImages/1.jpg" alt="Imagen 1" />
        </template>
      </CarrouselItem>

      <CarrouselItem
        title="Observatorio Verde 2"
        description="Las mejores noticias del observatorio verde"
        buttonLink="https://ugb.edu.sv/observatorioverde/"
        buttonText="Mas informacion"
      >
        <template v-slot:image>
          <img src="/img/carrouselImages/2.jpg" alt="Imagen 2" />
        </template>
      </CarrouselItem>

      <CarrouselItem
        title="UGB Verde 3"
        description="Ya viste nuestros proyectos de UGB Verde?"
        buttonLink="https://ugb.edu.sv/observatorioverde/"
        buttonText="Vamos"
      >
        <template v-slot:image>
          <img src="/img/carrouselImages/3.jpg" alt="Imagen 3" />
        </template>
      </CarrouselItem>

      <CarrouselItem
        title="Observatorio Verde 4"
        description="Te gusta la naturaleza? Visita nuestro observatorio verde"
        buttonLink="https://ugb.edu.sv/observatorioverde/"
        buttonText="Contactanos"
      >
        <template v-slot:image>
          <img src="/img/carrouselImages/4.jpg" alt="Imagen 4" />
        </template>
      </CarrouselItem>
    </div>
  </div>
</template>

<style scoped>
.carousel-item img {
  display: block;
  height: 70vh;
  width: 100%;
  object-fit: cover;
}
</style>
