<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="carousel-item overlayed"
    :class="[item.id == '1' ? 'active' : '']"
    :data-bs-interval="item.intervalItem"
  >
    <img
      :src="'/img/carrousel-images/' + item.imageItem"
      :alt="item.imageAlt"
    />
    <div class="carousel-caption">
      <h1>{{ item.titleItem }}</h1>
      <p>{{ item.descriptionItem }}</p>
      <a :href="item.buttonLink" target="_blank"
        ><button>{{ item.buttonText }}</button></a
      >
    </div>
    <div class="info">
      <span>Ejecutamos Proyectos Para Preservar....</span>
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

.overlayed {
  position: relative;
}

.overlayed::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 70vh;
  width: 100%;
  background-color: #00000070;
  z-index: 10;
}

.overlayed::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 70vh;
  width: 100%;
  background-color: #00000021;
  z-index: 10;
}

.carousel-caption {
  position: absolute;
  top: 15%;
  z-index: 50;
  text-align: left;
}

.carousel-caption h1 {
  color: var(--white);
  font-size: 5.5rem;
  font-family: var(--font);
  font-weight: 700;
  line-height: 90px;
  width: 75%;
  letter-spacing: var(--letter-spacing);
}

.carousel-caption p {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: var(--letter-spacing2);
  font-family: var(--font);
  color: var(--white);
  width: 75%;
}

.carousel-caption button {
  background-color: var(--greenB);
  border: none;
  color: var(--white);
  font-weight: 600;
  padding: 10px 15px;
  font-size: 1.5rem;
  margin-top: 1rem;
  padding: 10px 50px 10px;
  transition: all 0.3s ease-in-out;
}

.carousel-caption button:hover {
  background-color: var(--white);
  color: var(--greenB);
}

.info {
  background-color: var(--greenB);
  font-size: 20px;
  color: #ceffe5;
  /* line-height: 28px; */
  letter-spacing: var(--letter-spacing2);
  font-family: var(--font);
  text-align: center;
  padding: 0.5rem 1rem;
}
</style>
