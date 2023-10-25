<template>
  <section class="custom-container">
    <div class="container">
      <div class="secion-icon">
        <i class="bi bi-layers-fill"></i>
      </div>
      <span class="title">Nuestras actividades</span>
      <h2 class="section-title">¿Qué hacemos?</h2>
      <div class="row">
        <div class="col-lg-6 content-column">
          <div class="we-do">
            <div class="we-do-icon">
              <i class="bi bi-award"></i>
            </div>
            <div>
              <h2 class="we-do-title">Participación</h2>
              <p class="we-do-description lh-base">
                En congresos ambientales y así mantenernos informados y
                capacitados en los servicios para la zona oriental.
              </p>
            </div>
          </div>
          <div class="we-do">
            <div class="we-do-icon">
              <i class="bi bi-journal-richtext"></i>
            </div>
            <div>
              <h2 class="we-do-title">Generar</h2>
              <p class="we-do-description lh-base">
                Oportunidades que le permitan a los estudiantes realizar
                prácticas u horas sociales para el desarrollo de su carrera.
              </p>
            </div>
          </div>
          <div class="we-do">
            <div class="we-do-icon">
              <i class="bi bi-flower2"></i>
            </div>
            <div>
              <h2 class="we-do-title">Fortalecer</h2>
              <p class="we-do-description lh-base">
                La cultura y educación ambiental sostenible mediante alianzas
                con socios estratégicos.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 image-column ml-auto mr-0">
          <img src="/img/carrousel-images/4.png" alt="Imagen" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-container {
  background-color: var(--white);
  padding: 4rem;
  text-align: center;
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

.content-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-title {
  color: var(--black);
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: var(--font);
  letter-spacing: var(--letter-spacing);
}

.we-do {
  display: flex;
}

.we-do-icon {
  font-size: 2.5rem;
  margin-right: 0.5rem;
  color: var(--greenB);
}

.we-do-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  color: var(--black);
  text-align: left;
  letter-spacing: var(--letter-spacing);
  margin-top: 0.5rem;
}

.we-do-description {
  font-size: 1.4rem;
  margin-top: 1rem;
  text-align: justify;
  text-justify: inter-word;
  color: var(--gray-200);
}

@media (max-width: 991.98px) {
  .we-do {
    padding: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    border-radius: 1rem;
    margin-bottom: 2rem;
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
    padding: 2rem;
  }

  .we-do {
    flex-direction: column;
    align-items: center;
  }

  .we-do-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .we-do-description {
    text-align: center;
  }
}

@media (max-width: 575.98px) {
  .we-do-title {
    font-size: 1.5rem;
  }

  .we-do-icon {
    font-size: 2rem;
  }

  .we-do-description {
    font-size: 1.2rem;
  }
}
</style>
