<script setup>
import Project from "../components/Project/Project.vue";
import { useProjectsStore } from "../stores/projects";

const projectsStore = useProjectsStore();

console.log(projectsStore.projects);
</script>

<template>
  <section class="custom-container">
    <div class="container">
      <div class="section-icon">
        <i class="bi bi-layers-fill" />
      </div>
      <p class="mini-section-title">Proyectos</p>
      <h1 class="section-title">Iniciativas Medioambientales</h1>
    </div>

    <div class="container">
      <div class="row">
        <Project
          v-for="project in projectsStore.projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
