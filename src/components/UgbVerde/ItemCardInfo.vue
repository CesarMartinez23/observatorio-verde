<script setup>
defineProps({
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="col-lg-3 d-flex justify-content-center flex-column py-3">
    <div class="card-wrap1">
      <div class="card-header1 four"></div>
      <div class="card-content1">
        <p class="card-text1">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrap1 {
  width: 100%;
  background: #fff;
  border: 1px solid #fff;
  overflow: hidden;
  color: var(--color-text);
  box-shadow: rgba(0, 0, 0, 0.19) 0 1rem 2rem 0,
    rgba(0, 0, 0, 0.23) 0 0.5rem 0.5rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.card-wrap1:hover {
  transform: scale(1.1);
}

.card-header1 {
  height: 0.5rem;
  width: 100%;
  display: grid;
  place-items: center;
}

.card-content1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.card-text1 {
  text-align: justify;
  font-size: 1.5em;
  padding: 1rem;
  height: 30rem;
}

.card-header1.four {
  background: linear-gradient(
    to bottom left,
    var(--card4-gradient-color1),
    var(--card4-gradient-color2)
  );
}
</style>
