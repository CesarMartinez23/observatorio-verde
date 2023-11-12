<script setup>
import ItemCardWeDo from "./ItemCardWeDo.vue";
</script>

<template>
  <section class="custom-container">
    <div class="section-icon">
      <i class="bi bi-layers-fill" />
    </div>
    <p class="mini-section-title">Nuestras actividades</p>
    <h1 class="section-title">¿Qué hacemos?</h1>
    <div class="row">
      <div class="col-lg-6 content-column">
        <ItemCardWeDo
          title="Participar"
          description="En congresos ambientales y así mantenernos informados y
                capacitados en los servicios para la zona oriental."
        >
          <template v-slot:icon>
            <i class="bi bi-people"></i>
          </template>
        </ItemCardWeDo>

        <ItemCardWeDo
          title="Generar"
          description="Oportunidades que le permitan a los estudiantes realizar
                prácticas u horas sociales para el desarrollo de su carrera."
        >
          <template v-slot:icon>
            <i class="bi bi-gear"></i>
          </template>
        </ItemCardWeDo>

        <ItemCardWeDo
          title="Fortalecer"
          description="La cultura y educación ambiental sostenible mediante alianzas
                con socios estratégicos."
        >
          <template v-slot:icon>
            <i class="bi bi-award"></i>
          </template>
        </ItemCardWeDo>
      </div>
      <div class="col-lg-6 image-column ml-auto mr-0">
        <img src="/img/carrouselImages/4.jpg" alt="Imagen" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-container {
  background-color: var(--white);
}

.image-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-column img {
  width: 100%;
  height: 100%;
  border-radius: 0;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  object-fit: cover;
}

@media (max-width: 991.98px) {
  .we-do {
    padding: 16px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    border-radius: 16px;
    margin-bottom: 32px;
  }

  .we-do:hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
  }

  .we-do-title {
    text-align: center;
  }
}

@media (max-width: 767.98px) {
  .custom-container {
    padding: 32px;
  }

  .we-do {
    flex-direction: column;
    align-items: center;
  }

  .we-do-icon {
    margin-right: 0;
    margin-bottom: 16px;
  }

  .we-do-description {
    text-align: center;
  }
}

@media (max-width: 575.98px) {
  .we-do-title {
    font-size: 24px;
  }

  .we-do-icon {
    font-size: 32px;
  }

  .we-do-description {
    font-size: 19px;
  }
}
</style>
