<script setup>
defineProps({
  number: {
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
      >{{ number }}
    </span>
    <span class="counter-title">{{ description }}</span>
  </div>
</template>

<style scoped>

.counter-section span.counter {
  font-size: 40px;
  color: #000;
  line-height: 60px;
  display: block;
  font-family: var(--font);
  letter-spacing: 2px;
  font-weight: bold;
}
.counter-title {
  font-size: 19px;
  margin-top: 16px;
  text-align: center;
  text-justify: inter-word;
  color: var(--black);
  padding: 0 16px;
  font-family: var(--font);
}

.counter-title {
  letter-spacing: 0.55px;
  float: left;
}
.counter-style2 span.counter {
  letter-spacing: 0.55px;
  float: left;
  margin-right: 10px;
}

.medium-icon {
  font-size: 40px !important;
  margin-bottom: 15px !important;
  color: var(--green-900);
}
</style>
