<script setup>
defineProps({
  numberTitle: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="col-md-4 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated"
    data-wow-duration="600ms"
    style="
      visibility: visible;
      animation-duration: 600ms;
      animation-name: fadeInUp;
    "
  >
    <div class="icons">
      <slot name="icon"></slot>
    </div>
    <span class="timer counter alt-font appear" data-to="1" data-speed="7000"
      >{{ numberTitle }}
    </span>
    <span class="counter-title">{{ description }}</span>
  </div>
</template>

<style scoped>
.counter-section {
  border: 0.1rem solid #ebebeb;
  padding: 2rem;
  margin-bottom: 3rem;
  background-color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out 0s;
}

.counter-section:hover {
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out 0s;
}

.counter-section span.counter {
  font-size: var(--title-counter);
  color: #000;
  line-height: 6rem;
  display: block;
  font-weight: bold;
}
.counter-title {
  font-size: var(--text);
  margin-top: 1.6rem;
  text-align: center;
  text-justify: inter-word;
  color: var(--black);
  padding: 0 1.6rem;
}

.counter-title {
  float: left;
}
.counter-style2 span.counter {
  float: left;
  margin-right: 1rem;
}
</style>
