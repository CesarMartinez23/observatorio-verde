<script setup>

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="carousel-item" :class="[item.id == '1' ? 'active' :  '']" :data-bs-interval="item.intervalItem">
    <img :src="`/img/carrousel-images/${item.imageItem}`" :alt="item.imageAlt" />
    <div class="carousel-caption mx-auto">
      <h5>{{ item.titleItem }}</h5>
      <p>{{ item.descriptionItem }}</p>
      <a :href="item.buttonLink" target="_blank"><button>{{ item.buttonText }}</button></a>
    </div>
  </div>
</template>

<style scoped>
.carousel-item img {
  display: block;
  height: 90vh;
  width: 100%;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  width: 75%;
  background-color: #e4dede;
  opacity: 0.8;
  border-radius: 2rem;
  margin-bottom: 1rem;
}

.carousel-caption h5,
p {
  color: var(--black);
}

.carousel-caption h5 {
  font-size: 2.5rem;
}

.carousel-caption p {
  font-size: 1.5rem;
}

.carousel-caption button {
  background-color: var(--green);
  border: none;
  color: var(--white);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.5rem;
  margin-top: 1rem;
}

.carousel-caption button:hover {
  background-color: var(--green-900);
  color: var(--white);
}

@media (max-width: 767px) {
  .carousel-caption h5 {
    font-size: 1.5rem;
  }

  .carousel-caption p {
    font-size: 1rem;
  }

  .carousel-caption button {
    font-size: 1rem;
    padding: 5px 10px;
  }
}
</style>
