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
  border: 1px solid #ebebeb;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 5px;
  transition: all 0.3s ease-in-out 0s;
}

.counter-section:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out 0s;
}

.counter-section span.counter {
  font-size: 40px;
  color: #000;
  line-height: 60px;
  display: block;
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
</style>
