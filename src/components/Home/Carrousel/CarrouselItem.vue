<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div id="carouselExampleAutoplaying" class="carousel-item overlayed">
    <slot name="image"></slot>
    <div class="carousel-caption">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <a :href="buttonLink" target="_blank"
        ><button>{{ buttonText }}</button>
      </a>
    </div>
    <div class="info">
    </div>
  </div>
</template>

<style scoped>
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
  font-size: 8rem;
  font-weight: 700;
  line-height: 9rem;
  width: 75%;
  letter-spacing: var(--letter-spacing);
}

.carousel-caption p {
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 3rem;
  letter-spacing: var(--letter-spacing2);
  color: var(--white);
  width: 75%;
}

.carousel-caption button {
  background-color: var(--green-900);
  border: none;
  color: var(--white);
  font-weight: 600;
  font-size: 2.2rem;
  margin-top: 2rem;
  padding: 1rem 5rem 1rem;
  transition: all 0.3s ease-in-out;
}

.carousel-caption button:hover {
  background-color: var(--white);
  color: var(--green-900);
  transform: scale(1.1);
}

.info {
  background-color: var(--green-900);
  font-size: 2rem;
  color: #ceffe5;
  letter-spacing: var(--letter-spacing2);
  text-align: center;
  padding: 0.8rem 1.6rem;
}

@media (max-width: 768px) {
  .carousel-caption h1 {
    font-size: 4.5rem;
    line-height: 5rem;
    width: 100%;
  }

  .carousel-caption p {
    font-size: 1.5rem;
    line-height: 2rem;
    width: 100%;
  }

  .carousel-caption button {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    padding: 1rem 3rem 1rem;
  }
}
</style>
