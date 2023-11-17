<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="col-lg-4 mt-5">
    <div class="card project-card animated fadeInUp h-100">
      <img
        :src="[
          project.imagesproject_set[0]
            ? project.imagesproject_set[0].image_project.url
            : '/imageNotFound.jpg',
        ]"
        class="card-img-top"
        :alt="project.name"
      />

      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <button class="btn">Más información</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 3rem, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.project-card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-0.5rem);
}

.project-card img {
  height: 20rem;
  object-fit: cover;
}

.project-card .card-body {
  padding: 2rem;
}

.project-card .card-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.project-card .btn {
  background-color: var(--green-900);
  color: var(--white);
  transition: transform 0.3s ease, background-color 0.3s ease;
  font-size: 2rem;
}

.project-card .btn:hover {
  background-color: var(--green-600);
  transform: scale(1.05);
}
</style>
