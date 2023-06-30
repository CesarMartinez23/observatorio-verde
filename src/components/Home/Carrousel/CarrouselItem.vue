<script setup>

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="carousel-item overlayed" :class="[item.id == '1' ? 'active' :  '']" :data-bs-interval="item.intervalItem">
    <img :src="'/img/carrousel-images/' + item.imageItem" :alt="item.imageAlt" />
    <div class="carousel-caption mx-auto">
      <h1>{{ item.titleItem }}</h1>
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

.overlayed {
  position: relative;
}

.overlayed::before {
  content: ' ';
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000070;
}
.overlayed::after {
  content: ' ';
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000021;
}
.carousel-caption {
  position: absolute;
  width: 75%;
  opacity: 0.8;
  border-radius: 2rem;
  margin-bottom: 16rem;
  z-index: 50;
  text-align: left;
  opacity: 1;
}

.carousel-caption h1{
  color: var(--white);
  font-size: 80px;
  font-family: var(--font);
  font-weight: 700;
  line-height: 90px;
  width: 50%;
  letter-spacing: var(--letter-spacing);
}

.carousel-caption p {
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: var(--letter-spacing2);
  font-family: var(--font);
  color: var(--white);
  width: 70%;
}

.carousel-caption button {
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

.carousel-caption button:hover {
  background-color: var(--white);
  color: var(--greenB);
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
